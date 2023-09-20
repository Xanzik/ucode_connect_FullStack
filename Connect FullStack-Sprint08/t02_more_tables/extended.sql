CREATE TABLE IF NOT EXISTS ucode_web.powers (
    id int AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name varchar(256) NOT NULL,
    type ENUM('attack', 'defense') NOT NULL
);

CREATE TABLE IF NOT EXISTS ucode_web.heroes_powers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    hero_id INT NOT NULL,
    power_id INT NOT NULL,
    power_points INT NOT NULL,
    FOREIGN KEY (hero_id) REFERENCES ucode_web.heroes(id),
    FOREIGN KEY (power_id) REFERENCES ucode_web.powers(id)
);


CREATE TABLE IF NOT EXISTS ucode_web.races (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name varchar(256) NOT NULL
);

ALTER TABLE ucode_web.heroes
ADD race_id INT,
ADD FOREIGN KEY (race_id) REFERENCES races(id);

CREATE TABLE IF NOT EXISTS ucode_web.teams (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS ucode_web.heroes_teams (
    id INT AUTO_INCREMENT PRIMARY KEY,
    hero_id INT NOT NULL,
    team_id INT NOT NULL,
    FOREIGN KEY (hero_id) REFERENCES ucode_web.heroes(id),
    FOREIGN KEY (team_id) REFERENCES ucode_web.teams(id)
);
