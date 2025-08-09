<!-- Banner Image -->
<div align="center">
  <img src="./assets/fewinfos-banner.png" alt="Willkommen zum FEWINFOS Contribution - GitHub Repository Stats Widget" width="100%">
</div>

# 📦 GitHub Repository Stats Widget

Ein Open-Source-, vollständig clientseitiges Tool, das **Echtzeit-GitHub-Repository-Statistiken** in einem interaktiven und anpassbaren Format visualisiert — perfekt für Entwickler, Open-Source-Maintainer und Portfolio-Ersteller.

---

## 🎯 Zielsetzung   

Dieses Widget verwendet die GitHub REST API, um verschiedene Metadaten und Einblicke zu einem beliebigen öffentlichen GitHub-Repository abzurufen und anzuzeigen. Es funktioniert **vollständig im Browser** ohne Backend oder Authentifizierung.

---

## ✨ Funktionen

- 🔄 Echtzeit-Datenabruf über die GitHub REST API
- ⭐ Anzeige von Stars, Forks, Beobachtern, Issues und Pull Requests
- 👥 Visualisierung der Top-Beitragenden mit Avataren und Commit-Zahlen
- 📊 Anzeige der verwendeten Sprachen mit interaktiven Diagrammen
- 📅 Anzeige des Erstellungsdatums und der letzten Aktualisierung des Repositories
- 📜 Anzeige von Lizenzinformationen
- 🎨 Sauberes, responsives und anpassbares UI
- 💻 Funktioniert direkt in jedem Browser (keine Servereinrichtung)
- 🧩 Einfach einbettbar in Websites oder README.md-Dateien
- 📈 Optionale Visualisierungen über Chart.js

---

## 🧱 Tech-Stack

- **HTML** – Struktur und Layout
- **CSS** – Styling und Responsivität
- **JavaScript** – Logik und API-Verarbeitung
- **GitHub REST API** – Datenquelle
- **Chart.js** – Für das Rendern von Diagrammen (optional)

---

## 📊 Verfügbare Widgets
  
### 🔍 Repository-Statistiken  

- ⭐ Stars / 🍴 Forks / 👁️ Beobachter-Zähler
- 📅 Erstellungs- & Aktualisierungsdatum des Repositories
- 📜 Lizenztyp-Anzeige
- 📊 Sprachverwendung (Kreis-, Balken-, Donutdiagramm)
- 📦 Abhängigkeitsdiagramm (npm, pip, etc.)
- 📈 Commit-Aktivitäts-Heatmap
- 🕐 Durchschnittliche PR-Merge-Zeit
- 🧵 Issue-Status-Aufschlüsselung (Offen / Geschlossen / Angepinnt)

### 👥 Beitragenden-Widgets

- 👥 Top-Beitragende (Avatare + Commit-Zahlen)
- 📊 Beiträge nach Wochentag
- 🗺️ Standortkarte der Beitragenden (öffentliche Daten)
- ⏱️ Kürzliche Beitragende (letzte 7 / 30 Tage)
- 📈 Beiträge im Zeitverlauf (gestapeltes Flächendiagramm)

### 📊 Diagramm-basierte Widgets

- 📊 Radar-Diagramm zur Repository-Gesundheit (Stars, Forks, PRs, Issues)
- 📉 Liniendiagramm für Stars-/Forks-Wachstumstrends
- 🍩 Donutdiagramm für Sprachverwendung
- 📈 Flächendiagramm für Issues/PR-Trends
- 📆 GitHub-Style Kalender-Heatmap

### ⚙️ DevOps & CI/CD Widgets

- 🚦 GitHub Actions CI/CD-Status-Badge
- 🧪 Codeabdeckungs-Badge (Codecov, Coveralls)
- 🔄 Letzter Workflow-Run-Widget
- 🛠️ Build-Historie-Zeitachse (Erfolg/Fehlschlag visuell)

### 📌 Issue- & PR-Widgets

- 📋 Angepinnte Issues oder Diskussionen
- 🔍 Issue-Label-Wortwolke
- 📬 PR-Merge-Status/Verhältnis-Tracker
- 📈 Issue-Stimmungsindikator (basierend auf Schlüsselwörtern)

### 🧩 Verschiedene Widgets

- 📌 Lesezeichen/Favorit-Repo-Button
- 🔍 Inline-Suche zum Eingeben anderer Repositories
- 🧠 KI-gestützte Commit-Zusammenfassung (optional)
- 🔗 Verwandte Repositories-Widget
- 🪄 Widget als iframe / HTML-Embed exportieren

## 📂 Projektstruktur

github-repo-stats-widget/
├── index.html # Haupt-HTML-Datei
├── style.css # CSS-Stile
├── repo.js # Kern-JavaScript-Logik
├── charts.js # Diagramm-Rendering-Logik
├── assets/ # Icons, Screenshots
├── README.md # Diese Dokumentationsdatei
└── LICENSE # MIT-Lizenz
---

## 🚀 Bereitstellung

Du kannst dieses Widget auf **GitHub Pages** bereitstellen oder jeden statischen Hosting-Dienst wie Netlify, Vercel oder Firebase verwenden.

### Bereitstellung über GitHub Pages

1. Dein Projekt zu GitHub pushen
2. Gehe zu **Einstellungen → Pages**
3. Wähle Branch: `main` und Ordner: `/ (root)`
4. Dein Widget wird hier gehostet:  
   `https://deinbenutzername.github.io/github-repo-stats-widget/`
