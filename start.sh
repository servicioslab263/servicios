#!/usr/bin/env bash
# start.sh — LAB263 Servidor Seguro
set -e

DIR="$(cd "$(dirname "$0")" && pwd)"
PORT="${PORT:-8080}"

echo "=== LAB263 Servidor Seguro ==="
echo "Puerto: $PORT"
echo "Directorio: $DIR"
echo ""

# Matar proceso anterior si existe
PID="$(lsof -ti :"$PORT" 2>/dev/null || true)"
if [ -n "$PID" ]; then
    echo "Deteniendo proceso anterior (PID $PID)..."
    kill "$PID" 2>/dev/null || true
    sleep 1
fi

# Iniciar servidor
exec python3 "$DIR/server.py"
