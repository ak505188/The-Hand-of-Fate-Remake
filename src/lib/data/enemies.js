const Enemies = [
  {
    area: "Bandit Cave",
    enemies: [
      { enemy: "Bat", steal: "Brown Herb (Common)", arn: 7 },
      { enemy: "Bandit (Axe)", steal: "Brown Herb (Common)", arn: 7 },
      { enemy: "Bandit (Bow)", steal: "Brown Herb (Common)", arn: 9 },
    ]
  },
  {
    area: "Helman Island Area",
    enemies: [
      { enemy: "Killer Hornet", steal: "Brown Herb (Common)", arn: 7 },
      { enemy: "Puddle", steal: "Brown Herb (Common)", drop: "Blue Drop", arn: 9 },
    ]
  },
  {
    area: "Harlinton Forest*",
    enemies: [
      { enemy: "Kirgard 4th", arn: 8 },
      { enemy: "Kirgard Sergeant", drop: "Copper Badge", arn: 14 },
    ]
  },
  {
    area: "Mayfall Area",
    enemies: [
      { enemy: "Green Viper", steal: "Brown Herb (Uncommon)", drop: "Muscleheal", arn: 8 },
      { enemy: "Grey Wolf", steal: "Brown Herb (Uncommon)", arn: 14 },
      { enemy: "Goblin", steal: "Goblin Helm (Rare)", drop: "Red Cinder", arn: 14 },
    ]
  },
  {
    area: "Matrech State Capital Area",
    enemies: [
      { enemy: "Grey Wolf", steal: "Brown Herb (Uncommon)", arn: 14 },
      { enemy: "Matrian Wolf", steal: "Vigour (Rare)", arn: 19 },
      { enemy: "Wandering Mage", steal: "Copper Ring (Uncommon)", drop: "Stone Amulet", arn: 48 },
    ]
  },
  {
    area: "Amen Corner: Deke's Mansion (Joe recruit quest only)",
    enemies: [
      { enemy: "Wood Soldier", steal: "Iron Bracer (Uncommon)", drop: "Copper Badge", arn: 22 },
      { enemy: "Surprise Box", steal: "Voice Box (Uncommon)", drop: "Copper Ring", arn: 29 },
    ]
  },
  {
    area: "Western Pass",
    enemies: [
      { enemy: "Matrian Wolf", steal: "Vigour (Rare)", arn: 19 },
      { enemy: "Orc", steal: "Brown Herb (Common)", drop: "Copper Badge", arn: 29 },
      { enemy: "Hill Orc", steal: "Steel Bracer (Rare)", drop: "Bronze Badge", arn: 31 },
      { enemy: "Mud Golem", steal: "Brown Herb (Uncommon)", arn: 0 },
      { enemy: "Hermit", steal: "Brown Clay (Uncommon)", arn: 84 },
    ]
  },
  {
    area: "Treasure Island",
    enemies: [
      { enemy: "Mantis", steal: "Brown Herb (Uncommon)", arn: 24 },
      { enemy: "Yellow Puddle", steal: "Balance (Uncommon)", drop: "Battery", arn: 32 },
      { enemy: "Forest Spirit", steal: "Silver Dust (Rare)", drop: "Mend", arn: 67 },
      { enemy: "Maneater", steal: "Brown Herb (Uncommon)", arn: 95 },
    ]
  },
  {
    area: "Credence Castle*",
    enemies: [
      { enemy: "Vampire Bat", steal: "Brown Herb (Common)", arn: 24 },
      { enemy: "Dead Knight", steal: "Hide Belt (Uncommon)", drop: "Brown Herb", arn: 33 },
      { enemy: "Zombie", steal: "Antidote (Common)", arn: 50 },
      { enemy: "Spectral Mage", steal: "Pointed Hat (Rare)", drop: "Black Ash", arn: 100 },
    ]
  },
  {
    area: "Highland Area",
    enemies: [
      { enemy: "Hill Orc", steal: "Steel Bracer (Rare)", drop: "Bronze Badge", arn: 31 },
      { enemy: "Minotaur", steal: "Brown Herb (Common)", arn: 70 },
      { enemy: "Ogre", steal: "Hard Boots (Uncommon)", arn: 155 },
    ]
  },
  {
    area: "Grunthall: Highland Mines",
    enemies: [
      { enemy: "Highlander", steal: "Brown Herb (Common)", drop: "Bronze Badge", arn: 45 },
      { enemy: "Highland Scout", steal: "Brown Herb (Common)", arn: 55 },
      { enemy: "Guard Tiger", steal: "Battery (Uncommon)", drop: "Battery", arn: 125 },
    ]
  },
  {
    area: "Grunthall: Mt. Bosch",
    enemies: [
      { enemy: "Wild Barbarian", steal: "Leather Belt (Uncommon)", arn: 55 },
      { enemy: "Minotaur", steal: "Brown Herb (Common)", arn: 70 },
      { enemy: "Ogre", steal: "Hard Boots (Uncommon)", arn: 155 },
    ]
  },
  {
    area: "Blackwater Port** (Shiro rescue mission only)",
    enemies: [
      { enemy: "Kirgard 2nd", steal: "Brown Herb (Common)", arn: 42 },
      { enemy: "Kirgard Sergeant", steal: "Icicle (Common)", drop: "Bronze Badge", arn: 145 },
    ]
  },
  {
    area: "Blackwater Port: Vault of the Mad King**",
    enemies: [
      { enemy: "Relic", steal: "White Ash (Uncommon)", drop: "Lightray", arn: 150 },
      { enemy: "Sentinel", steal: "Hide Belt (Common)", drop: "Steel Bracer", arn: 200 },
    ]
  },
  {
    area: "Mayfall City (Keyser occupation only)",
    enemies: [
      { enemy: "Kirgard 2nd", steal: "Brown Herb (Common)", arn: 42 },
      { enemy: "Kirgard Sergeant", steal: "Icicle (Common)", drop: "Bronze Badge", arn: 145 },
    ]
  },
  {
    area: "Mayfall Forest: Mist Maze",
    enemies: [
      { enemy: "Proto-Mist", steal: "Battery (Uncommon)", arn: 120 },
      { enemy: "Mist Monster", steal: "Lightning (Uncommon)", drop: "Lightning", arn: 235 },
    ]
  },
  {
    area: "Oischin Forest",
    enemies: [
      { enemy: "Black Cobra", steal: "Brown Herb (Common)", drop: "Neutralize", arn: 80 },
      { enemy: "Dragon Man", steal: "Splash (Common)", arn: 135 },
      { enemy: "Wood Berserker", steal: "Brown Herb (Common)", drop: "Bronze Badge", arn: 185 },
      { enemy: "Basilisk", steal: "Leather Belt (Common)", arn: 565 },
    ]
  },
  {
    area: "Oischin Area",
    enemies: [
      { enemy: "Dragon Man", steal: "Splash (Common)", arn: 135 },
      { enemy: "Wood Berserker", steal: "Brown Herb (Common)", drop: "Bronze Badge", arn: 185 },
      { enemy: "Devourer", steal: "Brown Herb (Common)", arn: 215 },
      { enemy: "Basilisk", steal: "Leather Belt (Common)", arn: 565 },
    ]
  },
  {
    area: "Elemental Mansion",
    enemies: [
      { enemy: "Deep Puddle**", steal: "Splash (Common)", drop: "Blue Drop", arn: 125 },
      { enemy: "Blue Elemental", steal: "Blue Drop (Common)", drop: "Marid Tear", arn: 205 },
      { enemy: "White Elemental", steal: "Ice Cube (Common)", drop: "Frost Shard", arn: 210 },
      { enemy: "Black Elemental", steal: "Black Ash (Common)", drop: "Charged Jet", arn: 215 },
    ]
  },
  {
    area: "Fading Dream",
    enemies: [
      { enemy: "Brain Leech", steal: "Enlight (Rare)", drop: "Memento", arn: 165 },
      { enemy: "Light Stalker", steal: "Mend-All (Uncommon)", drop: "Charged Pearl", arn: 320 },
      { enemy: "Lurker", steal: "Brown Herb (Common)", arn: 420 },
      { enemy: "Cathead", steal: "Fur Sandals (Rare)", drop: "Gold Dust", arn: 1250 },
    ]
  },
  {
    area: "Matrech State Capital: Courthouse** (Daniel rescue mission only)",
    enemies: [
      { enemy: "Matrech Soldier", arn: 100 },
      { enemy: "Matrech Corporal", drop: "Green Herb", arn: 330 },
    ]
  },
  {
    area: "Gaia's Heart",
    enemies: [
      { enemy: "Dire Spider", steal: "Brown Herb (Sommon)", arn: 245 },
      { enemy: "Belgugon", steal: "Balance (Uncommon)", drop: "Charged Jet", arn: 295 },
      { enemy: "Carrion Worm", steal: "Leather Belt (Common)", arn: 410 },
      { enemy: "Cave Troll", steal: "Green Herb (Rare)", drop: "Green Herb", arn: 1675 },
    ]
  },
  {
    area: "Lost City of Avalon",
    enemies: [
      { enemy: "Crusader", steal: "Brass Badge (Common)", arn: 485 },
      { enemy: "Templar", steal: "Photon Beam (Rare)", drop: "Chain Belt", arn: 700 },
      { enemy: "Enchanter", steal: "Charged Pearl (Uncommon)", drop: "Lightning Rod", arn: 595 },
      { enemy: "Unicorn", steal: "Mend-All (Common)", drop: "Gold Dust", arn: 1500 },
    ]
  },
  {
    area: "Kelsinger Pass",
    enemies: [
      { enemy: "Ogre Soldier", steal: "Brown Herb (Common)", arn: 500 },
      { enemy: "Orc Shaman", steal: "Quartz Amulet (Common)", drop: "Marid Tear", arn: 660 },
      { enemy: "Nightmare", steal: "Enlight (Uncommon)", arn: 1200 },
      { enemy: "Hill Giant", steal: "Brown Herb (Common)", drop: "Green Herb", arn: 2500 },
    ]
  },
  {
    area: "Matrech State Capital: Matrech Catacombs",
    enemies: [
      { enemy: "Matrech Knight*", steal: "Brown Herb (Common)", arn: 560 },
      { enemy: "Matrech Elite*", steal: "Steel Bracer (Common)", drop: "Green Herb", arn: 1050 },
      { enemy: "Sahagin", steal: "Waterfall (Rare)", drop: "Marid Tear", arn: 1100 },
      { enemy: "Land Shark", steal: "Gold Dust (Uncommon)", arn: 1550 },
    ]
  },
  {
    area: "Trarcia Area",
    enemies: [
      { enemy: "Land Shark", steal: "Gold Dust (Uncommon)", arn: 1550 },
      { enemy: "Azure Golem", steal: "Brown Herb (Common)", arn: 0 },
      { enemy: "Hoarder", steal: "Black Ruby (Common)", arn: 2600 },
    ]
  },
  {
    area: "Vishnu Citadel",
    enemies: [
      { enemy: "Tribal Warrior", steal: "Brown Herb (Common)", arn: 900 },
      { enemy: "Hunter", steal: "Green Herb (Uncommon)", arn: 1050 },
      { enemy: "Warlock", steal: "Quartz Amulet (Uncommon)", drop: "Marid Tear", arn: 1300 },
      { enemy: "Savak", steal: "Energy Drink (Common)", drop: "Darkstrike", arn: 2000 },
    ]
  },
  {
    area: "Magma Caverns",
    enemies: [
      { enemy: "Lava Bones", steal: "Brown Herb (Common)", drop: "Silver Dust", arn: 1215 },
      { enemy: "Hobgoblin", steal: "Long Boots (Common)", arn: 1450 },
      { enemy: "Imp", steal: "Brown Herb (Common)", arn: 1700 },
      { enemy: "Gargoyle", steal: "Gold Dust (Uncommon)", drop: "Mithril Bracer", arn: 2250 },
      { enemy: "Catoblepas", steal: "Watershield (Uncommon)", drop: "Charged Jet", arn: 5625 },
    ]
  },
  {
    area: "Shiva Passage*",
    enemies: [
      { enemy: "Almenga Soldier", steal: "Brown Herb (Common)", drop: "Silver Dust", arn: 1215 },
      { enemy: "Almenga Captain", steal: "Imperial Mail (Uncommon)", drop: "Green Herb", arn: 2150 },
      { enemy: "Almenga Summoner", steal: "Charged Jet (Uncommon)", drop: "Charged Jet", arn: 6400 },
      { enemy: "Pandora's Box", steal: "Menu Set #6 (Rare)", arn: 0 },
      { enemy: "Parasite", steal: "Restore (Uncommon)", drop: "Charged Pearl", arn: 1850 },
      { enemy: "Mountain Tiger", steal: "Brown Herb (Common)", arn: 2300 },
      { enemy: "Manticore", steal: "Nerveheal (Uncommon)", arn: 6750 },
    ]
  },
  {
    area: "St. Reinard Area",
    enemies: [
      { enemy: "Pandora's Box", steal: "Menu Set #6 (Rare)", arn: 0 },
      { enemy: "Green Wolf", steal: "Brown Herb (Common)", arn: 2000 },
      { enemy: "Mountain Tiger", steal: "Brown Herb (Common)", arn: 2300 },
    ]
  },
  {
    area: "Mt. Ea",
    enemies: [
      { enemy: "Earth Worm", steal: "Brown Herb (Common)", arn: 2250 },
      { enemy: "Paragon", steal: "Gold Dust (Uncommon)", drop: "Marid Tear", arn: 3600 },
      { enemy: "Deathgaze", steal: "Chain Belt (Uncommon)", drop: "Green Herb", arn: 6300 },
      { enemy: "Chimaera", steal: "Opal Amulet (Rare)", arn: 12000 },
    ]
  },
  {
    area: "Jinen Gama",
    enemies: [
      { enemy: "Black Death", steal: "Brown Herb (Common)", arn: 2600 },
      { enemy: "Brown Serpent", steal: "Muscleheal (Common)", arn: 3400 },
      { enemy: "Harpy", steal: "Velvet Scarf (Uncommon)", drop: "Gold Dust", arn: 3500 },
      { enemy: "Sand Shark", steal: "Brown Herb (Common)", arn: 8300 },
    ]
  },
  {
    area: "Jormundgand",
    enemies: [
      { enemy: "Flying Fish", steal: "Brown Herb (Common)", arn: 2175 },
      { enemy: "Drow Fairy", steal: "Balance (Common)", drop: "Cure", arn: 3100 },
      { enemy: "Needler Tortoise", steal: "Brown Herb (Common)", drop: "Mithril Bracer", arn: 4300 },
      { enemy: "Frost Giant", steal: "Frost Shard (Common)", drop: "Frost Shard", arn: 11250 },
    ]
  },
  {
    area: "Almenga: Midgard Plains Area",
    enemies: [
      { enemy: "Flying Fish", steal: "Brown Herb (Common)", arn: 2175 },
      { enemy: "Ice Wolf", steal: "Brown Herb (Common)", arn: 2250 },
      { enemy: "Snow Worm", steal: "Brown Herb (Common)", arn: 3500 },
    ]
  },
  {
    area: "Hall of Memories",
    enemies: [
      { enemy: "Stalker", steal: "Brown Herb (Common)", arn: 6500 },
      { enemy: "Merman", steal: "Brown Herb (Common)", arn: 7200 },
      { enemy: "Deep Spawn", steal: "Green Herb (Common)", arn: 10500 },
      { enemy: "Scylla", steal: "Nerveheal (Common)", arn: 14500 },
      { enemy: "Charybdis", steal: "Marid Tear (Uncommon)", drop: "Marid Tear", arn: 14500 },
      { enemy: "Black Cat", steal: "Silver Ring (Rare)", drop: "Gold Dust", arn: 24000 },
    ]
  },
  {
    area: "Nocturne Keep",
    enemies: [
      { enemy: "Ghoul", steal: "Brown Herb (Common)", arn: 4100 },
      { enemy: "Wraith", steal: "Brass Ring (Uncommon)", drop: "Charged Jet", arn: 6000 },
      { enemy: "Harbinger", steal: "Enlight (Common)", drop: "Gold Dust", arn: 7250 },
      { enemy: "Little Scarlet", steal: "Green Herb (Uncommon)", drop: "Opal Amulet", arn: 10000 },
    ]
  },
  {
    area: "Spiritual Plane",
    enemies: [
      { enemy: "Non-Euclidian Horror", steal: "Green Herb (Common)", arn: 8000 },
      { enemy: "Poltergeist", steal: "Charged Pearl (Uncommon)", drop: "Memento", arn: 10500 },
      { enemy: "Eyestalker", steal: "Green Herb (Common)", drop: "Gold Dust", arn: 11025 },
      { enemy: "Mara", steal: "Rainbow Ore (Rare)", arn: 36000 },
    ]
  },
  {
    area: "Shadow Clan",
    enemies: [
      { enemy: "Shadow Clan", steal: "Green Herb (Common)", arn: 5600 },
      { enemy: "Shadow Assassin", steal: "Gold Dust (Common)", arn: 12800 },
      { enemy: "Navar", steal: "Thunderstrike (Uncommon)", drop: "Darkstrike", arn: 16200 },
    ]
  },
  {
    area: "Almenga: Vanaheim Area",
    enemies: [
      { enemy: "Mustang", steal: "Green Herb (Common)", arn: 19000 },
      { enemy: "Snow Tortoise", steal: "Green Herb (Common)", drop: "Mithril Bracer", arn: 21150 },
      { enemy: "Thunderbeast", steal: "Blink (Rare)", arn: 40000 },
    ]
  },
  {
    area: "Vanaheim",
    enemies: [
      { enemy: "Almenga Elite (Axe)", steal: "Green Herb (Common)", arn: 7800 },
      { enemy: "Almenga Elite (Bow)", steal: "Green Herb (Common)", arn: 9450 },
      { enemy: "Almenga Colonel", steal: "Green Herb (Common)", drop: "Green Herb", arn: 11500 },
      { enemy: "Almenga General", steal: "Green Herb (Common)", drop: "Crystal Bracer", arn: 15000 },
      { enemy: "Grand Conjurer", steal: "Rainbow Ore (Uncommon)", drop: "Opal Amulet", arn: 40000 },
      { enemy: "Lightning Bolt", steal: "Lightning Rod (Common)", arn: 3000 },
      { enemy: "Dracoknight", steal: "Crystal Bracer (Rare)", drop: "Crystal Plate", arn: 50000 },
      { enemy: "Red Dracoknight", steal: "Crystal Orb (Rare)", drop: "Crystal Plate", arn: 52000 },
      { enemy: "Apocalypse", steal: "Balance (Common)", drop: "Darkstrike", arn: 63000 },
      { enemy: "Starshine", steal: "Gold Dust (Common)", arn: 0 },
      { enemy: "Sirius Lux", steal: "Heal (Uncommon)", drop: "Solar Flare", arn: 66000 },
    ]
  },
  {
    area: "Shadow Boss Areas",
    enemies: [
      { enemy: "Shadow Legionnaire", arn: 50000 },
    ]
  }
]

export default Enemies;
