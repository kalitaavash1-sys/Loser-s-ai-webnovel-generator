CREATE TABLE stories (
  id SERIAL PRIMARY KEY,
  title TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE chapters (
  id SERIAL PRIMARY KEY,
  story_id INT REFERENCES stories(id),
  content TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT UNIQUE,
  email TEXT UNIQUE
);
