CREATE TABLE IF NOT EXISTS ucode_web.heroes (
    id int PRIMARY KEY NOT NULL,
    name varchar(30) NOT NULL,
    description TINYTEXT NOT NULL,
    class_role ENUM('tankman', 'healer', 'dps') NOT NULL
);