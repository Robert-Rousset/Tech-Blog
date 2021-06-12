DROP DATABASE IF EXISTS blog_db;

CREATE DATABASE blog_db;

-- CREATE TABLE users (
--     id INTEGER NOT NULL auto_increment, 
--     title VARCHAR(255) NOT NULL, 
--     dates INTEGER NOT NULL, 
--     content VARCHAR(255) NOT NULL, 
--     user_id INTEGER, 
--     PRIMARY KEY (id), 
--     FOREIGN KEY (user_id) REFERENCES users (id) 
-- )