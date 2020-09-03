-- INSERT INTO heroes (name, hero_id, intel, strength, speed, durability, power, combat)
-- values ("Mattios", 999, 99, 99, 99, 99, 99, 99), 
-- ("Edwardian Angel", 998, 97, 87, 93, 79, 42, 63), 
-- ("Steven Slayer", 997, 90, 58, 60, 93, 83, 77);

INSERT INTO Villains
    (name, hero_id, intel, strength, speed, durability, power, combat, total_power, alignment, img_url, createdAt, updatedAt)
Values 
    ("Lex Luthor", 405, 100, 53, 25, 65, 68, 70, 381, "bad", "https://www.superherodb.com/pictures2/portraits/10/100/727.jpg", curdate(), curdate()), 
    ("Doctor Doom", 222, 100, 32, 20, 100, 100, 84, 436, "bad", "https://www.superherodb.com/pictures2/portraits/10/100/189.jpg", curdate(), curdate()), 
    ("Mister Freeze", 457, 75, 32, 12, 70, 37, 28, 254, "bad", "https://www.superherodb.com/pictures2/portraits/10/100/742.jpg", curdate(), curdate()),
    ("Juggernaut", 374, 44, 100, 42, 100, 85, 70, 441, "bad", "https://www.superherodb.com/pictures2/portraits/10/100/826.jpg", curdate(), curdate()), 
    ("Abomination", 4, 63, 80, 53, 90, 62, 95, 443, "bad", "https://www.superherodb.com/pictures2/portraits/10/100/1.jpg", curdate(), curdate()), 
    ("Doomsday", 230, 75, 100, 67, 100, 100, 90, 532, "bad", "https://www.superherodb.com/pictures2/portraits/10/100/679.jpg", curdate(), curdate()),
    ("Professor Zoom", 528, 94, 10, 100, 20, 83, 20, 317, "bad", "https://www.superherodb.com/pictures2/portraits/10/100/766.jpg", curdate(), curdate()), 
    ("Carnage", 162, 63, 63, 70, 84, 88, 90, 458, "bad", "https://www.superherodb.com/pictures2/portraits/10/100/187.jpg", curdate(), curdate()), 
    ("General Zod", 278, 94, 100, 96, 100, 100, 95, 585, "bad", "https://www.superherodb.com/pictures2/portraits/10/100/837.jpg", curdate(), curdate()),
    ("Thanos", 655, 100, 100, 33, 100, 100, 80, 513, "bad", "https://www.superherodb.com/pictures2/portraits/10/100/1305.jpg", curdate(), curdate()), 
    ("Magneto", 423, 88, 80, 27, 84, 91, 80, 450, "bad", "https://www.superherodb.com/pictures2/portraits/10/100/12.jpg", curdate(), curdate()), 
    ("Darkseid", 204, 88, 100, 83, 100, 100, 95, 566, "bad","https://www.superherodb.com/pictures2/portraits/10/100/668.jpg", curdate(), curdate()),
    ("Loki", 414, 88, 63, 46, 85, 100, 60, 442, "bad", "https://www.superherodb.com/pictures2/portraits/10/100/928.jpg", curdate(), curdate()),
    ("Kingpin", 391, 75, 18, 25, 40, 13, 70, 241, "bad", "https://www.superherodb.com/pictures2/portraits/10/100/623.jpg", curdate(), curdate()),
    ("Green Goblin", 299, 100, 48, 38, 60, 48, 50, 344, "bad", "https://www.superherodb.com/pictures2/portraits/10/100/25.jpg", curdate(), curdate()),
    ("Red Skull", 550, 75, 10, 12, 14, 19, 80, 210, "bad", "https://www.superherodb.com/pictures2/portraits/10/100/1392.jpg", curdate(), curdate()),
    ("Black Adam", 95, 88, 100, 92, 100, 100, 56, 536, "bad", "https://www.superherodb.com/pictures2/portraits/10/100/643.jpg", curdate(), curdate()),
    ("Brainiac", 136, 100, 95, 63, 90, 60, 75, 483, "bad", "https://www.superherodb.com/pictures2/portraits/10/100/648.jpg", curdate(), curdate()),
    ("Venom", 687, 75, 57, 65, 84, 86, 84, 451, "bad", "https://www.superherodb.com/pictures2/portraits/10/100/22.jpg", curdate(), curdate()),
    ("Ultron", 680, 88, 83, 42, 100, 100, 64, 477, "bad", "https://www.superherodb.com/pictures2/portraits/10/100/1339.jpg", curdate(), curdate()),
    ("Apocalypse", 35, 100, 100, 33, 100, 100, 60, 493, "bad", "https://www.superherodb.com/pictures2/portraits/10/100/852.jpg", curdate(), curdate()),
    ("Doctor Octopus", 225, 94, 48, 33, 40, 53, 65, 333, "bad", "https://www.superherodb.com/pictures2/portraits/10/100/622.jpg", curdate(), curdate()),
    ("Sabretooth", 570, 56, 48, 38, 90, 50, 100, 382, "bad", "https://www.superherodb.com/pictures2/portraits/10/100/17.jpg", curdate(), curdate()),
    ("Harley Quinn", 309, 88, 12, 33, 65, 55, 80, 333, "bad","https://www.superherodb.com/pictures2/portraits/10/100/701.jpg", curdate(), curdate() ),
    ("Riddler", 558, 100, 10, 12, 14, 10, 14, 160, "bad", "https://www.superherodb.com/pictures2/portraits/10/100/768.jpg", curdate(), curdate()),
    ("Mysterio", 479, 81, 10, 17, 40, 82, 70, 300, "bad", "https://www.superherodb.com/pictures2/portraits/10/100/1039.jpg", curdate(), curdate()),
    ("Galactus", 273, 100, 100, 83, 100, 100, 50, 533, "bad", "https://www.superherodb.com/pictures2/portraits/10/100/862.jpg", curdate(), curdate()),
    ("Ras Al Ghul", 538, 100, 28, 32, 42, 27, 100, 329, "bad", "https://www.superherodb.com/pictures2/portraits/10/100/761.jpg", curdate(), curdate()),
    ("Ozymandias", 508, 100, 18, 33, 20, 49, 95, 315, "bad", "https://www.superherodb.com/pictures2/portraits/10/100/1063.jpg", curdate(), curdate()),
    ("Bizarro", 93, 38, 95, 100, 100, 100, 85, 518, "bad", "https://www.superherodb.com/pictures2/portraits/10/100/642.jpg", curdate(), curdate()),
    ("Evil Chuck Norris", 176, 50, 80, 47, 56, 42, 99, 374, "bad", "https://www.superherodb.com/pictures2/portraits/10/100/954.jpg", curdate(), curdate())
