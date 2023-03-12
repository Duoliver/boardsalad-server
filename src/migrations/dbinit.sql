CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CREATE SCHEMA boardsalad;

CREATE TABLE IF NOT EXISTS boards(
  id: uuid DEFAULT uuid_generate_v4(),
  name: VARCHAR NOT NULL,
  description: VARCHAR NOT NULL,
  created_at: TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY (id)
)

CREATE TABLE IF NOT EXISTS posts(
  id: uuid DEFAULT uuid_generate_v4(),
  text: VARCHAR NOT NULL,
  text_align: VARCHAR NOT NULL,
  text_position: VARCHAR NOT NULL,
  text_colour: VARCHAR NOT NULL,
  background_colour: VARCHAR NOT NULL,
  font_size: SMALLINT NOT NULL,
  font_style: VARCHAR NOT NULL,
  created_at: TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY (id),
  FOREIGN KEY (board_id) REFERENCES boards(id)
)