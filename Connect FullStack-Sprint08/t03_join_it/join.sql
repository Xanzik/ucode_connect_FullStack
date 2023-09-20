SELECT h.id AS hero_id, h.name AS hero_name, t.name AS team_name
FROM ucode_web.heroes h
LEFT JOIN ucode_web.heroes_teams ht ON h.id = ht.hero_id
LEFT JOIN ucode_web.teams t ON ht.team_id = t.id;

SELECT h.id AS hero_id, h.name AS hero_name, p.name AS power_name
FROM ucode_web.heroes h
CROSS JOIN ucode_web.powers p
LEFT JOIN ucode_web.heroes_powers hp ON h.id = hp.hero_id AND p.id = hp.power_id;

SELECT h.id AS hero_id, h.name AS hero_name, p.name AS power_name, t.name AS team_name
FROM ucode_web.heroes h
INNER JOIN ucode_web.heroes_powers hp ON h.id = hp.hero_id
INNER JOIN ucode_web.powers p ON hp.power_id = p.id
INNER JOIN ucode_web.heroes_teams ht ON h.id = ht.hero_id
INNER JOIN ucode_web.teams t ON ht.team_id = t.id;
