-- Active: 1682348446266@@127.0.0.1@3306

CREATE TABLE
    characters(
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT UNIQUE NOT NULL,
        species TEXT NOT NULL,
        stars INTEGER DEFAULT(0) NOT NULL,
        coins INTEGER DEFAULT(0) NOT NULL
    );

INSERT INTO
    characters (id, name, species)
VALUES ("c001", "Mario", "Human"), ("c002", "Luigi", "Human"), ("c003", "Browser", "Koopa");

SELECT * FROM characters;

DROP TABLE characters;