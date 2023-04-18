-- Active: 1681816814627@@127.0.0.1@3306

DROP TABLE videos;

CREATE TABLE
    videos(
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        title TEXT NOT NULL,
        duration INTEGER NOT NULL,
        upload_at TEXT DEFAULT (DATETIME()) NOT NULL
    );

SELECT * FROM videos;

INSERT INTO
    videos (id, title, duration)
VALUES ("v00", "Video", 20), ("v01", "Video1", 20), ("v02", "Video2", 20), ("v03", "Video3", 20);