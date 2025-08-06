<!-- Banner Bild -->
<div align="center">
  <img src="./assets/fewinfos-banner.png" alt="Willkommen zum Beitrag zu FEWINFOS – GitHub Repository Stats Widget" width="100%">
</div>

# 📦 GitHub Repository Stats Widget

Ein Open-Source-Tool, das vollständig im Browser läuft und **Echtzeit-GitHub-Repository-Statistiken** in einem interaktiven und anpassbaren Format visualisiert – ideal für Entwickler, Open-Source-Maintainer und Portfolio-Ersteller.

---

## 🎯 Ziel

Dieses Widget verwendet die GitHub REST API, um verschiedene Metadaten und Einblicke zu jedem öffentlichen GitHub-Repository abzurufen und anzuzeigen. Es funktioniert **ausschließlich im Browser**, ohne Backend oder Authentifizierung.

---

## ✨ Funktionen

- 🔄 Echtzeitdaten über GitHub REST API
- ⭐ Zeigt Sterne, Forks, Beobachter, Issues und Pull Requests
- 👥 Visualisiert Top-Mitwirkende mit Avataren und Commit-Anzahl
- 📊 Zeigt verwendete Sprachen in interaktiven Diagrammen
- 📅 Zeigt Erstellungsdatum und letzte Aktualisierung
- 📜 Lizenzinformationen anzeigen
- 🎨 Saubere, responsive, anpassbare UI
- 💻 Läuft direkt im Browser (kein Server nötig)
- 🧩 Leicht einbettbar in Webseiten oder README-Dateien
- 📈 Optionale Visualisierung mit Chart.js

---

## 🧱 Technologie-Stack

- **HTML** – Struktur und Layout
- **CSS** – Styling und Responsiveness
- **JavaScript** – Logik und API-Verarbeitung
- **GitHub REST API** – Datenquelle
- **Chart.js** – Diagramme und Grafiken (optional)

---

## 📊 Verfügbare Widgets

### 🔍 Repository-Statistiken

- ⭐ Sterne / 🍴 Forks / 👁️ Beobachter Zähler
- 📅 Erstellungs- und Aktualisierungsdatum
- 📜 Lizenztyp
- 📊 Sprachenutzung (Kreis-, Balken-, Donutdiagramm)
- 📦 Abhängigkeitsgraph (npm, pip, etc.)
- 📈 Commit-Aktivitäts-Heatmap
- 🕐 Durchschnittliche Merge-Zeit für PRs
- 🧵 Issue-Statusübersicht (Offen / Geschlossen / Angeheftet)

### 👥 Mitwirkende Widgets

- 👥 Top-Mitwirkende (Avatare + Commits)
- 📊 Beiträge pro Wochentag
- 🗺️ Standortkarte (öffentlich verfügbare Daten)
- ⏱️ Letzte Mitwirkende (7 / 30 Tage)
- 📈 Beiträge im Zeitverlauf (Flächendiagramm)

### 📊 Diagrammbasierte Widgets

- 📊 Radar-Diagramm zur Repo-Gesundheit
- 📉 Liniendiagramm für Wachstum von Sternen/Forks
- 🍩 Donut-Diagramm für Sprachenutzung
- 📈 Flächendiagramm für Issues/PR-Trends
- 📆 GitHub-Style Kalender Heatmap

### ⚙️ DevOps & CI/CD Widgets

- 🚦 GitHub Actions CI/CD Status-Badge
- 🧪 Code Coverage Badge (Codecov, Coveralls)
- 🔄 Letzter Workflow-Run
- 🛠️ Verlauf der Builds (Timeline)

### 📌 Issue & PR Widgets

- 📋 Angeheftete Issues oder Diskussionen
- 🔍 Wortwolke von Issue-Labels
- 📬 PR-Merge-Statistiken
- 📈 Issue-Stimmungsanalyse (via Keywords)

### 🧩 Verschiedenes

- 📌 Repo-Favoriten-Button
- 🔍 Inline-Suche für andere Repositories
- 🧠 KI-gestützte Commit-Zusammenfassung (optional)
- 🔗 Verwandte Repositories
- 🪄 Exportierbar als iframe oder HTML

---

## 📂 Projektstruktur

github-repo-stats-widget/
├── index.html # Haupt-HTML-Datei
├── style.css # CSS-Styling
├── repo.js # JavaScript-Logik
├── charts.js # Diagrammlogik
├── assets/ # Icons, Screenshots
├── README.md # Dokumentation
└── LICENSE # MIT-Lizenz


---

## 🚀 Deployment

Du kannst dieses Widget über **GitHub Pages** oder statische Hosting-Dienste wie Netlify, Vercel oder Firebase bereitstellen.

### Deployment über GitHub Pages

1. Projekt zu GitHub pushen
2. Gehe zu **Einstellungen → Pages**
3. Wähle Branch: `main` und Ordner: `/ (root)`
4. Deine Seite wird erreichbar unter:  
   `https://deinbenutzername.github.io/github-repo-stats-widget/`
