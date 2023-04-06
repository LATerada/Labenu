-- Active: 1680779910433@@127.0.0.1@3306

-- Práticas
DROP table users;

CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL
);

SELECT * FROM users;

INSERT INTO users
    VALUES 
        ("uA", "UserA", "user0@email.com", "123456", DATETIME("now","localtime"));

INSERT INTO users
    VALUES 
        ("uB", "UserB", "userB@email.com", "123456", DATETIME("now","localtime")),
        ("uC","UserC", "userC@email.com", "123456", DATETIME("now","localtime"));

UPDATE users
SET email = "user2@email.com"
WHERE id = "u002";

DROP TABLE follows;

CREATE TABLE follows (
    follower_id TEXT NOT NULL,
    followed_id TEXT NOT NULL,
    FOREIGN KEY (follower_id) REFERENCES users(id),
    FOREIGN KEY (followed_id) REFERENCES users(id)
);

SELECT * FROM follows;

INSERT INTO follows
    VALUES
        ("uA", "uB"),
        ("uA", "uC"),
        ("uB", "uA");

SELECT 
    users.id,
    users.name,
    users.email,
    users.created_at AS createdAt,
    follows.followed_id AS follows
FROM users
INNER JOIN follows
ON users.id = follows.follower_id;

SELECT 
    users.id,
    users.name,
    users.email,
    users.created_at AS createdAt,
    follows.followed_id AS follows 
FROM users
LEFT JOIN follows
ON users.id = follows.follower_id;

SELECT 
    users.id,
    users.name,
    users.email,
    users.created_at AS createdAt,
    follows.followed_id AS followedId,
    follows.follower_id AS followerId,
    usersFollowed.name AS followedName
FROM users
LEFT JOIN follows
ON follows.follower_id = users.id
LEFT JOIN users as usersFollowed
ON follows.followed_id = usersFollowed.id;

--  EXERCICIO DE FIXACAO
DROP TABLE actors;
DROP TABLE films;
DROP TABLE film_actors;

CREATE TABLE actors (
    id TEXT PRIMARY KEY NOT NULL,
    name TEXT UNIQUE NOT NULL,
    age INTEGER NOT NULL
);

CREATE TABLE films (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT UNIQUE NOT NULL,
    premier_year INTEGER NOT NULL
);

CREATE TABLE film_actors (
    actor_id TEXT NOT NULL,
    film_id TEXT NOT NULL,
    FOREIGN KEY (actor_id) REFERENCES actors(id),
    FOREIGN KEY (film_id) REFERENCES films(id)
);

INSERT INTO actors
    VALUES
        ("a001", "Margot Robbie", 32),
        ("a002", "Brad Pitt", 59),
        ("a003", "Leonardo DiCaprio", 48),
        ("a004","Domhnall Gleeson", 39);
INSERT INTO actors
    VALUES
        ("a005", "Margaret Qualley", 28);

INSERT INTO films
    VALUES
        ("f001", "O Regresso", 2015),
        ("f002", "O Lobo de Wall Street", 2013),
        ("f003", "Babilônia", 2022 ),
        ("f004", "Era Uma vez em Hollywood", 2019),
        ("f005", "Questão de Tempo", 2013);

INSERT INTO film_actors
    VALUES
        ("a001", "f002"),
        ("a001", "f003"),
        ("a001", "f004"),
        ("a002", "f003"),
        ("a002", "f004"),
        ("a003", "f001"),
        ("a003", "f002"),
        ("a003", "f004"),
        ("a004", "f001"),
        ("a004", "f005");
INSERT INTO film_actors VALUES("a005", "f004");

SELECT * FROM actors;
SELECT * FROM films;
SELECT * FROM film_actors;

SELECT 
    films.id AS filmId,
    films.name,
    films.premier_year AS premierYear,
    actors.name AS actorName,
    actors.age AS actorAge
FROM films
INNER JOIN film_actors
ON films.id = film_actors.film_id
INNER JOIN actors
ON film_actors.actor_id = actors.id
ORDER BY filmId ASC;