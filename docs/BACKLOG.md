# Uvents – Backlog complet (MVP React + Supabase)

---

## EPIC 1 – Espace utilisateur
Base du système : authentification, profil et préférences.  
**Objectif :** permettre à chaque utilisateur de gérer son identité, ses données et son expérience sur la plateforme.

**User Stories :**
- US11 – Créer un compte et se connecter via e-mail/mot de passe (Supabase Auth / table users).
- US12 – Modifier ses informations personnelles (photo, pseudo, téléphone, préférences) via la table profiles.
- US13 – Consulter l’historique de ses participations et créations d’événements (jointure event_participants + events).
- US14 – Ajouter un événement ou une organisation en favori (user_favorites).
- US15 – Visualiser ses billets (QR codes) dans une section dédiée (tickets).
- US16 – Gérer ses préférences de notifications, catégories ou distances (user_preferences).
- US17 – Se déconnecter proprement et effacer les données locales (session Supabase + cache).

**Tech prévu :**  
Tables `users`, `profiles`, `user_favorites`, `user_preferences`, `event_participants`, `tickets`.

---

## EPIC 2 – Découverte des événements
Cœur de l’expérience utilisateur : exploration des événements autour de soi.  
**Objectif :** permettre à l’utilisateur de découvrir facilement des événements grâce à la carte interactive et à des filtres pertinents.

**User Stories :**
- US21 – Afficher la carte interactive principale de l’application (Google Maps API).
- US22 – Afficher les événements géolocalisés autour de la position de l’utilisateur (tables events, places).
- US23 – Filtrer les événements par catégorie, date, distance, prix ou statut (events, categories, event_categories).
- US24 – Rechercher un événement ou un lieu par mots-clés (full text sur events + places).
- US25 – Afficher la fiche complète d’un événement avec ses infos pratiques (events, places, organizations).
- US26 – Voir les événements récents ou populaires selon les vues (event_views, event_view_daily).
- US27 – Afficher la liste des catégories et sous-catégories disponibles (categories).

**Tech prévu :**  
Tables `events`, `places`, `categories`, `event_categories`, `event_views`, `event_view_daily`.  
Intégration Google Maps API, requêtes filtrées Supabase, stockage temporaire des filtres (localStorage).

---

## EPIC 3 – Création et gestion d’événements
**Objectif :** permettre aux utilisateurs et organisateurs de créer, modifier et gérer leurs événements.  
Inclut la gestion des lieux (`places`) et des catégories (`event_categories`).

**User Stories :**
- US31 – Créer un événement avec titre, description, dates, lieu, capacité, image, visibilité (events, places).
- US32 – Ajouter ou sélectionner un lieu existant (places) lors de la création d’un événement.
- US33 – Associer des catégories à un événement (event_categories).
- US34 – Modifier ou supprimer un événement déjà créé (états draft, published, archived).
- US35 – Ajouter des informations pratiques (PMR, contact, public visé).
- US36 – Générer automatiquement un QR code pour les participants (tickets).
- US37 – Voir la liste de ses événements créés (events filtrés sur user_id ou organization_id).

**Tech prévu :**  
Tables `events`, `places`, `categories`, `event_categories`, `tickets`, Supabase Storage (upload image), React Hook Form + Yup.

---

## EPIC 4 – Billetterie (fictive + module Stripe inactif)
**Objectif :** simuler la participation et la billetterie, tout en préparant l’intégration future de Stripe.  
Aucune transaction réelle dans le MVP.

**User Stories :**
- US41 – Participer à un événement → créer une commande fictive (orders) et générer un billet (tickets).
- US42 – Afficher ses billets dans “Mes billets” avec QR code (tickets).
- US43 – Scanner un QR code pour vérifier une participation (simulation, ticket_scans).
- US44 – Implémenter le module Stripe (clé API, SDK, endpoints, mode test, payments).
- US45 – Gérer les types de billets (gratuit, payant, nombre limité) via ticket_types.
- US46 – Pouvoir activer/désactiver Stripe via variable d’environnement.

**Tech prévu :**  
Tables `ticket_types`, `orders`, `order_items`, `payments`, `tickets`, `ticket_scans`.  
Stripe (SDK + backend mocké), QR généré via `qrcode.react`.

---

## EPIC 5 – Espace entreprises / organisateurs
Interface dédiée aux acteurs locaux (entreprises, associations).  
**Objectif :** permettre aux structures de publier, gérer et suivre leurs événements depuis un espace dédié.

**User Stories :**
- US51 – Créer un compte “organisateur” via la table organizations.
- US52 – Inviter ou gérer les membres de son organisation (organization_members).
- US53 – Ajouter de nouveaux événements liés à l’organisation (events.organization_id).
- US54 – Modifier, dupliquer ou archiver un événement (events.visibility).
- US55 – Supprimer un événement obsolète.
- US56 – Vérifier l’organisation (SIRET/RNA) pour affichage “certifié” (organization_verifications).
- US57 – Gérer les lieux affiliés à l’organisation (places.organization_id).

**Tech prévu :**  
Tables `organizations`, `organization_members`, `organization_verifications`, `events`, `places`.  
Gestion des rôles via policies Supabase (`role = user / orga / admin`).

---

## EPIC 6 – Notifications et alertes
**Objectif :** maintenir l’engagement des utilisateurs par des notifications ciblées.  
Inclut rappels d’événements, confirmations et nouveautés.

**User Stories :**
- US61 – Recevoir une notification push avant le début d’un événement (notifications, device_tokens).
- US62 – Activer ou désactiver les notifications depuis son espace (notification_subscriptions).
- US63 – Être notifié lorsqu’un nouvel événement correspond à ses intérêts (user_preferences, notification_subscriptions).
- US64 – Recevoir une confirmation d’inscription ou d’achat (simulation, notifications).
- US65 – Voir l’historique des notifications reçues (onglet “Centre de notifications”).

**Tech prévu :**  
Tables `device_tokens`, `notification_subscriptions`, `notifications`, `user_preferences`.  
Intégration OneSignal ou Firebase Cloud Messaging, Supabase Realtime pour les événements proches.
