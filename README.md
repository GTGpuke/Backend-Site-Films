# Backend / API du projet.
Un back/API pour un projet basique pour trier des films dans une petite bdd.
Projet réalisé avec Node.js/Express/MySQL.
## Installation et configuration du projet.

### 1 - Clonez le projet et installez les dépendances.
    
    git clone https://github.com/ton-profil/films-backend.git
    cd Backend-Site-Films
    npm install
    

### 2 - Créez le fichier d’environnement.

Copie le modèle .env.example vers .env :

    cp .env.example .env
    
Exemple de contenu :

    PORT=4000
    DB_HOST=127.0.0.1
    DB_USER=root
    DB_PASSWORD=secret
    DB_NAME=films_db
    DB_PORT=3306

(Ici tout le contenu n'est pas caché pour un aspect pratique mais j'ai mis en place un .env.example pour un côté plus "sécurisé".)

## Lancement de MySQL avec Docker.
    
    docker run --name films-mysql \
    -e MYSQL_ROOT_PASSWORD=secret \
    -e MYSQL_DATABASE=films_db \
    -v "$(pwd)/db_init.sql":/docker-entrypoint-initdb.d/db_init.sql:ro \
    -p 3306:3306 \
    -d mysql:8.0
    
(Mais image n'est pas parfaite, j'ai fais ça très rapidement.)
    
### Vérification que MySQL tourne bien.

    docker ps

    docker exec -it films-mysql mysql -uroot -psecret

    USE films_db;
    SELECT * FROM films;

## Démarrage du serveur Express.

    npm start

Ou alors si besoin pour le mode dev:


    npm run dev

## Tester l’API Express.
### Liste des films:

    curl http://localhost:4000/api/films

### Ajouter un film:

    curl -X POST http://localhost:4000/api/films \
    -H "Content-Type: application/json" \
    -d '{"title":"Interstellar","year":2014}'

### Supprimer un film:

    curl -X DELETE http://localhost:4000/api/films/3

## Arrêter / redémarrer la base si besoin.
### Arrêter :

    docker stop films-mysql

### Relancer :

    docker start films-mysql

### Supprimer :

    docker rm -f films-mysql
