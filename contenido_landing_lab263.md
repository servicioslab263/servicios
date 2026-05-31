# 📋 Estrategia de Contenido — Landing Page Servicios LAB263

---

## Resumen Ejecutivo

| Parámetro | Definición |
|-----------|-----------|
| **Tono de voz** | Directo, empático, profesional. Sin adjetivos vacíos. Cada frase transmite confianza y acción inmediata. Voz de experto que entiende el dolor del cliente. |
| **Paleta de colores** | **Carbón** `#333333` (fondos, textos) · **Dorado LAB** `#F5C226` (acentos, CTAs, rayo) · **Blanco** `#FFFFFF` (fondos alternos, textos sobre oscuro) · **Gris claro** `#F7F7F7` (fondos de sección alternos) · **Negro profundo** `#1A1A1A` (hero, footer) |
| **Tipografía** | **Montserrat** ExtraBold (titulares, logo) · **Inter** Regular/Medium (cuerpo, descripciones) |
| **Objetivo de conversión** | Generar contacto directo por WhatsApp para solicitar presupuesto gratuito |
| **Público objetivo** | Propietarios de apartamentos, comercios y residencias en Ciudad de Panamá que necesitan reparaciones, remodelaciones o mantenimiento confiable |

---

## 1. Hero / Introducción

**Texto:**

> **Navbar:** Logo SVG (fondo negro) a la izquierda. Links: Servicios · Nosotros · Galería · Reseñas · Contacto. Botón CTA derecho: "Solicita Presupuesto".

> **Titular principal (H1):**
> "¿Reparaciones urgentes, obras a medias o servicios sin garantía? Nosotros llegamos, resolvemos y te entregamos funcionando."

> **Subtítulo (H2):**
> "Servicios LAB263: 15 años transformando hogares y negocios en Panamá. Soluciones llave en mano con respaldo real — sin rodeos, sin sobrecostos, sin dolores de cabeza."

> **CTA primario:** "Solicita tu presupuesto gratis →"
> **CTA secundario:** "Conoce nuestros servicios ↓"

**Diseño sugerido:**
- Fondo: imagen `img_entrega_llaves.jpeg` (entrega de llaves en apartamento con vista al skyline) con overlay degradado negro 70% → transparente de izquierda a derecha
- Titular en blanco `#FFFFFF`, subtítulo en `#F5C226` dorado
- Tipografía titular: Montserrat ExtraBold 48px (desktop), 28px (mobile)
- Navbar: fondo `#1A1A1A` con efecto glassmorphism al hacer scroll (backdrop-filter blur)
- CTA primario: botón dorado `#F5C226` con texto `#333333`, hover con scale(1.05) y sombra
- CTA secundario: texto blanco con flecha animada bounce vertical
- Altura: 100vh en desktop, auto en mobile
- Animación: fade-in del texto desde la izquierda (0.6s ease-out)

**Assets a usar:**
- `logotipos/logo-solo fondo negro.svg` — navbar
- `Quiero_que_generes_una_imagen_202605281944.jpeg` — fondo hero (entrega de llaves)

---

## 2. Imagen Promocional

**Texto:**

> **Titular de sección:**
> "Tu hogar merece manos que lo cuiden como propio"

> **Texto promocional:**
> "Sabemos lo que se siente: un contratista que desaparece a mitad de obra, presupuestos que se triplican sin aviso, o reparaciones que duran menos que la factura. En LAB263, cada proyecto es personal. Nuestro equipo llega uniformado, con herramienta profesional y un plan claro. Te explicamos qué vamos a hacer, cómo lo vamos a hacer, y cuánto va a costar — antes de tocar un solo tornillo."

> **Línea de cierre (bold):**
> "Porque tu tranquilidad no es negociable."

> **Micro-CTA:** "Ver nuestros servicios →"

**Diseño sugerido:**
- Layout: dos columnas 50/50 en desktop. Imagen a la izquierda, texto a la derecha. Stack vertical en mobile (imagen arriba)
- Imagen: `img_equipo_obra.jpeg` (equipo LAB263 trabajando en apartamento con skyline) con bordes redondeados 12px y sombra suave
- Fondo de sección: `#F7F7F7`
- Titular: Montserrat ExtraBold 36px, color `#333333`
- Cuerpo: Inter Regular 18px, color `#555555`, line-height 1.7
- Línea de cierre: Inter Medium, color `#F5C226`
- Efecto: imagen con reveal-on-scroll (slide desde la izquierda), texto fade-in desde la derecha
- Padding vertical: 80px

**Assets a usar:**
- `quiero_que_generes_una_imagen_202605281940.jpeg` — equipo trabajando en piso de mármol

---

## 3. Servicios

**Texto:**

> **Titular de sección:**
> "Soluciones completas para tu hogar y negocio"

> **Subtítulo:**
> "Un solo equipo. Todas las especialidades. Cero complicaciones."

**Tarjetas de servicio (8 servicios):**

| # | Icono (SVG inline) | Título | Descripción |
|---|---|---|---|
| 1 | ⚡ Rayo | **Sistemas Eléctricos** | Diseño, instalación y reparación de sistemas eléctricos residenciales, comerciales e industriales. |
| 2 | 🔧 Llave inglesa | **Plomería** | Reparaciones, instalaciones y mantenimiento de tuberías, grifería y sistemas hidráulicos. |
| 3 | 🏗️ Edificio | **Construcción General** | Obras civiles, ampliaciones, levantamiento de paredes y estructura desde cero. |
| 4 | 🎨 Paleta | **Diseño de Interiores** | Remodelaciones con diseño funcional y estético que transforman tus espacios. |
| 5 | 🛡️ Escudo check | **Mantenimiento Preventivo** | Planes programados para que tu propiedad nunca te dé sorpresas costosas. |
| 6 | ❄️ Copo de nieve | **Aire Acondicionado** | Instalación, reparación y mantenimiento de sistemas de climatización. |
| 7 | 🧱 Pared | **Gypsum y Pintura** | Cielos rasos, divisiones, acabados de pared y pintura profesional. |
| 8 | 📹 Cámara | **Seguridad Electrónica** | Cámaras, alarmas y control de acceso para proteger tu inversión. |

**Diseño sugerido:**
- Grid responsive: 4 columnas en desktop, 2 en tablet, 1 en mobile
- Cada tarjeta: fondo blanco, borde redondeado 16px, sombra `0 4px 20px rgba(0,0,0,0.08)`
- Icono: SVG inline 48x48px en color dorado `#F5C226` dentro de un círculo `#FFF9E6` (dorado 10% opacidad)
- Título: Montserrat Bold 18px, color `#333333`
- Descripción: Inter Regular 14px, color `#666666`
- Hover: elevación (translateY -4px), sombra más intensa, borde inferior 3px `#F5C226`
- Transición: 0.3s cubic-bezier
- Fondo de sección: `#FFFFFF`
- Padding tarjeta: 32px
- Gap entre tarjetas: 24px

**Assets a usar:**
- Iconos SVG inline (no imágenes externas) — usar Lucide Icons o Heroicons para consistencia
- No se necesitan imágenes fotográficas en esta sección

---

## 4. Propuesta de Valor / Historia

**Texto:**

> **Titular de sección:**
> "Detrás de cada proyecto hay una historia de compromiso"

> **Subtítulo:**
> "Conoce a quien lidera tu obra"

> **Párrafo 1 — El origen:**
> "Luis Baltodano llegó a Panamá desde Venezuela con una maleta, una familia que mantener y 15 años de experiencia en sistemas eléctricos industriales. No tenía contactos ni recomendaciones. Tenía algo mejor: la determinación de construir un negocio donde cada cliente fuera tratado como el primero."

> **Párrafo 2 — La filosofía:**
> "Así nació Servicios LAB263 — una empresa familiar donde el dueño supervisa cada proyecto personalmente. No somos una corporación con call center. Somos un equipo que conoce tu nombre, entiende tu problema y no se va hasta que esté resuelto."

> **Párrafo 3 — La prueba:**
> "Cuando llegó la pandemia, muchas empresas desaparecieron. LAB263 hizo lo contrario: dio la mano a sus clientes en los momentos más difíciles, cuidando sus intereses económicos y construyendo relaciones que hoy, años después, siguen generando trabajo boca a boca. Eso no se compra con publicidad."

> **Párrafo 4 — La promesa:**
> "Hoy, con más de 15 años de trayectoria y una cartera de clientes que habla por nosotros, seguimos con la misma filosofía del día uno: tu propiedad en manos profesionales, confiables y comprometidas."

> **Dato destacado (stat box):**
> `15+` años de experiencia · `500+` proyectos completados · `100%` compromiso con tu satisfacción

**Diseño sugerido:**
- Layout: texto a la izquierda (60%), imagen a la derecha (40%) en desktop. Stack en mobile
- Imagen: `img_trabajadores_paredes.jpeg` (equipo trabajando en paredes con vista al skyline) con clip-path diagonal o bordes redondeados asimétricos
- Fondo de sección: `#1A1A1A` (oscuro, para contraste dramático)
- Titular: Montserrat ExtraBold 36px, color `#FFFFFF`
- Subtítulo: Inter Medium 18px, color `#F5C226`
- Párrafos: Inter Regular 16px, color `#CCCCCC`, line-height 1.8
- Stats: tres cajas inline con número grande Montserrat ExtraBold 48px en `#F5C226` y label Inter 14px en blanco
- Efecto: stats con counter animation (0 → número final) al entrar en viewport
- Línea decorativa dorada de 60px debajo del subtítulo

**Assets a usar:**
- `quiero_que_generes_una_imagen_202605281940 (1).jpeg` — equipo LAB263 trabajando en paredes y pisos

---

## 5. Galería de Imágenes

**Texto:**

> **Titular de sección:**
> "Nuestro trabajo habla por nosotros"

> **Subtítulo:**
> "Proyectos reales en los edificios más exclusivos de Ciudad de Panamá"

**Imágenes a incluir (5 reales del proyecto):**

| # | Archivo | Descripción para alt-text | Caption sugerido |
|---|---------|--------------------------|-----------------|
| 1 | `Quiero_que_generes_una_imagen_202605281944.jpeg` | Entrega de llaves de apartamento remodelado con vista al skyline de Panamá | "Entrega final: tu espacio listo para disfrutar" |
| 2 | `quiero_que_generes_una_imagen_202605281940.jpeg` | Equipo LAB263 trabajando en instalación eléctrica en apartamento de lujo | "Equipo profesional en obra — piso 30, vista al Pacífico" |
| 3 | `quiero_que_generes_una_imagen_202605281941.jpeg` | Remodelación de cocina con vigas de madera y vista panorámica al mar | "Remodelación integral: cocina de diseño con acabados premium" |
| 4 | `quiero_que_generes_una_imagen_202605281941 (1).jpeg` | Trabajadores LAB263 instalando pisos y luminarias al atardecer | "Cada detalle importa — instalación de pisos e iluminación" |
| 5 | `quiero_que_generes_una_imagen_202605281940 (1).jpeg` | Equipo completo trabajando en acabados de paredes y pisos de mármol | "Trabajo en equipo: acabados, pintura y piso en una sola visita" |

**Diseño sugerido:**
- Layout: grid masonry o grid asimétrico (imagen 1 grande, 2 y 3 medianas, 4 y 5 en fila)
- Alternativa: carrusel horizontal con dots de navegación en mobile
- Cada imagen: bordes redondeados 12px, overlay gradiente oscuro al hover con caption visible
- Efecto hover: scale(1.03) + overlay negro 40% + texto caption en blanco
- Fondo de sección: `#F7F7F7`
- Lightbox: click en imagen abre modal fullscreen con navegación lateral
- Animación: fade-in staggered (cada imagen aparece 0.15s después de la anterior)
- Padding vertical: 80px

**Assets a usar:**
- Las 5 imágenes JPEG del directorio raíz del proyecto (listadas en la tabla)

---

## 6. Reseñas de Google

**Texto:**

> **Titular de sección:**
> "Lo que dicen nuestros clientes"

> **Subtítulo:**
> "⭐ 4.9 de calificación promedio en Google"

**Reseña 1:**
- **Nombre:** María Fernanda Herrera
- **Foto:** Avatar genérico femenino (iniciales "MF" en círculo dorado)
- **Calificación:** ★★★★★ (5.0)
- **Texto:** "Contraté a LAB263 para remodelar la cocina de mi apartamento en Costa del Este. Luis llegó puntual, me explicó cada paso del proceso y el resultado fue mejor de lo que imaginé. Lo que más valoro: cero sorpresas en el presupuesto final. Ya los recomendé a tres vecinos."
- **Fecha:** Hace 2 semanas

**Reseña 2:**
- **Nombre:** Carlos Mendoza R.
- **Foto:** Avatar genérico masculino (iniciales "CM" en círculo gris oscuro)
- **Calificación:** ★★★★★ (5.0)
- **Texto:** "Tuve un cortocircuito a las 10pm y al día siguiente a primera hora ya tenían todo resuelto. Profesionales, limpios y con buen precio. Es difícil encontrar gente así en Panamá. Los llamo para todo ahora."
- **Fecha:** Hace 1 mes

**Reseña 3:**
- **Nombre:** Andrea Castillo de Vega
- **Foto:** Avatar genérico femenino (iniciales "AC" en círculo dorado)
- **Calificación:** ★★★★✩ (4.9)
- **Texto:** "Remodelación completa de un local comercial en Obarrio. Plomería, electricidad, gypsum, pintura — todo con un solo equipo. Entregaron a tiempo y el acabado es impecable. La pandemia nos unió como clientes y no los hemos soltado desde entonces."
- **Fecha:** Hace 3 semanas

**Diseño sugerido:**
- Layout: carrusel horizontal con 3 tarjetas visibles en desktop, 1 en mobile
- Auto-scroll cada 5 segundos con pausa al hover
- Dots de navegación + flechas laterales
- Cada tarjeta: fondo blanco, borde redondeado 16px, sombra suave, padding 32px
- Icono Google "G" en la esquina superior derecha de cada tarjeta (como badge de autenticidad)
- Estrellas: color dorado `#F5C226`, tamaño 20px
- Nombre: Montserrat Bold 16px, `#333333`
- Texto reseña: Inter Regular 15px, `#555555`, italic
- Fecha: Inter Light 12px, `#999999`
- Fondo de sección: `#FFFFFF`
- Animación: slide suave con CSS transform

**Assets a usar:**
- Iconos SVG inline: estrella, logo Google "G"
- Avatares generados con CSS (iniciales en círculo con background-color)

---

## 7. Call to Action

**Texto:**

> **Titular:**
> "¿Listo para transformar tu espacio?"

> **Subtítulo:**
> "Contáctanos hoy y recibe un presupuesto sin compromiso. Respondemos en menos de 2 horas."

> **Datos de contacto:**
> 📞 **Teléfono:** +507 6304-6272
> 📧 **Correo:** servicioslab263@gmail.com
> 🕐 **Horario:** Lunes a Sábado, 7:00 AM — 6:00 PM

> **Botón WhatsApp:**
> "💬 Solicita tu presupuesto gratis"
> Link: `https://wa.me/50763046272?text=Hola%2C%20me%20interesa%20solicitar%20un%20presupuesto%20para%20un%20proyecto.%20%C2%BFPodr%C3%ADan%20ayudarme%3F`

> **Texto bajo el botón:**
> "Sin compromisos. Sin costos ocultos. Solo soluciones."

**Diseño sugerido:**
- Fondo: gradiente diagonal de `#1A1A1A` a `#333333`
- Titular: Montserrat ExtraBold 40px, blanco
- Subtítulo: Inter Regular 18px, `#CCCCCC`
- Datos de contacto: tres columnas con iconos dorados a la izquierda, texto blanco a la derecha
- Botón WhatsApp: verde WhatsApp `#25D366`, texto blanco, padding 16px 40px, border-radius 50px (pill), sombra `0 4px 15px rgba(37,211,102,0.4)`
- Hover botón: scale(1.05), sombra más intensa
- Icono WhatsApp SVG inline dentro del botón
- Animación: pulse suave infinita en el botón (attrae la vista)
- Padding vertical: 100px
- Centrado en toda la sección

**Assets a usar:**
- Icono SVG de WhatsApp
- Iconos SVG de teléfono, correo, reloj

---

## 8. Footer

**Texto:**

> **Columna 1 — Marca:**
> Logo SVG (versión fondo negro) + texto: "Servicios de reparación y remodelación llave en mano en Ciudad de Panamá. 15+ años de experiencia."

> **Columna 2 — Navegación rápida:**
> Servicios · Nosotros · Galería · Reseñas · Contacto

> **Columna 3 — Contacto:**
> 📞 +507 6304-6272
> 📧 servicioslab263@gmail.com

> **Columna 4 — Redes sociales:**
> 📘 Facebook: [@Lab263](https://www.facebook.com/Lab263/)
> 📸 Instagram: @servicioslab263

> **Mapa embebido:**
> Google Maps iframe centrado en Ciudad de Panamá (área de cobertura general)
> ```html
> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63190.42023765063!2d-79.5455!3d9.0052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca8f1dbe80363%3A0xaba25df1f042c10e!2sCiudad%20de%20Panam%C3%A1!5e0!3m2!1ses!2spa!4v1" width="100%" height="250" style="border:0; border-radius: 12px;" allowfullscreen="" loading="lazy"></iframe>
> ```

> **Línea de copyright:**
> "© 2026 Servicios LAB263. Todos los derechos reservados. Ciudad de Panamá."

**Diseño sugerido:**
- Fondo: `#1A1A1A`
- Grid: 4 columnas en desktop, 2 en tablet, 1 en mobile
- Mapa: ancho completo debajo de las columnas, bordes redondeados 12px
- Logo footer: versión blanca/dorada, max-width 150px
- Links: Inter Regular 14px, blanco, hover dorado `#F5C226` con transición 0.2s
- Iconos redes: SVG 24px, blanco, hover dorado con scale(1.1)
- Separador: línea horizontal `#333333` entre contenido y copyright
- Copyright: Inter Light 12px, `#666666`, centrado
- Padding vertical: 60px arriba, 20px abajo

**Assets a usar:**
- `logotipos/logo-solo fondo negro.svg` o `logotipos/logo_final.svg` — logo footer
- Iconos SVG de Facebook e Instagram (brand icons)
- Google Maps embed iframe

---

## Inventario Completo de Assets

### Logos disponibles

| Archivo | Uso recomendado |
|---------|----------------|
| `logotipos/logo_final.svg` | Logo completo con texto — ideal para navbar y footer (fondo oscuro) |
| `logotipos/LOGO-FONDOBLANCO.svg` | Logo completo — ideal sobre fondos claros |
| `logotipos/logo-solo fondo negro.svg` | Isotipo solo (rayo hexagonal) — favicon, loading |
| `logotipos/logo-solo-fondo-blanco-pngsinaire .png` | Isotipo PNG sin fondo — uso en app/PWA |
| `logotipos/logo_FONDOBLANCO.png` | Logo completo PNG fondo blanco — respaldo |
| `logotipos/logo_final.png` | Logo completo PNG fondo oscuro — respaldo |
| `logotipos/logo_finalpng-sinfondoblanco.png` | Logo PNG transparente — overlay sobre imágenes |

### Imágenes promocionales

| Archivo | Contenido | Sección sugerida |
|---------|-----------|-----------------|
| `Quiero_que_generes_una_imagen_202605281944.jpeg` | Entrega de llaves, apartamento moderno, skyline Panamá | Hero (fondo) |
| `quiero_que_generes_una_imagen_202605281940.jpeg` | Equipo con camisetas amarillas trabajando en piso mármol | Imagen promocional |
| `quiero_que_generes_una_imagen_202605281941.jpeg` | Remodelación cocina con vigas madera, equipo camisetas blancas | Galería |
| `quiero_que_generes_una_imagen_202605281941 (1).jpeg` | Instalación pisos y luminarias al atardecer, vista al puente | Galería |
| `quiero_que_generes_una_imagen_202605281940 (1).jpeg` | Equipo completo: paredes, pintura, mármol, vista panorámica | Historia / Galería |

### Tipografías (Google Fonts)

```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
```

### Colores del sistema de diseño

```css
:root {
  --color-carbon: #333333;
  --color-gold: #F5C226;
  --color-white: #FFFFFF;
  --color-bg-light: #F7F7F7;
  --color-bg-dark: #1A1A1A;
  --color-text-muted: #666666;
  --color-text-light: #CCCCCC;
  --color-whatsapp: #25D366;
}
```
