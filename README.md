# Blogging application - ECE Webtech Project

Bienvenue dans notre Projet Webapp.

## 1. Introduction

### Projet Web de la majeure SI

Le fichier comporte les différents tp réalisés : [lab](https://github.com/erwan1812/ece-webapp-Bonnefond-Freisz/tree/master/lab), et en ce qui concerne notre application elle est dans le fichier [app](https://github.com/erwan1812/ece-webapp-Bonnefond-Freisz/tree/master/app).

## 2. Présentation

Bonjour et Bienvenue, nous allons vous faire une courte présentation de notre application.

Tout d'abord, notre application implémente un blog, il fournit aux utilisateurs des articles traitants de différents sujets réalisés par d'autre utilisateurs.

Un utilisateur a la possibilité de s'authentifier via son compte github. Une fois fait, il pourra aussi avoir accès à tout les articles créés par lui dans la rubrique `Profile` puis dans son `Dashboard`. Tout ses articles seront affichés, avec la possibilité de les supprimer ou modifier. S'il n'en a pas il pourra en créer.

S'il veut avoir accès à l'ensemble des articles créés par les différents utilisateurs de l'application, il suffira d'aller dans la rubrique `Articles` en haut à droite de son écran.

Il lui faudra cliquer sur le titre de l'article de son choix pour le consulter. S'il le souhaite, il peut laisser un commentaire qu'il pourra modifier ou supprimer s'il en a l'envie.

Un utilisateur non authentifié pourra lui aussi accéder à ces articles. Cependant, il n'aura pas la possibilité de laisser un commentaire. Il pourra aussi consulter ceux des autres utilisateurs.

## 3. Remarques

Lorque l'on a déployé notre application sur vercel. On a remarqué une erreur que l'on a pas su résoudre. La voici :

Lorsqu'un utilisateur décide de créer ou supprimer un article.

 Normalement lorsqu'il va dans la rubrique `Articles` il devrait voir apparaître ou disparaitre l'article en question. Ce qui fonctionne très bien en [localhost](http://localhost:3000), mais ne se fait pas sur le lien du deploiement sur Vercel.

Pourtant les articles créer s'affiche bien dans le dashboard de l'utilisateur et lorsqu'ils sont supprimés, ils s'effacent bien.

L'erreur vient seulement de la rubrique `Articles` avec Vercel (Vous pouvez vérifier sur la rubrique `Articles` du mode local).

## Production

- Vercel URL : <https://ece-webapp-bonnefond-freisz.vercel.app/>
- Supabase Project URL : <https://app.supabase.com/project/ipyfukskwtqyzorpxhkv>

## Usage

- Pour accéder à notre application, les prérequis ci-dessous sont nécessaires :

```bash
git clone https://github.com/erwan1812/ece-webapp-Bonnefond-Freisz.git

cd app
```

- Lancer l'application :

```bash

  cd app
  # Install dependencies (use yarn or npm)
    npm install
    npm run build
    npm start
```

- Utilisation

Pour pouvoir utiliser notre application une fois placer sur l'appli  [app](https://github.com/erwan1812/ece-webapp-Bonnefond-Freisz/tree/master/app), il faudra lancer la commande ci-dessous :

```bash
    npm run dev
    # ou si vous avez installé yarn
    yarn dev
    ## Auteurs
```

Il faudra ensuite lancer votre [localhost](http://localhost:3000) pour pouvoir utiliser notre application.

Sinon, nous vous invitons à vous rendre sur ce lien [Vercel](https://ece-webapp-bonnefond-freisz.vercel.app/)

## Auteurs

- [Henri Freisz](https://github.com/henrifreisz)
  
  [henri.freisz@edu.ece.fr](henri.freisz@edu.ece.fr)

- [Erwan Bonnefond](https://github.com/erwan1812)

  [erwan.bonnefond@edu.ece.fr](erwan.bonnefond@edu.ece.fr)

## Tasks: Self Evaluation

### Project Management

- Naming convention

  Points: 2. Nous pensons avoir respecter les conventions de nomination des fichiers.

- Project structure

  Points: 2. Nous avons organisé la structure de notre projet comme démontrer sur le template.

- Git

  Points: 2. Les conventionnals Commits ont été respéctées.

- Code quality
  
  Points: 3. La qualité du code a été respectée au maximum. Cependant il se peut qu'il y ai des coquilles dans l'indentation et dans l'espacement des lignes.

- Design, UX and Content

  Points: 2,5. Bonne utilisation de tailwind. Fier de notre design, mais nous pensons que par moment l'expérience utilisateur pourrait être amélioré.

### Application development

- Home page

  Points: 2. Home page informative à propos de nous et sur notre application.

- Login/Profile Page

  Points: 4. Login page utilise l'authentification via `github` et `supabase`. Il persiste l'utilisateur connecté sur sa profile page et header via usercontext.

- New articles creation

  Points: 5. L'utilisateur peut créer un article de puis son `dashboard` accessible depuis sa `profile page`. Cependant il n'a pas la possibilité d'annuler la création dun article via un bouton.

- New comment creation

  Points: 4. Un utilisateur peut laisser un commentaire sur un article, en le choisissant dans cette même rubrique.

- Ressource Access Control
  
  Points: 6. Il utilise le mode `RLS` de `supabase`, et seul un utilisateur connecté peut créer un article ainsi qu'un commentaire.

- Article Modification

  Points: 4. Un utilisateur a la possibilité de modifier un article déjà crée depuis son `dashboard`.

- Article Removal

  Points: 2. Un utilisateur peut supprimer un article depuis son `dashboard`.

- Comment Modification
  
  Points: 2. Un utilisateur peut modifier un commmentaire en accédant à l'article qu'il a commenté dans la rubrique `Articles`.

- Comment Removal
  
  Points: 2. Un utilisateur peut supprimer un commmentaire en accédant à l'article qu'il a commenté dans la rubrique `Articles`.

- Account Settings
  
  Points: 0. Pas réalisé.

- WYSIWYG integration
  
  Points: 0. Pas réalisé.

- Gravatar integration

  Points: 0. Pas réalisé.

- Light/dark theme

  Points: 2. Implémentation d'un bouton Light/dark theme dans l'`header` de notre application.
  
- Accent color selection

  Points: 0. Pas réalisé.

**Bonne découverte !**
