📦 Widget de Statistiques de Référentiel GitHub

Un outil open-source, entièrement côté client, qui visualise en temps réel les statistiques d’un dépôt GitHub sous un format interactif et personnalisable — idéal pour les développeurs, mainteneurs open-source et créateurs de portfolios.



🎯 Objectif

Ce widget utilise l’API REST de GitHub pour récupérer et afficher diverses métadonnées et informations sur n’importe quel dépôt public GitHub. Il fonctionne entièrement dans le navigateur, sans backend ni authentification.



✨ Fonctionnalités

🔄 Récupération des données en temps réel via l’API REST de GitHub

⭐ Affiche les stars, forks, watchers, issues et pull requests

👥 Visualise les principaux contributeurs avec avatars et nombre de commits

📊 Affiche les langages utilisés via des graphiques interactifs

📅 Affiche la date de création du dépôt et la dernière mise à jour

📜 Affiche les informations de licence

🎨 Interface propre, réactive et personnalisable

💻 Fonctionne directement dans n’importe quel navigateur (aucune configuration serveur)

🧩 Facile à intégrer dans des sites web ou fichiers README.md

📈 Visualisations optionnelles via Chart.js



🧱 Stack Technique



HTML – Structure et mise en page



CSS – Style et réactivité



JavaScript – Logique et gestion des API



GitHub REST API – Source de données



Chart.js – Pour générer des graphiques (optionnel)



📊 Widgets Disponibles



🔍 Statistiques du Référentiel



⭐ Stars / 🍴 Forks / 👁 Watchers



📅 Date de création et dernière mise à jour



📜 Type de licence



📊 Utilisation des langages (graphique en camembert, barres, donut)



📦 Graphe de dépendances (npm, pip, etc.)



📈 Heatmap des commits



🕐 Temps moyen de fusion des PR



🧵 Répartition des issues (Ouvertes / Fermées / Épinglées)



👥 Widgets de Contributeurs



👥 Principaux contributeurs (avatars + nombre de commits)



📊 Contributions par jour de la semaine



🗺 Carte de localisation des contributeurs (données publiques)



⏱ Contributeurs récents (7 / 30 derniers jours)



📈 Contributions au fil du temps (graphique en aires empilées)



📊 Widgets Basés sur des Graphiques



📊 Radar des indicateurs du dépôt (stars, forks, PR, issues)



📉 Graphique de l’évolution des stars/forks



🍩 Donut des langages utilisés



📈 Graphique d’évolution des issues/PR



📆 Heatmap de type calendrier GitHub



⚙ Widgets DevOps \& CI/CD



🚦 Badge de statut GitHub Actions



🧪 Badge de couverture de code (Codecov, Coveralls)



🔄 Widget de dernière exécution de workflow



🛠 Chronologie de l’historique de build (succès/échec)



📌 Widgets d’Issues \& PR



📋 Issues ou discussions épinglées



🔍 Nuage de mots des labels d’issues



📬 Suivi du statut/ratio de fusion des PR



📈 Indicateur de sentiment des issues (basé sur les mots-clés)



🧩 Widgets Divers



📌 Bouton pour mettre en favori un dépôt



🔍 Recherche intégrée pour entrer d'autres dépôts



🧠 Résumé de commit basé sur l’IA (optionnel)



🔗 Widget de dépôts associés



🪄 Export du widget en iframe / embed HTML



📂 Structure du Projet



bash

Copy code

github-repo-stats-widget/

├── index.html         # Fichier HTML principal

├── style.css          # Feuilles de style CSS

├── repo.js            # Logique JavaScript principale

├── charts.js          # Logique d'affichage des graphiques

├── assets/            # Icônes, captures d’écran

├── README.md          # Ce fichier de documentation

└── LICENSE            # Licence MIT

🚀 Déploiement

Vous pouvez déployer ce widget sur GitHub Pages ou utiliser un service d’hébergement statique comme Netlify, Vercel ou Firebase.



Déploiement via GitHub Pages

1.Poussez votre projet sur GitHub

2.Allez dans Settings → Pages

3.Choisissez la branche : main et dossier : / (root)

4.Votre widget sera hébergé à :

https://yourusername.github.io/github-repo-stats-widget/

