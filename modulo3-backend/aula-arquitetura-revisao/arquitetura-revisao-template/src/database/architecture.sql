-- Active: 1682616168763@@127.0.0.1@3306

CREATE TABLE
    brands(
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT UNIQUE NOT NULL
    );

CREATE TABLE
    products(
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL,
        price REAL NOT NULL,
        description TEXT NOT NULL,
        brand_id TEXT NOT NULL,
        FOREIGN KEY (brand_id) REFERENCES brands(id)
    );

SELECT * FROM brands;

SELECT * FROM products;

INSERT INTO brands
VALUES ("b001", "Samsung"), ("b002", "Apple"), ("b003", "Xiaomi");

INSERT INTO products
VALUES (
        "p001",
        "A03",
        649.99,
        "celular de entrada",
        "b001"
    ), (
        "p002",
        "note20",
        4999.99,
        "celular top de linha",
        "b001"
    ), (
        "p003",
        "iPhone14",
        9450.00,
        "celular top de linha",
        "b002"
    ), (
        "p004",
        "poco x5",
        1999.99,
        "celular de entrada",
        "b003"
    );