name: "User Story"
about: "Créer une issue à partir d’une User Story du backlog"
title: "[EPIC X] USxx – Titre de la fonctionnalité"
labels: ["status: todo"]
body:
  - type: markdown
    attributes:
      value: "## 🎯 Objectif"
  - type: textarea
    id: objectif
    attributes:
      label: "Objectif"
      placeholder: "Décrire ce que l’utilisateur cherche à accomplir."
  - type: markdown
    attributes:
      value: "## ✅ Critères d’acceptation"
  - type: textarea
    id: criteres
    attributes:
      label: "Critères d’acceptation"
      placeholder: "- [ ] ..."
  - type: markdown
    attributes:
      value: "## 🧱 Données concernées"
  - type: textarea
    id: tables
    attributes:
      label: "Tables / modèles concernés"
      placeholder: "events, places, etc."
  - type: markdown
    attributes:
      value: "## 💡 Notes techniques (optionnel)"
  - type: textarea
    id: notes
    attributes:
      label: "Notes techniques"
      placeholder: "SDK, dépendances, API, etc."
