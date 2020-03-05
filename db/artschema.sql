USE bible_db;

CREATE TABLE genesisArt
(
    id int NOT NULL AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    picture varchar(255) NOT NULL,
    artist varchar(255),
    chapter int NOT NULL,
    verse int,
    matureContent BOOLEAN DEFAULT false,
    upvotes int DEFAULT 0,
PRIMARY KEY (id)
)

