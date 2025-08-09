<!-- Imagen de Banner -->
<div align="center">
  <img src="./assets/fewinfos-banner.png" alt="Bienvenido a FEWINFOS Contribution - GitHub Repository Stats Widget" width="100%">
</div>

# 📦 Widget de Estadísticas de Repositorios de GitHub

Una herramienta de código abierto y completamente del lado del cliente que visualiza **estadísticas de repositorios de GitHub en tiempo real** en un formato interactivo y personalizable — perfecta para desarrolladores, mantenedores de código abierto y creadores de portafolios.

---

## 🎯 Objetivo

Este widget utiliza la API REST de GitHub para obtener y mostrar diversos metadatos e información sobre cualquier repositorio público de GitHub. Funciona **totalmente en el navegador**, sin necesidad de backend ni autenticación.

---

## ✨ Características

- 🔄 Obtención de datos en tiempo real mediante la API REST de GitHub
- ⭐ Muestra estrellas, forks, observadores, issues y pull requests
- 👥 Visualiza a los principales contribuidores con avatares y conteo de commits
- 📊 Muestra los lenguajes utilizados con gráficos interactivos
- 📅 Muestra la fecha de creación y la última actualización del repositorio
- 📜 Muestra información de la licencia
- 🎨 Interfaz limpia, adaptable y personalizable
- 💻 Funciona directamente en cualquier navegador (sin configuración de servidor)
- 🧩 Fácil de incrustar en sitios web o archivos README.md
- 📈 Visualizaciones opcionales con Chart.js

---

## 🧱 Stack Tecnológico

- **HTML** – Estructura y diseño
- **CSS** – Estilos y adaptabilidad
- **JavaScript** – Lógica y manejo de API
- **GitHub REST API** – Fuente de datos
- **Chart.js** – Renderizado de gráficos (opcional)

---

## 📊 Widgets Disponibles

### 🔍 Estadísticas del Repositorio

- ⭐ Contador de estrellas / 🍴 forks / 👁️ observadores
- 📅 Fecha de creación y última actualización
- 📜 Tipo de licencia
- 📊 Uso de lenguajes (gráfico circular, de barras o de dona)
- 📦 Gráfico de dependencias (npm, pip, etc.)
- 📈 Mapa de calor de actividad de commits
- 🕐 Tiempo promedio de fusión de PR
- 🧵 Desglose de estado de issues (Abierto / Cerrado / Fijado)

### 👥 Widgets de Contribuidores

- 👥 Principales contribuidores (avatares + conteo de commits)
- 📊 Contribuciones por día de la semana
- 🗺️ Mapa de ubicación de contribuidores (datos públicos)
- ⏱️ Contribuidores recientes (últimos 7 / 30 días)
- 📈 Contribuciones a lo largo del tiempo (gráfico de área apilada)

### 📊 Widgets Basados en Gráficos

- 📊 Gráfico de radar sobre salud del repositorio (estrellas, forks, PR, issues)
- 📉 Gráfico de línea para tendencias de crecimiento de estrellas/forks
- 🍩 Gráfico de dona para uso de lenguajes
- 📈 Gráfico de área para tendencias de issues/PR
- 📆 Mapa de calor estilo calendario de GitHub

### ⚙️ Widgets DevOps y CI/CD

- 🚦 Insignia de estado CI/CD de GitHub Actions
- 🧪 Insignia de cobertura de código (Codecov, Coveralls)
- 🔄 Widget de última ejecución de flujo de trabajo
- 🛠️ Línea de tiempo de historial de compilaciones (visualización de éxito/fallo)

### 📌 Widgets de Issues y PR

- 📋 Issues o discusiones fijadas
- 🔍 Nube de palabras de etiquetas de issues
- 📬 Rastreador de estado/ratio de fusión de PR
- 📈 Indicador de sentimiento de issues (basado en palabras clave)

### 🧩 Widgets Misceláneos

- 📌 Botón de marcar/favorito repositorio
- 🔍 Búsqueda en línea para ingresar otros repositorios
- 🧠 Resumen de commits con IA (opcional)
- 🔗 Widget de repositorios relacionados
- 🪄 Exportar widget como iframe / HTML embebido

---

## 📂 Estructura del Proyecto

github-repo-stats-widget/
├── index.html # Archivo HTML principal
├── style.css # Estilos CSS
├── repo.js # Lógica principal en JavaScript
├── charts.js # Lógica de renderizado de gráficos
├── assets/ # Iconos, capturas de pantalla
├── README.md # Este archivo de documentación
└── LICENSE # Licencia MIT

---

## 🚀 Despliegue

Puedes desplegar este widget en **GitHub Pages**, o usar cualquier servicio de hosting estático como Netlify, Vercel o Firebase.

### Despliegue mediante GitHub Pages

1. Sube tu proyecto a GitHub
2. Ve a **Settings → Pages**
3. Elige rama: `main` y carpeta: `/ (root)`
4. Tu widget estará disponible en:  
   `https://tuusuario.github.io/github-repo-stats-widget/`
