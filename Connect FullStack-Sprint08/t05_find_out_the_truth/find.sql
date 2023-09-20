SELECT h.id AS hero_id, h.name AS hero_name
FROM ucode_web.heroes h
JOIN ucode_web.heroes_teams ht ON h.id = ht.hero_id
JOIN ucode_web.teams t ON ht.team_id = t.id
LEFT JOIN ucode_web.heroes_powers hp ON h.id = hp.hero_id
LEFT JOIN ucode_web.powers p ON hp.power_id = p.id
JOIN ucode_web.races r ON h.race_id = r.id
WHERE h.id NOT IN (
    SELECT hero_id
    FROM ucode_web.heroes_teams
    GROUP BY hero_id
    HAVING COUNT(team_id) < 2
  )
  AND h.class_role IN ('tankman', 'healer')
  AND h.name LIKE '%a%'
  AND r.name != 'Human'
ORDER BY h.id
LIMIT 1;
