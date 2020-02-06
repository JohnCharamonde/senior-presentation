-- DROP DATABASE IF EXISTS booking;

IF NOT EXISTS CREATE DATABASE HRR43_FEC;

USE HRR43_FEC;

IF EXISTS hotels DROP HRR43_FEC.hotels;

CREATE TABLE hotels (
  id int NOT NULL AUTO_INCREMENT,
  standard_rate decimal,
  adult_premium decimal(3, 2),
  child_premium decimal(3, 2),
  max_stay decimal,
  deal varchar(35),
  PRIMARY KEY(id)
);

IF EXISTS sites DROP HRR43_FEC.sites;

CREATE TABLE sites (
  id int NOT NULL AUTO_INCREMENT,
  site_name varchar(25),
  logo varchar(200),
  tweak decimal(3, 2),
  incentive decimal,
  PRIMARY KEY(id)
);

IF EXISTS dates DROP HRR43_FEC.dates;

CREATE TABLE dates (
  id int NOT NULL AUTO_INCREMENT,
  date_premium decimal(3, 2),
  PRIMARY KEY(id)
);