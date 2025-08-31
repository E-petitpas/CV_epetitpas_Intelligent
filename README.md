# 📄 CV Intelligent IA

## 🚀 Présentation

**CV Intelligent IA** est une application web qui génère automatiquement :

* ✅ Un **CV adapté** à une offre d’emploi
* ✅ Une **lettre de motivation personnalisée**
* ✅ Un **historique des documents générés**
* ✅ Un **système de crédits et d’abonnements**

C’est plus qu’un simple générateur de CV design : l’application utilise l’IA pour **adapter le contenu au texte de l’offre**, optimisant ainsi les chances de passer les filtres ATS (Applicant Tracking Systems).

---

## 🛠️ Stack technique

* **Frontend** : [Next.js (React)](https://nextjs.org/)
* **Backend/API** : \[Node.js + Express] ou \[Hono] selon export Figma
* **Base de données & Auth** : [Supabase (PostgreSQL + RLS)](https://supabase.com/)
* **IA** : [OpenAI GPT-4o / GPT-5](https://platform.openai.com/)
* **Paiement** : [Stripe](https://stripe.com/) (Abonnements + crédits)
* **UI** : Identité visuelle (Bleu `#004D9D`, Orange `#FF6600`)

---

## 💳 Plans & Tarifs (MVP)

| Offre                    | Prix         | Contenu                                                                                       |
| ------------------------ | ------------ | --------------------------------------------------------------------------------------------- |
| **Gratuit – Découverte** | 0 €          | 1 CV IA offert (sans lettre IA), modèles basiques, stockage 1 mois, téléchargements illimités |
| **Achat à l’unité**      | 0,30 €       | 1 CV généré + 1 Lettre IA, stockage 1 mois, téléchargements illimités                         |
| **Abonnement Starter**   | 0,99 €/mois  | 3 crédits inclus, stockage 1 mois, téléchargements illimités                                  |
| **Abonnement Pro**       | 2,99 €/mois  | 12 crédits inclus, stockage 1 mois, téléchargements illimités                                 |
| **Abonnement Premium**   | 9,99 €/mois  | CV illimités, templates premium, lettres de motivation, optimisation ATS                      |
| **Abonnement Business**  | 19,99 €/mois | Tout du Premium + templates exclusifs, support prioritaire, analytics avancés                 |

---

## 📂 Structure du projet

```
cv-intelligent-ia/
│── frontend/        # Next.js app (UI + pages Figma export)
│── backend/         # API (Node.js/Hono/Express)
│── supabase/        # SQL, policies RLS
│── docs/            # Cahier des charges, maquettes Figma export
│── README.md        # Ce fichier
```

---

## ⚙️ Installation

### 1. Cloner le projet

```bash
git clone https://github.com/<ton-org>/cv-intelligent-ia.git
cd cv-intelligent-ia
```

### 2. Configurer les environnements

Créer deux fichiers `.env` :

📌 **frontend/.env.local**

```env
NEXT_PUBLIC_SUPABASE_URL=xxx
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
NEXT_PUBLIC_API_URL=http://localhost:4000
```

📌 **backend/.env**

```env
PORT=4000
SUPABASE_URL=xxx
SUPABASE_SERVICE_KEY=xxx

OPENAI_API_KEY=sk-xxx
STRIPE_SECRET_KEY=sk_live_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
```

### 3. Installer les dépendances

```bash
cd frontend && npm install
cd ../backend && npm install
```

### 4. Lancer en local

Backend :

```bash
cd backend
npm run dev
```

Frontend :

```bash
cd frontend
npm run dev
```

👉 App dispo sur [http://localhost:3000](http://localhost:3000)

---

## 🔐 Authentification (Supabase)

* Email + mot de passe
* Google OAuth (LinkedIn prévu en V2)
* Table `profiles` : infos personnelles, formations, expériences, compétences

---

## 🤖 Génération IA

* Endpoint `/api/generate`
* Input : { profil, offre }
* Output : { cv, coverLetter } (JSON structuré)
* Affichage → aperçu double (CV + Lettre), export PDF

---

## 💳 Paiements (Stripe)

* 1 CV gratuit à l’inscription
* Paiement unitaire (0,30 € = 1 CV + 1 Lettre)
* Abonnements (Starter, Pro, Premium, Business)
* Webhook Stripe → mise à jour crédits

---

## 📊 Admin (MVP)

* Dashboard : nb utilisateurs, revenus, crédits consommés
* Gestion comptes : suspendre / supprimer

---

## 📌 Étapes de développement (2 semaines)

### ⏱️ Semaine 1

* J1-2 : Setup projets, DB Supabase, Auth email + Google
* J3-4 : Page Profil (CRUD) + API IA `/api/generate`
* J5 : Génération CV + Lettre (aperçu + export PDF)

### ⏱️ Semaine 2

* J6 : Historique (listes + téléchargement)
* J7-8 : Stripe Checkout + crédits + paywall
* J9 : Admin (stats + gestion comptes)
* J10 : QA + déploiement bêta (Vercel + OVH/LWS)

---

## ✅ Roadmap post-MVP

* Ajout LinkedIn OAuth
* Multi-templates de CV
* Export DOCX
* PayPal comme 2e méthode de paiement
* Analytics avancés (tableaux de bord)
* Application mobile (React Native)

---

## 👨‍💻 Auteurs

Projet initié par **Alix Herivelona – E-petitpas collaboration avec enfant prod évolution et E-petitpas Madagascar**
Développement collaboratif (Frontend, Backend, Supabase, IA, Stripe).

---
