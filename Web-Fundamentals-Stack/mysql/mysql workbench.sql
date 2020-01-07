CREATE TABLE users (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    created_at DATETIME,
    updated_at DATETIME
);

INSERT INTO users (name, email) 
VALUES('Nadir Patel', 'nadirspatel@gmail.com');

SELECT * FROM users;

UPDATE `nadir1`.`users` SET `name` = 'Nadir Patel (NP)' WHERE (`id` = '1');

DELETE FROM `nadir1`.`users` WHERE (`id` = '1');
