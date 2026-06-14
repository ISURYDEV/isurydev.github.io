# isury.dev — Portfolio personnel

Portfolio d'**Ismail KRAMDI BOUZOUADA**, étudiant en réorientation vers l'informatique
appliquée, en recherche d'alternance (support informatique, systèmes &amp; réseaux, support
applicatif ou développement) à partir de septembre 2026.

Le site présente mes **projets publics** (Revendo, Sanity Junction, Google Photos Cleaner,
Hold On Little Heart!, Les Chroniques de l'Analyse II), mon parcours et mes compétences.

> Certaines données et démos sont **volontairement limitées** pour des raisons de
> confidentialité : la démo publique de Revendo n'utilise que des **données fictives**, et
> seuls des éléments publics de Sanity Junction sont présentés.

## 🧰 Technologies

Site **statique**, sans build ni dépendance : **HTML5 + CSS3 + JavaScript vanilla**.
L'identité visuelle suit le système de design `DESIGN.md` (« Midnight Command Center » —
thème sombre, verre dépoli, accent Neon Violet). Polices via Google Fonts (Space Grotesk,
Inter, IBM Plex Mono).

## 📁 Structure

```
.
├── index.html        # Page unique (toutes les sections)
├── styles.css        # Design system (tokens DESIGN.md) + responsive
├── script.js         # Nav mobile, révélation au défilement, détection du CV
├── assets/           # Photo optimisée, aperçus de projets, favicon
├── CNAME             # Domaine personnalisé (isury.dev)
├── DESIGN.md         # Référence du système de design
└── README.md
```

## 🚀 Lancer en local

Aucune installation. Ouvrir `index.html`, ou servir le dossier :

```bash
python -m http.server 8000
# puis http://localhost:8000
```

## ☁️ Déploiement — GitHub Pages

Le dépôt `isurydev.github.io` est un site **GitHub Pages** servi à la racine
(`https://isurydev.github.io/`) et relié au domaine **isury.dev** via le fichier `CNAME`.
Comme le site est statique, aucun build n'est nécessaire : un push sur `main` met le site à
jour automatiquement. Les chemins d'assets sont relatifs.

## 📨 Contact

- Portfolio : https://isury.dev
- GitHub : https://github.com/ISURYDEV
- LinkedIn : https://www.linkedin.com/in/ismail-kramdi-bouzouada-0328b0416/

---

_Projet personnel — Tous droits réservés, sauf mention contraire._
