DROP DATABASE IF EXISTS booking;

CREATE DATABASE booking;

USE booking;

CREATE TABLE hotels (
  id int NOT NULL AUTO_INCREMENT,
  standard_rate decimal,
  adult_premium decimal(3, 2),
  child_premium decimal(3, 2),
  max_stay decimal,
  deal varchar(35),
  PRIMARY KEY(id)
);

CREATE TABLE sites (
  id int NOT NULL AUTO_INCREMENT,
  site_name varchar(25),
  logo varchar(200),
  tweak decimal(3, 2),
  incentive decimal,
  PRIMARY KEY(id)
);

CREATE TABLE dates (
  id int NOT NULL AUTO_INCREMENT,
  date_premium decimal(3, 2),
  PRIMARY KEY(id)
);