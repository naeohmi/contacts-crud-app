DROP DATABASE IF EXISTS contacts;
CREATE DATABASE contacts;

\c contacts;

CREATE TABLE contacts (
  ID SERIAL PRIMARY KEY,
  first TEXT,
  last TEXT,
  age INTEGER,
  gender TEXT
);

INSERT INTO contacts (first, last, age, gender) 
 VALUES ('nae', 'ohmi', 42, 'female');
