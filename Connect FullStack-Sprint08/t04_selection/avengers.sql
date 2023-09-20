SELECT h.id AS hero_id, h.name AS hero_name
FROM ucode_web.heroes h
LEFT JOIN (
    SELECT hero_id, SUM(CASE WHEN p.type = 'attack' THEN hp.power_points ELSE 0 END) AS attack_power,
                          SUM(CASE WHEN p.type = 'defense' THEN hp.power_points ELSE 0 END) AS defense_power
    FROM ucode_web.heroes_powers hp
    JOIN ucode_web.powers p ON hp.power_id = p.id
    GROUP BY hero_id
) AS power_stats ON h.id = power_stats.hero_id
ORDER BY (COALESCE(attack_power, 0) + COALESCE(defense_power, 0)) DESC, h.id ASC
LIMIT 1;

SELECT h.id AS hero_id, h.name AS hero_name
FROM ucode_web.heroes h
LEFT JOIN (
    SELECT hero_id, SUM(CASE WHEN p.type = 'defense' THEN hp.power_points ELSE 0 END) AS defense_power
    FROM ucode_web.heroes_powers hp
    JOIN ucode_web.powers p ON hp.power_id = p.id
    GROUP BY hero_id
) AS defense_stats ON h.id = defense_stats.hero_id
ORDER BY COALESCE(defense_power, 0) ASC, h.id ASC
LIMIT 1;

SELECT h.id AS hero_id, h.name AS hero_name,
       SUM(CASE WHEN p.type = 'attack' THEN hp.power_points ELSE 0 END) +
       SUM(CASE WHEN p.type = 'defense' THEN hp.power_points ELSE 0 END) AS total_power
FROM ucode_web.heroes h
JOIN ucode_web.heroes_teams ht ON h.id = ht.hero_id
JOIN ucode_web.teams t ON ht.team_id = t.id AND t.name = 'Avengers'
LEFT JOIN ucode_web.heroes_powers hp ON h.id = hp.hero_id
LEFT JOIN ucode_web.powers p ON hp.power_id = p.id
WHERE h.id <> 2  -- Exclude the double-agent (change the ID as needed)
GROUP BY h.id, h.name
ORDER BY total_power DESC;

SELECT t.name AS team_name,
       SUM(CASE WHEN p.type = 'attack' THEN hp.power_points ELSE 0 END) +
       SUM(CASE WHEN p.type = 'defense' THEN hp.power_points ELSE 0 END) AS total_power
FROM ucode_web.teams t
LEFT JOIN ucode_web.heroes_teams ht ON t.id = ht.team_id
LEFT JOIN ucode_web.heroes_powers hp ON ht.hero_id = hp.hero_id
LEFT JOIN ucode_web.powers p ON hp.power_id = p.id
WHERE t.name IN ('Avengers', 'Hydra')
GROUP BY t.name
ORDER BY total_power;
