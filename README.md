📄 #CV Intelligent IA

CV Intelligent IA est une application web SaaS qui génère automatiquement :

✅ Un CV adapté à une offre d’emploi

✅ Une lettre de motivation personnalisée

✅ (Option future) Conseils pour réussir son entretien

Contrairement aux générateurs classiques de CV design, notre solution met en avant un vrai “match” intelligent avec l’offre d’emploi, optimisé pour passer les filtres RH/ATS.

🚀 Objectif du projet

Offrir un outil rapide, simple et accessible pour les étudiants, jeunes diplômés et personnes en insertion professionnelle.

Modèle Freemium :

1 CV gratuit à l’inscription.

Paiement à l’unité (0,30 € / CV) ou abonnement (0,99 € – 2,99 € / mois).

Déploiement prévu en 1 mois pour une première version fonctionnelle (MVP).

✨ Fonctionnalités du MVP

👤 Côté Utilisateur

Inscription / Connexion (Email + Google/LinkedIn)

Création de profil (infos de base + upload CV existant)

Champ pour coller une offre d’emploi

Génération IA → CV + Lettre de motivation adaptés

Export & téléchargement (PDF, DOCX)

Historique des documents générés

1 CV gratuit → paiements Stripe/PayPal pour les suivants

👨‍💻 Côté Administrateur

Dashboard (utilisateurs, CV générés, revenus)

Gestion utilisateurs (suspension/suppression)

Suivi paiements & abonnements

🔒 Sécurité & RGPD

Authentification JWT

Mots de passe hashés (bcrypt)

Droit à l’oubli (suppression compte)

RLS activé dans la base de données

🛠️ Stack Technique

Frontend : React.js / Next.js (hébergé sur Vercel ou OVH)

Backend : Node.js + Express

Base de données : Supabase (PostgreSQL)

IA : OpenAI (GPT-4o / GPT-5)

Paiement : Stripe + PayPal

Hébergement :

Frontend → Vercel / OVH

Backend → OVH / LWS

DB → Supabase

📂 Organisation GitHub

Repo 1 : cv-intelligent-frontend → Interface utilisateur

Repo 2 : cv-intelligent-backend → API & logique métier

Workflow :

Branches → Pull requests → Code review → Merge

📅 Planning de Développement (MVP – 4 semaines)

S1 : Authentification + DB Supabase + maquettes

S2 : Génération IA + Export PDF/DOCX

S3 : Paiements Stripe/PayPal + Dashboard admin

S4 : Tests, sécurité, déploiement bêta sur e-petitpas.pro

💳 Monétisation

Version gratuite : 1 CV généré (sans lettre IA, lettre générique par défaut)

Achat unitaire : 0,30 € = 1 crédit (CV + Lettre IA)

Abonnement Standard (0,99 €/mois) : 3 crédits inclus + stockage 1 mois

Abonnement Premium (2,99 €/mois) : 12 crédits inclus + stockage 1 mois

Téléchargement illimité des CV déjà générés

🎨 Design & UX

Interface simple et responsive (mobile, tablette, desktop)

Identité visuelle : bleu & orange (logo officiel e-petitpas.pro)

3 modèles de CV disponibles dès le MVP

Polices recommandées : Times New Roman, Tahoma, Arial

🔮 Fonctionnalités Futures

+10 modèles de CV design

Traduction multilingue (EN, ES, etc.)

Coach IA pour préparation aux entretiens

Génération de portfolio en ligne

Application mobile (iOS & Android)

Intégration avec LinkedIn / Indeed (import auto d’offres)

📌 Critères d’acceptation du MVP

L’utilisateur peut créer un compte

Générer un CV gratuit avec l’IA

Payer pour générer plus de CV/lettres

Télécharger ses documents en PDF/DOCX

L’admin peut gérer utilisateurs, paiements et tarifs

👥 Équipe & Collaboration

1 Développeur Frontend

1 Développeur Backend

1 QA / Test

Gestion de projet et communication via GitHub Issues + Pull Requests

📜 Licence

À définir (MIT, GPL, ou propriétaire selon stratégie).
