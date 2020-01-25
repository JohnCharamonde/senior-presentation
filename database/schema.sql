DROP DATABASE IF EXISTS booking;

CREATE DATABASE booking;

USE booking;

CREATE TABLE hotels (
  id int NOT NULL AUTO_INCREMENT,
  standard_rate decimal,
  adult_premium decimal,
  child_premium decimal,
  max_stay decimal,
  deal varchar(25),
  PRIMARY KEY(id)
);

CREATE TABLE sites (
  id int NOT NULL AUTO_INCREMENT,
  site_name varchar(25)
  logo varchar(200),
  tweak decimal,
  incentive decimal,
  PRIMARY KEY(id)
);

CREATE TABLE dates (
  id int NOT NULL AUTO_INCREMENT,
  date_premium decimal,
  PRIMARY KEY(id)
);