create database todolist;

use todolist;

CREATE TABLE todos (
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title varchar(255),
  content text
);