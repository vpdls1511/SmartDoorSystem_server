CREATE TABLE building(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    floor INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE room(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    building INT NOT NULL,
    room_no INT NOT NULL,
    professor_name VARCHAR(100) NOT NULL,
    room_size FLOAT NOT NULL,
    max_user INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE file(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    file_type INT NOT NULL,
    parent_id INT NOT NULL,
    path VARCHAR(255) NOT NULL,
    mime_type VARCHAR(100) NOT NULL,
    filename VARCHAR(255) NOT NULL,
    originalname VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE file_type(
     id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
     type_name VARCHAR(100) NOT NULL
);
