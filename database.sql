CREATE DATABASE weekend5;

CREATE TABLE favorites (
	id SERIAL PRIMARY KEY,
	comment varchar(500) NOT NULL,
	imagelink varchar(500) NOT NULL
)
