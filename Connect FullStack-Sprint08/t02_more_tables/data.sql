INSERT INTO ucode_web.powers (id, name, type) VALUES
(1, 'bloody fist', 'attack'),
(2, 'iron shield', 'defense'),
(3, 'fireball', 'attack'),
(4, 'healing touch', 'defense');

INSERT INTO ucode_web.races (id, name) VALUES
(1, 'Human'),
(2, 'Kree');

INSERT INTO ucode_web.teams (id, name) VALUES
(1, 'Avengers'),
(2, 'Hydra');

INSERT INTO ucode_web.heroes_powers (hero_id, power_id, power_points) VALUES
(1, 2, 200),
(2, 1, 110),
(3, 3, 150),
(4, 4, 100);

INSERT INTO ucode_web.heroes_teams (hero_id, team_id) VALUES
(1, 1),
(2, 1),
(2, 2),
(3, 1),
(4, 2);
