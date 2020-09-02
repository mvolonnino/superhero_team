INSERT INTO heroes (name, hero_id, intel, strength, speed, durability, power, combat)
values ("Mattios", 999, 99, 99, 99, 99, 99, 99), 
("Edwardian Angel", 998, 97, 87, 93, 79, 42, 63), 
("Steven Slayer", 997, 90, 58, 60, 93, 83, 77);

INSERT INTO villain_intelligence 
    (name, hero_id, intel, strength, speed, durability, power, combat, total_power)
Values 
    ("Lex Luthor", 405, 100, 53, 25, 65, 68, 70, 381), 
    ("Doctor Doom", 222, 100, 32, 20, 100, 100, 84, 436), 
    ("Mister Freeze", 457, 75, 32, 12, 70, 37, 28, 254);

INSERT INTO villain_strength 
    (name, hero_id, intel, strength, speed, durability, power, combat, total_power)
Values 
    ("Juggernaut", 405, 44, 100, 42, 100, 85, 70, 441), 
    ("Abomination", 4, 63, 80, 53, 90, 62, 95, 443), 
    ("Doomsday", 230, 75, 100, 67, 100, 100, 90, 532);

INSERT INTO villain_speed 
    (name, hero_id, intel, strength, speed, durability, power, combat, total_power)
Values 
    ("Professor Zoom", 528, 94, 10, 100, 20, 83, 20, 317), 
    ("Carnage", 162, 63, 63, 70, 84, 88, 90, 458), 
    ("General Zod", 278, 94, 100, 96, 100, 100, 95, 585);

INSERT INTO villain_total 
    (name, hero_id, intel, strength, speed, durability, power, combat, total_power)
Values 
    ("Thanos", 655, 100, 100, 33, 100, 100, 80, 513), 
    ("Magneto", 423, 88, 80, 27, 84, 91, 80, 450), 
    ("Darkseid", 204, 88, 100, 83, 100, 100, 95, 566);