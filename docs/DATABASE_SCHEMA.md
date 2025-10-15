# Uvents – Schéma de base de données (Supabase)

## 🧩 Noyau Utilisateurs & Organisations

| Table | Rôle | Champs clés (exemples) | Relations |
|-------|------|--------------------------|------------|
| **users** | Compte utilisateur | id, email (unique), password_hash, is_active, created_at | 1–1 profiles, n–1 user_oauth_accounts, n–n organizations via organization_members |
| **profiles** | Données profil | user_id (PK/FK), display_name, phone, avatar_url | 1–1 users |
| **user_oauth_accounts** | Comptes sociaux | id, user_id, provider, provider_user_id, created_at | n–1 users |
| **organizations** | Entreprises / associations | id, type (company/association), name, siret?, rna?, verification_status | 1–n events, 1–n places, n–n users via organization_members |
| **organization_members** | Rôles membre | id, organization_id, user_id, role, status, created_at | n–1 organizations, n–1 users |
| **organization_verifications** *(optionnel MVP)* | Historique vérif SIRET/RNA | id, organization_id, source, status, checked_at, raw_payload | n–1 organizations |

---

## 📍 Lieux / Carte

| Table | Rôle | Champs clés (exemples) | Relations |
|-------|------|--------------------------|------------|
| **places** | Lieux réutilisables | id, name, address_line1/2, postal_code, city, country, lat, lng, phone?, email?, access_pmr? | 1–n events, n–1 organizations (propriétaire optionnel) |
| **place_opening_hours** *(optionnel)* | Horaires | place_id, weekday, open_time, close_time | n–1 places |

---

## 🎫 Événements & Classement

| Table | Rôle | Champs clés (exemples) | Relations |
|-------|------|--------------------------|------------|
| **events** | Fiche événement | id, organization_id, place_id, title, description, visibility (draft/published/archived), status (scheduled/cancelled/ended), start_at, end_at, capacity_total? | n–1 organizations, n–1 places |
| **categories** | Taxonomie | id, name, slug, parent_id? | n–n events via event_categories |
| **event_categories** | Pivot évènement–catégorie | event_id, category_id (unique pair) | n–1 events, n–1 categories |
| **event_participants** | Inscrits / présence | id, event_id, user_id, status (interested/going/checked_in), joined_at | n–1 events, n–1 users |
| **event_views** | Trafic brut | id, event_id, user_id?, session_id/device_id, viewed_at, referrer? | n–1 events |
| **event_view_daily** *(optionnel)* | Agrégats vues | event_id, date, views_count | n–1 events |

---

## 💳 Billetterie (MVP prêt Stripe)

| Table | Rôle | Champs clés (exemples) | Relations |
|-------|------|--------------------------|------------|
| **ticket_types** | Types de billets | id, event_id, name, price_cents, currency, capacity?, sales_start_at, sales_end_at, is_active | n–1 events |
| **orders** | Commandes | id, buyer_user_id, organization_id, event_id, status (pending/paid/failed/refunded), total_cents, currency, created_at | n–1 users, n–1 organizations, n–1 events |
| **order_items** | Lignes de commande | id, order_id, ticket_type_id, quantity, unit_price_cents, total_cents | n–1 orders, n–1 ticket_types |
| **payments** | Paiements | id, order_id, provider (stripe/simulated), provider_payment_id, status, amount_cents, currency, created_at, raw_payload | n–1 orders |
| **tickets** | Billets individuels | id, order_id, event_id, ticket_type_id, owner_user_id?, qr_payload, qr_signature, status (issued/valid/used/cancelled), issued_at, used_at | n–1 orders, n–1 events, n–1 ticket_types, n–1 users |
| **ticket_scans** | Journal de validation | id, ticket_id, scanned_by_user_id (staff), scanned_at, scan_result (ok/duplicate/invalid), device_id | n–1 tickets, n–1 users |

---

## ⭐ Favoris, Préférences, Découverte

| Table | Rôle | Champs clés (exemples) | Relations |
|-------|------|--------------------------|------------|
| **user_favorites** | Favoris multi-cible | user_id, target_type (event/organization), target_id, created_at | n–1 users |
| **user_preferences** | Préférences | user_id, pref_key, pref_value (ou colonnes figées) | n–1 users |

---

## 🔔 Notifications (rappels, confirmations)

| Table | Rôle | Champs clés (exemples) | Relations |
|-------|------|--------------------------|------------|
| **device_tokens** | Cibles push | id, user_id, platform (ios/android/web), token, last_seen_at | n–1 users |
| **notification_subscriptions** | Abonnements | id, user_id, channel (push/email/inapp), topic (event_{id}, org_{id}, reminders), is_enabled | n–1 users |
| **notifications** | Log d’envoi | id, user_id?, channel, title, body, topic?, scheduled_for?, sent_at?, status, provider_message_id?, raw_payload | n–1 users? |
