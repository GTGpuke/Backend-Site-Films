# Backend / API du projet.
Un back/API pour un projet basique pour trier des films dans une petite bdd.
Projet réalisé avec Node.js/Express/MySQL.
## Installation et configuration du projet.

### 1 - Cloner le projet et installer les dépendances.
    ```bash
        git clone https://github.com/ton-profil/films-backend.git
        cd films-backend
        npm install
    ```

### 2 - Créer le fichier d’environnement.

    Copie le modèle .env.example vers .env :

    ```bash
        cp .env.example .env
    ```

    Exemple de contenu :

    PORT=4000
    DB_HOST=127.0.0.1
    DB_USER=root
    DB_PASSWORD=secret
    DB_NAME=films_db
    DB_PORT=3306

    (Ici tout le contenu n'est pas caché pour un aspect pratique mais j'ai mis en place un .env.example pour un côté plus "sécurisé".)

## Lancement de MySQL avec Docker.
    ```bash
        docker run --name films-mysql \
        -e MYSQL_ROOT_PASSWORD=secret \
        -e MYSQL_DATABASE=films_db \
        -v "$(pwd)/db_init.sql":/docker-entrypoint-initdb.d/db_init.sql:ro \
        -p 3306:3306 \
        -d mysql:8.0
    ```
    (Mais image n'est pas parfaite, j'ai fais ça très rapidement.)
    
### Vérification que MySQL tourne bien.
    ```bash
        docker ps
    ```
    ```bash
        docker exec -it films-mysql mysql -uroot -psecret
    ```
    ```sql
        USE films_db;
        SELECT * FROM films;
    ```
## Démarrage du serveur Express.
    ```bash
        npm start
    ```
    Ou alors si besoin pour le mode dev:

    ```bash
        npm run dev
    ```
## Tester l’API Express.
### Liste des films:
    ```bash
        curl http://localhost:4000/api/films
    ```
### Ajouter un film:
    ```bash
        curl -X POST http://localhost:4000/api/films \
        -H "Content-Type: application/json" \
        -d '{"title":"Interstellar","year":2014}'

    ```
### Supprimer un film:
    ```bash
        curl -X DELETE http://localhost:4000/api/films/3
    ```

## Arrêter / redémarrer la base si besoin.
### Arrêter :
```bash
    docker stop films-mysql
```
### Relancer :
```bash
    docker start films-mysql
```
### Supprimer :
```bash
    docker rm -f films-mysql
```