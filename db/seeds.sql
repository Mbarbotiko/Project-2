USE swaps_db;

CREATE TABLE user_table
(

id int NOT NULL AUTO_INCREMENT,
	name varchar(50) NOT NULL,
	phone int(8) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE item_table
(

id int NOT NULL AUTO_INCREMENT,
	item varchar(30) NOT NULL,
	description varchar(255) NOT NULL,
	picture varchar(1000) NOT NULL,
	category varchar(50) NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (id) REFERENCES user_table(id)


);


ALTER TABLE user_table
MODIFY COLUMN phone varchar(15);


select * from user_table;


INSERT INTO user_table (name, phone)
VALUES ('Margarita', '16516001396');

INSERT INTO user_table (name, phone)
VALUES ('Stephen', '19525640504');





INSERT INTO item_table (item, description, picture, category) VALUES ('Old Boot', 'Spectacular Vintage BOOT!', 'https://www.blueribbonpet.com/wp-content/uploads/EE-1733.jpg', 'Apparel'  );

INSERT INTO item_table (item, description, picture, category) VALUES ('Half Eaten Apple', 'Almost a meal!', 'https://thumbs.dreamstime.com/b/half-eaten-apple-isolated-white-background-39418691.jpg', 'Lunch'  );

