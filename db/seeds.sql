USE swaps_db;

-- CREATE TABLE users
-- (

-- id int NOT NULL AUTO_INCREMENT,
-- 	name varchar(50) NOT NULL,
-- 	phone int(8) NOT NULL,
-- 	PRIMARY KEY (id)
-- );

-- CREATE TABLE items
-- (

-- id int NOT NULL AUTO_INCREMENT,
-- 	item varchar(30) NOT NULL,
-- 	description varchar(255) NOT NULL,
-- 	picture varchar(1000) NOT NULL,
-- 	category varchar(50) NOT NULL,
-- 	PRIMARY KEY (id),
-- 	FOREIGN KEY (id) REFERENCES User(id)


-- ); You will not use the above ^ when sequelize runs on server it should create tables automatically, seeds will need to be inserted after which are below:


USE swaps_db;


INSERT INTO users (name, phone, createdAt, updatedAt)
VALUES ('Margarita', '16516001396', '2018-06-25 21:22:58', '2018-06-25 21:22:58');

INSERT INTO users (name, phone, createdAt, updatedAt)
VALUES ('Stephen', '19525640504', '2018-06-25 21:22:58', '2018-06-25 21:22:58');


INSERT INTO items (item, description, picture, category, createdAt, updatedAt, Userid) VALUES ('Old Boot', 'Spectacular Vintage BOOT!', 'https://www.blueribbonpet.com/wp-content/uploads/EE-1733.jpg', 'Apparel', '2018-06-25 21:22:58', '2018-06-25 21:22:58' , 1 );

INSERT INTO items (item, description, picture, category, createdAt, updatedAt, Userid) VALUES ('Half Eaten Apple', 'Almost a meal!', 'https://thumbs.dreamstime.com/b/half-eaten-apple-isolated-white-background-39418691.jpg', 'Lunch', '2018-06-25 21:22:58', '2018-06-25 21:22:58' , 2);
