DROP DATABASE IF EXISTS Canada_Amazon;
CREATE DATABASE Canada_Amazon;
USE Canada_Amazon;

CREATE TABLE Reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  product_id INT,
  review_text VARCHAR(255),
  rating DECIMAL(18,2),
  date_created VARCHAR(255)
);

CREATE TABLE Products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  DESCRIPTION VARCHAR(10000),
  price DECIMAL(18,2),
  category_id INT
);

CREATE TABLE Categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE Comments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  comment_text VARCHAR(255),
  user_id INT,
  review_id INT,
  date_created VARCHAR(255),
  parent_comment_id INT,
  child_comment_id INT
);

CREATE TABLE Users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  total INT
);

CREATE TABLE Uploaded_Images (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT,
  user_id INT
);

CREATE TABLE Users_Products (
  user_id INT,
  product_id INT
);

ALTER TABLE Comments

ADD CONSTRAINT fk_review_id FOREIGN KEY (review_id)
  REFERENCES Reviews(id);

ALTER TABLE Comments

ADD CONSTRAINT fk_user_id FOREIGN KEY (user_id)
  REFERENCES Users(id);

ALTER TABLE Comments

ADD CONSTRAINT fk_parent_comment_id FOREIGN KEY (parent_comment_id)
  REFERENCES Comments(id);

ALTER TABLE Comments

ADD CONSTRAINT fk_child_comment_id FOREIGN KEY (child_comment_id)
  REFERENCES Comments(id);


ALTER TABLE Reviews

ADD FOREIGN KEY (user_id)
  REFERENCES Users(id);

ALTER TABLE Reviews

ADD FOREIGN KEY (product_id)
  REFERENCES Products(id);

ALTER TABLE Products

ADD FOREIGN KEY (category_id)
  REFERENCES Categories(id);
 

ALTER TABLE Uploaded_Images

ADD FOREIGN KEY (user_id)
  REFERENCES Users(id);

ALTER TABLE Uploaded_Images

ADD FOREIGN KEY (product_id)
  REFERENCES Products(id);

ALTER TABLE Users_Products

ADD FOREIGN KEY (user_id)
  REFERENCES Users(id);

ALTER TABLE Users_Products

ADD FOREIGN KEY (product_id)
  REFERENCES Products(id);

