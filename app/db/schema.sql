DROP DATABASE IF EXISTS hero_db;

CREATE DATABASE hero_db;
use hero_db;

create table heroes(
  id int auto_increment not null,
  name varchar(50) unique not null,
  hero_id int unique not null,
  intel int not null,
  strength int not null,
  speed int not null,
  durability int not null,
  power int not null,
  combat int not null,
  total_power int not null,
  alignment varchar(50),
  img_url varchar(1000),

  PRIMARY KEY(id)
);