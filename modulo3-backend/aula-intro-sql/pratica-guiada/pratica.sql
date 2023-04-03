-- Active: 1680529646362@@127.0.0.1@3306

CREATE TABLE
    books (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL,
        author TEXT NOT NULL,
        page_count INTEGER,
        price REAL NOT NULL
    );

SELECT * FROM books;

INSERT INTO books ( id, name, author, page_count, price)
    VALUES (850, "O Quinze", "Rachel de Queiroz", 208, 24.95);


INSERT INTO books ( id, name, author, price)
    VALUES (857, "Dom Casmurro", "Machado de Assis" , 46.77);

UPDATE books
SET page_count = 463
WHERE id = 857;

DELETE FROM books
WHERE id = 850;

CREATE TABLE tasks (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    execution_time TEXT
);

SELECT * FROM tasks;

INSERT INTO tasks (id, name, execution_time)
    VALUES(001,"Study Labenu", 5);

INSERT INTO tasks
    VALUES(007,"Wash Clothes",2);

INSERT INTO tasks
    VALUES(009,"Lunch",NULL);

DROP Table tasks
   