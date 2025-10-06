-- Création de la base de données.
CREATE DATABASE IF NOT EXISTS films_db CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE films_db;

-- Création de la table films.
CREATE TABLE IF NOT EXISTS films (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  titre VARCHAR(255) NOT NULL,
  year INT NOT NULL,
  heure_de_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertion de quelques films.
INSERT INTO films (titre, year) VALUES
('The Matrix', 1999),
('Inception', 2010);