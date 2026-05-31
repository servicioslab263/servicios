#!/usr/bin/env python3
"""Servidor estático seguro y optimizado — LAB263 Servicios"""

import gzip
import logging
import os
import sys
from http import HTTPStatus
from http.server import HTTPServer, SimpleHTTPRequestHandler

HOST = "0.0.0.0"
PORT = int(os.environ.get("PORT", 8080))
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
)
log = logging.getLogger("server")

COMPRESSIBLE = frozenset({
    "text/html", "text/css", "text/javascript",
    "application/javascript", "image/svg+xml",
})

SECURITY_HEADERS = {
    "Content-Security-Policy": (
        "default-src 'self'; "
        "img-src 'self' data: https:; "
        "style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; "
        "font-src 'self' https://fonts.gstatic.com; "
        "script-src 'self' 'unsafe-inline'; "
        "frame-src https://www.google.com; "
        "connect-src 'self'"
    ),
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "1; mode=block",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "geolocation=(), microphone=(), camera=()",
}

ERROR_404 = (
    b"<!DOCTYPE html><html lang='es'><head><meta charset='UTF-8'>"
    b"<meta name='viewport' content='width=device-width,initial-scale=1'>"
    b"<title>404 - Pagina no encontrada</title>"
    b"<style>body{font-family:system-ui,sans-serif;display:flex;align-items:center;"
    b"justify-content:center;min-height:100vh;margin:0;background:#f5f5f5;color:#333;"
    b"text-align:center}h1{font-size:4rem;margin:0;color:#e74c3c}p{font-size:1.2rem}"
    b".btn{display:inline-block;margin-top:1rem;padding:.75rem 2rem;background:#3498db;"
    b"color:#fff;border-radius:8px;text-decoration:none}</style></head><body><div>"
    b"<h1>404</h1><p>Pagina no encontrada</p>"
    b"<a class='btn' href='/'>Volver al inicio</a></div></body></html>"
)

ERROR_500 = (
    b"<!DOCTYPE html><html lang='es'><head><meta charset='UTF-8'>"
    b"<meta name='viewport' content='width=device-width,initial-scale=1'>"
    b"<title>500 - Error interno</title>"
    b"<style>body{font-family:system-ui,sans-serif;display:flex;align-items:center;"
    b"justify-content:center;min-height:100vh;margin:0;background:#f5f5f5;color:#333;"
    b"text-align:center}h1{font-size:4rem;margin:0;color:#e67e22}p{font-size:1.2rem}"
    b".btn{display:inline-block;margin-top:1rem;padding:.75rem 2rem;background:#3498db;"
    b"color:#fff;border-radius:8px;text-decoration:none}</style></head><body><div>"
    b"<h1>500</h1><p>Error interno del servidor</p>"
    b"<a class='btn' href='/'>Volver al inicio</a></div></body></html>"
)


class SecureHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, fmt, *args):
        log.info("%s | %s", self.client_address[0], fmt % args)

    def send_response(self, code, message=None):
        super().send_response(code, message)
        for key, val in SECURITY_HEADERS.items():
            self.send_header(key, val)

    def _cache_control(self):
        path = self.path.split("?")[0]
        if path.startswith("/assets/") or path.startswith("/logotipos/"):
            return "public, max-age=86400"
        if path in ("/", "/index.html"):
            return "public, max-age=3600"
        return "public, max-age=3600, must-revalidate"

    def end_headers(self):
        self.send_header("Cache-Control", self._cache_control())
        super().end_headers()

    def _compress(self, data, ct):
        accept = self.headers.get("Accept-Encoding", "")
        if ct in COMPRESSIBLE and "gzip" in accept and len(data) > 256:
            return gzip.compress(data), True
        return data, False

    def send_error(self, code, message=None, explain=None):
        if code == 404:
            body = ERROR_404
        elif code == 500 or code >= 400:
            body = ERROR_500
        else:
            return super().send_error(code, message, explain)

        ct = "text/html; charset=utf-8"
        body, did_compress = self._compress(body, ct)

        self.send_response(code)
        self.send_header("Content-Type", ct)
        if did_compress:
            self.send_header("Content-Encoding", "gzip")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def send_head(self):
        path = self.translate_path(self.path)

        # --- directorio: servir index ---
        if os.path.isdir(path):
            for index in ("index.html", "index.htm"):
                idx = os.path.join(path, index)
                if os.path.isfile(idx):
                    self.path = os.path.join(self.path, index)
                    return self.send_head()
            self.send_error(404)
            return None

        # --- archivo ---
        try:
            f = open(path, "rb")
        except OSError:
            self.send_error(404)
            return None

        try:
            ct = self.guess_type(path)
            fs = os.fstat(f.fileno())
            data = f.read()
        except Exception:
            f.close()
            self.send_error(500)
            return None
        finally:
            f.close()

        # compresión (después de send_response para orden HTTP correcto)
        data, did_compress = self._compress(data, ct)

        self.send_response(200)
        self.send_header("Content-Type", ct)
        if did_compress:
            self.send_header("Content-Encoding", "gzip")
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Last-Modified", self.date_time_string(fs.st_mtime))
        self.end_headers()
        return data

    def do_GET(self):
        data = self.send_head()
        if data is not None:
            self.wfile.write(data)

    def do_HEAD(self):
        data = self.send_head()
        # HEAD no escribe body


def main():
    server_address = (HOST, PORT)
    httpd = HTTPServer(server_address, SecureHandler)

    print(
        f"\n{'='*55}\n"
        f"  LAB263 - Servidor Seguro\n"
        f"  http://{HOST}:{PORT}\n"
        f"  Headers de seguridad: activos\n"
        f"  Compresion gzip: HTML/CSS/JS/SVG\n"
        f"  Cache: assets/ -> 24h | index.html -> 1h\n"
        f"{'='*55}\n"
    )

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n  Servidor detenido.")
        httpd.server_close()
        sys.exit(0)


if __name__ == "__main__":
    main()
