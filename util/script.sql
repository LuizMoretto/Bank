CREATE DATABASE bank;
USE bank;

CREATE TABLE wallet(
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    typeOfSpent VARCHAR(255) NOT NULL UNIQUE,
    valueOfExpense INT NOT NULL
);

ALTER TABLE wallet ADD dateOfSpent DATE;

insert into wallet(typeOfSpent, valueOfExpense, dateOfSpent) values('Renda', 2000, 23/10/2022);

select * from wallet;

ALTER TABLE wallet DROP COLUMN dateOfSpent;

ALTER TABLE wallet ADD dateOfSpent INT NOT NULL;

ALTER TABLE wallet ADD title VARCHAR(255) NOT NULL UNIQUE;