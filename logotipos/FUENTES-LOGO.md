# Fuentes del Logo — SERVICIOS LAB263

## "SERVICIOS"

| Campo | Valor |
|-------|-------|
| Estilo | Sans-serif, condensada, bold |
| Google Fonts (mejores match) | **Montserrat** ExtraBold, **Roboto Condensed** Bold, **Poppins** ExtraBold |
| Alternativas free | **Oswald** Bold, **Barlow Condensed** Bold, **Archivo Narrow** Bold, **Inter** Bold |
| Recomendada | **Montserrat ExtraBold** (más cercana visualmente) |

Montserrat es la que más se aproxima al grosor y condensación de las letras del logo. Descargar: https://fonts.google.com/specimen/Montserrat

## "LAB263"

| Campo | Valor |
|-------|-------|
| Estilo | Sans-serif, bold, con peso variable (LAB más grueso que 263) |
| Google Fonts (mejores match) | **Bebas Neue** Bold, **Open Sans** Bold |
| Alternativas free | **Anton**, **Rajdhani** Bold, **Oswald** Bold, **Chivo** Bold |
| Recomendada | **Bebas Neue Bold** (más cercana visualmente por el peso pesado en LAB) |

Bebas Neue captura el estilo bold condensado de "LAB". Descargar: https://fonts.google.com/specimen/Bebas+Neue

## Notas

- El logo original usa paths vectoriales (no texto editable), por lo que estas fuentes son aproximaciones visuales.
- Si quieres que el texto sea EDITABLE en el SVG, reemplaza los paths de texto con `<text>` usando estas fuentes.
- La palabra "SERVICIOS" está toda en mayúsculas con tracking apretado.
- "LAB263" tiene LAB más grueso y 263 más fino — puedes simularlo con Bebas Neue para LAB y Bebas Neue Regular para 263.

## Instalación rápida (Linux)

```bash
# Descargar Montserrat
wget -O /tmp/Montserrat.zip "https://fonts.google.com/download?family=Montserrat"
unzip -o /tmp/Montserrat.zip -d ~/.local/share/fonts/Montserrat

# Descargar Bebas Neue
wget -O /tmp/BebasNeue.zip "https://fonts.google.com/download?family=Bebas+Neue"
unzip -o /tmp/BebasNeue.zip -d ~/.local/share/fonts/BebasNeue

# Actualizar caché
fc-cache -fv
```
