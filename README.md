
# Mon Projet de Conversion jQuery à React  

## Introduction  

Ce projet est une conversion d'un ancien projet développé en jQuery vers une version moderne basée sur React. L'objectif principal était de remplacer les anciens plugins jQuery par des composants React, en tirant parti de la bibliothèque Material-UI (MUI) pour améliorer l'expérience utilisateur.  

---

## Technologies Utilisées  

- **Vite** : Utilisé comme outil de construction pour faciliter le développement rapide d'applications React. Vite offre un environnement de développement rapide grâce à une compilation sur demande.  
- **React** : Framework JavaScript pour construire des interfaces utilisateur. Utilisé pour structurer la logique de l'application et gérer l'état.  
- **Material-UI (MUI)** : Bibliothèque de composants React qui offre une variété de composants préconstruits pour créer des interfaces élégantes et réactives.  
- **jQuery** : Bien que ce projet soit une conversion d'un ancien projet basé sur jQuery, les besoins en jQuery ont été réduits en intégrant MUI.  
- **Plugin de Menus Déroulants** : Les anciens menus déroulants jQuery ont été remplacés par des composants de sélection MUI pour une meilleure intégration avec le style et l’UX de l’application.  
- **Plugin de Table de Données** : Les fonctionnalités de gestion des données de la table ont également été migrées vers des composants MUI pour assurer une navigation fluide et un affichage structuré.  
- **Sélecteurs de Date** : Les anciens sélecteurs de date basés sur jQuery ont été remplacés par des composants de sélection de date MUI.  

---

## Fonctionnalités  

- **Conversion de projet** : Le projet initial, qui était basé sur jQuery, a été entièrement converti en une application React.  
- **Utilisation de Modals MUI** : Pour les interactions qui nécessitaient des modals, j'ai utilisé le composant `Modal` de MUI à la place de l'ancienne implémentation jQuery.  
- **Interfaces Utilisateur Modernes** : Grâce à MUI, l'application bénéficie d'une interface utilisateur plus moderne et réactive par rapport à l'interface utilisateur précédente basée sur jQuery.  

---

## Installation  

Pour installer et exécuter ce projet sur votre machine locale, suivez les étapes ci-dessous :  

1. **Clonez le dépôt** :  
   ```bash  
   git clone https://github.com/developer-ta/Projet_14_Faites-passer-une-librairie-jQuery-vers-React-final-projet.git  
   ```

2. **Installez les dépendances** :  
   ```bash  
   npm install  
   ```

3. **Démarrez le serveur de développement** :  
   ```bash  
   npm run dev  
   ```

4. **Ouvrez votre navigateur à l'adresse suivante** :  
   [http://localhost:5173](http://localhost:5173)  

---

## Conclusion  

Cette conversion de jQuery à React a permis de moderniser le projet et d'améliorer l'expérience utilisateur tout en rendant le code plus maintenable et évolutif. L'utilisation de Material-UI a également permis de réduire considérablement la dépendance au code CSS personnalisé.



# Description de Projet : Clean Architecture Frontend avec React

## Introduction  

Ce projet a été initialisé avec **Vite**, qui est un outil moderne et rapide pour le développement d'applications React. Il applique les principes de **Clean Architecture** (parfois appelée "Onion Architecture") au contexte frontend. Cette approche permet d'assurer une séparation claire des responsabilités, rendant le projet plus maintenable, organisé et évolutif.

---

## Architecture Globale  

L'architecture appliquée au frontend est divisée en plusieurs couches, chaque couche ayant un rôle spécifique et indépendant.  

### Couches Principales :  

1. **Domain Layer** :  
   - Responsable de la logique métier pure et des entités.  
   - Elle ne contient aucune dépendance vers des couches extérieures comme React, Redux ou les APIs.  

2. **Application Layer** :  
   - Coordonne les opérations métiers et les appels vers le domaine et les repositories.  
   - Agit comme un pont entre la logique métier (domaine) et les couches externes.  

3. **Infrastructure Layer** :  
   - Interagit avec les ressources externes comme les APIs, les bases de données ou Redux.  
   - Contient les repositories qui gèrent la récupération et la manipulation des données.  

4. **Presentation Layer** :  
   - C'est le point d'interaction avec l'utilisateur :  
     - Interface utilisateur (UI),  
     - Gestion de la logique locale des états,  
     - Traitement des interactions.  
   - Cette couche regroupe les données et fonctionnalités fournies par les hooks personnalisés pour les afficher dans les composants individuels.  

---

## Conclusion  

Ce projet est structuré selon les principes de la **Clean Architecture**, avec une approche modulaire et indépendante entre les couches.  

### Les avantages sont :  

1. **Séparation Claire des Responsabilités** :  
   - Chaque couche a un rôle distinct (Domain, Application, Infrastructure, Presentation).  
   - Les hooks personnalisés agissent comme intermédiaires pour contrôler les interactions entre les composants et les autres couches.  

2. **Flexibilité et Scalabilité** :  
   - La structure permet d’ajouter facilement de nouvelles fonctionnalités sans altérer le fonctionnement existant.  

3. **Gestion Efficiente des Données** :  
   - Utilisation intelligente de Redux pour les états globaux et des hooks personnalisés pour des états locaux, limitant ainsi les dépendances inutiles entre les composants.  

### Grâce à cette organisation, ce projet est :  
- Bien conçu,  
- Maintenable,  
- Évolutif pour des futurs développements.

