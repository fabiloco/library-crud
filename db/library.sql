-- Presentado por :
-- Fabián Alberto Sánchez Ruiz
-- Sheyla Vergara
-- Jose Daniel Muñoz Gomez

-- Curso : Base de datos 2

DROP DATABASE IF EXISTS library;
CREATE DATABASE library;

DROP TABLE IF EXISTS books;
CREATE TABLE books(
	id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
	description TEXT NOT NULL DEFAULT 'Sin descripcion',
	price FLOAT CHECK(price > 0),
	author VARCHAR(50) NOT NULL,
	page_num INTEGER NOT NULL,
	created_at TIMESTAMP DEFAULT NOW()
);
