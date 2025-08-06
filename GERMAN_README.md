<!-- Bannerbild -->
<div align="center">
  <img src="./assets/fewinfos-banner.png" alt="Willkommen bei FEWINFOS Contribution – GitHub Repository Stats Widget" width="100%">
</div>

# 📦 GitHub Repository Statistik-Widget

Ein Open-Source-Tool, das vollständig im Browser läuft und **Echtzeitstatistiken** von GitHub-Repositories interaktiv und anpassbar visualisiert — ideal für Entwickler, Open-Source-Maintainer und Portfolio-Ersteller.

---

## 🎯 Ziel

Dieses Widget verwendet die GitHub REST API, um verschiedene Metadaten und Einblicke in beliebige öffentliche GitHub-Repositories abzurufen und darzustellen.  
Es funktioniert **vollständig im Browser**, ohne Backend oder Authentifizierung.

---

## ✨ Funktionen

- 🔄 Echtzeit-Datenabruf über die GitHub REST API  
- ⭐ Anzeige von Stars, Forks, Beobachtern, Issues und Pull Requests  
- 👥 Visualisierung der Top-Beitragenden mit Avataren und Commit-Zahlen  
- 📊 Anzeige verwendeter Programmiersprachen mit interaktiven Diagrammen  
- 📅 Anzeige des Erstellungsdatums und der letzten Aktualisierung  
- 📜 Anzeige von Lizenzinformationen  
- 🎨 Sauberes, responsives und anpassbares UI  
- 💻 Funktioniert direkt im Browser (kein Server notwendig)  
- 🧩 Einfach in Webseiten oder README.md-Dateien einbettbar  
- 📈 Optionale Diagramme mit Chart.js

---

## 🧱 Tech-Stack

- **HTML** – Struktur und Layout  
- **CSS** – Stil und Responsivität  
- **JavaScript** – Logik und API-Verarbeitung  
- **GitHub REST API** – Datenquelle  
- **Chart.js** – Für die Diagramm-Erstellung (optional)

---

## 📊 Verfügbare Widgets

### 🔍 Repository-Statistiken

- ⭐ Stars / 🍴 Forks / 👁️ Beobachter-Zähler  
- 📅 Erstellungsdatum und letztes Update  
- 📜 Lizenztyp  
- 📊 Sprachverwendung (Torten-, Balken-, Donut-Diagramm)  
- 📦 Abhängigkeitsdiagramm (npm, pip usw.)  
- 📈 Commit-Aktivitäts-Heatmap  
- 🕐 Durchschnittliche Merge-Zeit von Pull Requests  
- 🧵 Issue-Status-Übersicht (Offen / Geschlossen / Angeheftet)

### 👥 Beitrags-Widgets

- 👥 Top-Beitragende (Avatare + Commits)  
- 📊 Beiträge nach Wochentag  
- 🗺️ Kartenansicht der Beitragenden (öffentlich verfügbare Daten)  
- ⏱️ Letzte Beitragende (7 / 30 Tage)  
- 📈 Beiträge über Zeit (Stacked Area Chart)

### 📊 Diagramm-basierte Widgets

- 📊 Radar-Diagramm für Repository-Gesundheit  
- 📉 Liniendiagramm für Star/Fork-Wachstum  
- 🍩 Donut-Diagramm für Sprachverteilung  
- 📈 Flächendiagramm für Issues/PR-Trends  
- 📆 GitHub-Style Kalender-Heatmap

### ⚙️ DevOps & CI/CD Widgets

- 🚦 GitHub Actions CI/CD Status-Badge  
- 🧪 Code-Coverage-Badge (Codecov, Coveralls)  
- 🔄 Letzter Workflow-Run  
- 🛠️ Build-Historie (erfolgreich/fehlgeschlagen)

### 📌 Issue- & PR-Widgets

- 📋 Angeheftete Issues oder Diskussionen  
- 🔍 Issue-Label Wordcloud  
- 📬 PR-Merge-Status/Verhältnis  
- 📈 Sentiment-Anzeige von Issues (basierend auf Schlüsselwörtern)

### 🧩 Sonstige Widgets

- 📌 Repository als Favorit markieren  
- 🔍 Repos durchsuchen (inline)  
- 🧠 KI-basierte Commit-Zusammenfassung (optional)  
- 🔗 Verwandte Repositories  
- 🪄 Exportierbar als iframe / HTML

---

## 📂 Projektstruktur

github-repo-stats-widget/
├── index.html # Haupt-HTML-Datei
├── style.css # CSS-Stile
├── repo.js # JavaScript-Logik
├── charts.js # Diagramm-Logik
├── assets/ # Icons, Screenshots
├── README.md # Diese Dokumentation
└── LICENSE # MIT-Lizenz

## 🚀 Deployment

Du kannst dieses Widget über **GitHub Pages** bereitstellen oder über Dienste wie Netlify, Vercel oder Firebase hosten.

### Deployment via GitHub Pages

1. Push dein Projekt zu GitHub  
2. Gehe zu **Settings → Pages**  
3. Wähle den Branch `main` und den Ordner `/ (root)`  
4. Dein Widget ist erreichbar unter:  
   `https://yourusername.github.io/github-repo-stats-widget/`
   