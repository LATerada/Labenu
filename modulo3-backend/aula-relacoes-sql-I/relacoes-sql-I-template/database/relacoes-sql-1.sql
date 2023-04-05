-- Active: 1680695855801@@127.0.0.1@3306


-- Práticas
CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE phones (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    phone_number TEXT UNIQUE NOT NULL,
    user_id TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

SELECT * FROM users;
SELECT * FROM phones;

INSERT INTO users
VALUES
    ( "u000", "user0", "user0@email.com", "12300"),
    ( "u001", "user1", "user10@email.com", "12301");

INSERT INTO phones
VALUES
    ("p001","1234-5678","u000"),
    ("p002","8765-4321","u000"),
    ("p003","1234-1234","u001");

SELECT 
    users.id,
    users.name,
    users.email,
    phones.id,
    phones.phone_number
FROM users
INNER JOIN phones
ON users.id = phones.user_id;

CREATE TABLE licenses (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    register_number TEXT UNIQUE NOT NULL,
    category TEXT NOT NULL
);

CREATE TABLE drivers (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    license_id TEXT UNIQUE NOT NULL,
    FOREIGN KEY (license_id) REFERENCES licenses(id)
);

INSERT INTO licenses
    VALUES
        ("l001", "1234", "A"),
        ("l002", "1334", "B");

INSERT INTO drivers
    VALUES
        ("d001", "Driver1", "driver1@email.com", "driver123", "l001"),
        ("d002", "Driver2", "driver2@email.com", "driver223", "l002");

SELECT
    drivers.id AS driverId ,
    drivers.name,
    drivers.email,
    drivers.license_id AS licenseId,
    licenses.category,
    licenses.register_number AS registerNumber
FROM drivers
INNER JOIN licenses
ON licenses.id = drivers.license_id;

-- EXERCICIO DE FIXACAO
DROP TABLE health_insurences;

CREATE TABLE health_insurences (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    company TEXT NOT NULL,
    category TEXT NOT NULL,
    due_date DATE NOT NULL
);

CREATE TABLE hospital_users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    phone_number TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    insurence_id TEXT UNIQUE NOT NULL,
    FOREIGN KEY (insurence_id) REFERENCES health_insurences(id)
);

INSERT INTO health_insurences
    VALUES
        ("hi0004", "company2", "premium", DATE("2028-04-01")),
        ("hi0005", "company3", "international", DATE("2032-12-01"));

DELETE FROM health_insurences
WHERE "id"='hi0002';

INSERT INTO hospital_users
    VALUES
        ("hu000", "User00", "1234-5678", "user0@email.com", "hi0004"), 
        ("hu001", "User01", "1234-1234", "user1@email.com", "hi0005");

DELETE FROM hospital_users
WHERE "id"='hu001';

SELECT * FROM health_insurences;
SELECT * FROM hospital_users
INNER JOIN health_insurences
ON health_insurences.id = hospital_users.insurence_id;