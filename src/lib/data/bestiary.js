export const Bestiary = [
  {
    Name: 'Bandit (Axe)',
    Element: 'Dark',
    HP: 100,
    LVL: 3,
    Stats: {
      Base: {
        L: 3.95,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 14,
      MAG: 19,
      PDF: 19,
      MDF: 16,
      SPD: 15,
      ACC: 14,
      DEX: 17
    },
    Arn: 7,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 1, 2 ]
  },
  {
    Name: 'Bandit (Bow)',
    Element: 'Dark',
    HP: 80,
    LVL: 3,
    Stats: {
      Base: {
        L: 3.95,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 13,
      MAG: 19,
      PDF: 16,
      MDF: 16,
      SPD: 14,
      ACC: 15,
      DEX: 16
    },
    Arn: 9,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 1, 2 ]
  },
  {
    Name: 'Bat',
    Element: 'Ice',
    HP: 170,
    LVL: 4,
    Stats: {
      Base: {
        L: 4.09,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 15,
      MAG: 18,
      PDF: 17,
      MDF: 18,
      SPD: 16,
      ACC: 12,
      DEX: 20
    },
    Arn: 7,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 1, 2 ]
  },
  {
    Name: 'Bandit Lord',
    Element: 'Dark',
    HP: 450,
    LVL: 7,
    Stats: {
      Base: {
        L: 4.53,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 18,
      MAG: 22,
      PDF: 22,
      MDF: 16,
      SPD: 19,
      ACC: 20,
      DEX: 20
    },
    Arn: 53,
    Drop: null,
    Steal: null,
    Type: 'Boss',
    Available: [ 1, 2 ]
  },
  {
    Name: 'Killer Hornet',
    Element: 'Lightning',
    HP: 40,
    LVL: 3,
    Stats: {
      Base: {
        L: 3.95,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 13,
      MAG: 17,
      PDF: 16,
      MDF: 17,
      SPD: 21,
      ACC: 14,
      DEX: 21
    },
    Arn: 7,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 1, 2 ]
  },
  {
    Name: 'Spider',
    Element: 'Dark',
    HP: 120,
    LVL: 4,
    Stats: {
      Base: {
        L: 4.09,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 14,
      MAG: 20,
      PDF: 18,
      MDF: 17,
      SPD: 15,
      ACC: 15,
      DEX: 16
    },
    Arn: 12,
    Drop: { Rate: 0.12, Item: 'Brown Herb' },
    Steal: { Rate: 0.5, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 1, 2 ]
  },
  {
    Name: 'Puddle',
    Element: 'Water',
    HP: 25,
    LVL: 5,
    Stats: {
      Base: {
        L: 4.23,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 14,
      MAG: 14,
      PDF: 38,
      MDF: 0,
      SPD: 15,
      ACC: 15,
      DEX: 12
    },
    Arn: 9,
    Drop: { Rate: 0.8, Item: 'Blue Drop' },
    Steal: { Rate: 0.5, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 1, 2 ]
  },
  {
    Name: 'Kirgard 4th',
    Element: 'Lightning',
    HP: 48,
    LVL: 5,
    Stats: {
      Base: {
        L: 4.23,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 13,
      MAG: 21,
      PDF: 19,
      MDF: 17,
      SPD: 16,
      ACC: 14,
      DEX: 19
    },
    Arn: 8,
    Drop: null,
    Steal: null,
    Type: 'Enemy',
    Available: [ 1, 2 ]
  },
  {
    Name: 'Kirgard Sergeant',
    Element: 'Light',
    HP: 80,
    LVL: 6,
    Stats: {
      Base: {
        L: 4.38,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 16,
      MAG: 21,
      PDF: 22,
      MDF: 19,
      SPD: 17,
      ACC: 17,
      DEX: 19
    },
    Arn: 14,
    Drop: { Rate: 0.15, Item: 'Copper Badge' },
    Steal: null,
    Type: 'Enemy',
    Available: [ 1, 2 ]
  },
  {
    Name: 'Green Viper',
    Element: 'Lightning',
    HP: 80,
    LVL: 5,
    Stats: {
      Base: {
        L: 4.23,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 14,
      MAG: 14,
      PDF: 18,
      MDF: 18,
      SPD: 19,
      ACC: 16,
      DEX: 16
    },
    Arn: 8,
    Drop: { Rate: 0.2, Item: 'Muscleheal' },
    Steal: { Rate: 0.25, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 1, 2 ]
  },
  {
    Name: 'Goblin',
    Element: 'Fire',
    HP: 90,
    LVL: 6,
    Stats: {
      Base: {
        L: 4.38,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 16,
      MAG: 10,
      PDF: 22,
      MDF: 18,
      SPD: 16,
      ACC: 17,
      DEX: 16
    },
    Arn: 14,
    Drop: { Rate: 0.5, Item: 'Red Cinder' },
    Steal: { Rate: 0.12, Item: 'Goblin Helm' },
    Type: 'Enemy',
    Available: [ 1, 2 ]
  },
  {
    Name: 'Grey Wolf',
    Element: 'Fire',
    HP: 130,
    LVL: 7,
    Stats: {
      Base: {
        L: 4.53,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 18,
      MAG: 11,
      PDF: 19,
      MDF: 20,
      SPD: 18,
      ACC: 20,
      DEX: 20
    },
    Arn: 14,
    Drop: null,
    Steal: { Rate: 0.25, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 1, 2 ]
  },
  {
    Name: 'Lizardman',
    Element: 'Water',
    HP: 60,
    LVL: 7,
    Stats: {
      Base: {
        L: 4.53,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 14,
      MAG: 11,
      PDF: 18,
      MDF: 21,
      SPD: 16,
      ACC: 19,
      DEX: 19
    },
    Arn: 12,
    Drop: null,
    Steal: { Rate: 0.25, Item: 'Blue Robe' },
    Type: 'Enemy',
    Available: [ 1, 2 ]
  },
  {
    Name: 'Orc',
    Element: 'Lightning',
    HP: 180,
    LVL: 8,
    Stats: {
      Base: {
        L: 4.69,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 21,
      MAG: 11,
      PDF: 26,
      MDF: 18,
      SPD: 14,
      ACC: 18,
      DEX: 18
    },
    Arn: 29,
    Drop: { Rate: 0.1, Item: 'Copper Badge' },
    Steal: { Rate: 0.5, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 1, 2 ]
  },
  {
    Name: 'Mist Monster',
    Element: 'Lightning',
    HP: 500,
    LVL: 12,
    Stats: {
      Base: {
        L: 5.38,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 23,
      MAG: 18,
      PDF: 18,
      MDF: 22,
      SPD: 28,
      ACC: 22,
      DEX: 24
    },
    Arn: 250,
    Drop: { Rate: 0.1, Item: 'Lightning' },
    Steal: null,
    Type: 'Boss',
    Available: [ 1, 2 ]
  },
  {
    Name: 'Matrian Wolf',
    Element: 'Fire',
    HP: 130,
    LVL: 8,
    Stats: {
      Base: {
        L: 4.69,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 18,
      MAG: 11,
      PDF: 19,
      MDF: 21,
      SPD: 18,
      ACC: 21,
      DEX: 21
    },
    Arn: 19,
    Drop: null,
    Steal: { Rate: 0.12, Item: 'Vigour' },
    Type: 'Enemy',
    Available: [ 1, 2 ]
  },
  {
    Name: 'Wandering Mage',
    Element: 'Dark',
    HP: 225,
    LVL: 9,
    Stats: {
      Base: {
        L: 4.86,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 13,
      MAG: 15,
      PDF: 16,
      MDF: 25,
      SPD: 18,
      ACC: 16,
      DEX: 21
    },
    Arn: 48,
    Drop: { Rate: 0.5, Item: 'Stone Amulet' },
    Steal: { Rate: 0.25, Item: 'Copper Ring' },
    Type: 'Enemy',
    Available: [ 1, 2 ]
  },
  {
    Name: 'Wood Soldier',
    Element: 'Dark',
    HP: 80,
    LVL: 8,
    Stats: {
      Base: {
        L: 4.69,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 18,
      MAG: 11,
      PDF: 22,
      MDF: 19,
      SPD: 16,
      ACC: 20,
      DEX: 18
    },
    Arn: 22,
    Drop: { Rate: 0.1, Item: 'Copper Badge' },
    Steal: { Rate: 0.25, Item: 'Iron Bracer' },
    Type: 'Enemy',
    Available: [ 3 ]
  },
  {
    Name: 'Surprise Box',
    Element: 'Ice',
    HP: 100,
    LVL: 9,
    Stats: {
      Base: {
        L: 4.86,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 16,
      MAG: 16,
      PDF: 18,
      MDF: 27,
      SPD: 17,
      ACC: 19,
      DEX: 14
    },
    Arn: 29,
    Drop: { Rate: 0.15, Item: 'Copper Ring' },
    Steal: { Rate: 0.5, Item: 'Voice Box' },
    Type: 'Enemy',
    Available: [ 3 ]
  },
  {
    Name: 'Hermit',
    Element: 'Dark',
    HP: 300,
    LVL: 11,
    Stats: {
      Base: {
        L: 5.2,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 15,
      MAG: 17,
      PDF: 19,
      MDF: 29,
      SPD: 21,
      ACC: 18,
      DEX: 20
    },
    Arn: 84,
    Drop: null,
    Steal: { Rate: 0.25, Item: 'Brown Clay' },
    Type: 'Enemy',
    Available: [ 3 ]
  },
  {
    Name: 'Mud Golem',
    Element: 'Water',
    HP: 125,
    LVL: 9,
    Stats: {
      Base: {
        L: 4.86,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 23,
      MAG: 12,
      PDF: 29,
      MDF: 19,
      SPD: 13,
      ACC: 19,
      DEX: 14
    },
    Arn: 0,
    Drop: null,
    Steal: { Rate: 0.25, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 3 ]
  },
  {
    Name: 'Hill Orc',
    Element: 'Fire',
    HP: 250,
    LVL: 10,
    Stats: {
      Base: {
        L: 5.03,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 22,
      MAG: 12,
      PDF: 28,
      MDF: 20,
      SPD: 15,
      ACC: 20,
      DEX: 20
    },
    Arn: 31,
    Drop: { Rate: 0.5, Item: 'Bronze Badge' },
    Steal: { Rate: 0.12, Item: 'Steel Bracer' },
    Type: 'Enemy',
    Available: [ 3 ]
  },
  {
    Name: 'Yellow Puddle',
    Element: 'Lightning',
    HP: 80,
    LVL: 11,
    Stats: {
      Base: {
        L: 5.2,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 19,
      MAG: 20,
      PDF: 52,
      MDF: 0,
      SPD: 22,
      ACC: 20,
      DEX: 16
    },
    Arn: 32,
    Drop: { Rate: 0.1, Item: 'Battery' },
    Steal: { Rate: 0.25, Item: 'Balance' },
    Type: 'Enemy',
    Available: [ 3 ]
  },
  {
    Name: 'Mantis',
    Element: 'Water',
    HP: 150,
    LVL: 10,
    Stats: {
      Base: {
        L: 5.03,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 21,
      MAG: 12,
      PDF: 21,
      MDF: 21,
      SPD: 26,
      ACC: 26,
      DEX: 23
    },
    Arn: 24,
    Drop: null,
    Steal: { Rate: 0.25, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 3 ]
  },
  {
    Name: 'Forest Spirit',
    Element: 'Light',
    HP: 200,
    LVL: 13,
    Stats: {
      Base: {
        L: 5.57,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 18,
      MAG: 25,
      PDF: 21,
      MDF: 26,
      SPD: 22,
      ACC: 21,
      DEX: 32
    },
    Arn: 67,
    Drop: { Rate: 0.5, Item: 'Mend' },
    Steal: { Rate: 0.12, Item: 'Silver Dust' },
    Type: 'Enemy',
    Available: [ 3 ]
  },
  {
    Name: 'Maneater',
    Element: 'Dark',
    HP: 375,
    LVL: 14,
    Stats: {
      Base: {
        L: 5.77,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 37,
      MAG: 14,
      PDF: 27,
      MDF: 23,
      SPD: 25,
      ACC: 21,
      DEX: 21
    },
    Arn: 95,
    Drop: null,
    Steal: { Rate: 0.25, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 3 ]
  },
  {
    Name: 'Bruce',
    Element: 'Fire',
    HP: 725,
    LVL: 19,
    Stats: {
      Base: {
        L: 6.85,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 34,
      MAG: 27,
      PDF: 29,
      MDF: 28,
      SPD: 30,
      ACC: 27,
      DEX: 27
    },
    Arn: 0,
    Drop: { Rate: 0.1, Item: 'Hard Boots' },
    Steal: { Rate: 0.5, Item: 'Bronze Badge' },
    Type: 'Boss',
    Available: [ 3 ]
  },
  {
    Name: 'Kirgard 2nd',
    Element: 'Ice',
    HP: 120,
    LVL: 13,
    Stats: {
      Base: {
        L: 5.57,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 20,
      MAG: 22,
      PDF: 25,
      MDF: 23,
      SPD: 23,
      ACC: 23,
      DEX: 25
    },
    Arn: 0,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 3 ]
  },
  {
    Name: 'Vampire Bat',
    Element: 'Dark',
    HP: 180,
    LVL: 14,
    Stats: {
      Base: {
        L: 5.77,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 22,
      MAG: 23,
      PDF: 24,
      MDF: 25,
      SPD: 30,
      ACC: 27,
      DEX: 34
    },
    Arn: 24,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 3 ]
  },
  {
    Name: 'Dead Knight',
    Element: 'Dark',
    HP: 200,
    LVL: 15,
    Stats: {
      Base: {
        L: 5.97,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 22,
      MAG: 23,
      PDF: 28,
      MDF: 25,
      SPD: 28,
      ACC: 26,
      DEX: 26
    },
    Arn: 33,
    Drop: { Rate: 0.8, Item: 'Brown Herb' },
    Steal: { Rate: 0.25, Item: 'Hide Belt' },
    Type: 'Enemy',
    Available: [ 3 ]
  },
  {
    Name: 'Zombie',
    Element: 'Dark',
    HP: 400,
    LVL: 17,
    Stats: {
      Base: {
        L: 6.39,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 41,
      MAG: 15,
      PDF: 25,
      MDF: 25,
      SPD: 26,
      ACC: 23,
      DEX: 23
    },
    Arn: 50,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Antidote' },
    Type: 'Enemy',
    Available: [ 3 ]
  },
  {
    Name: 'Spectral Mage',
    Element: 'Dark',
    HP: 250,
    LVL: 18,
    Stats: {
      Base: {
        L: 6.62,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 18,
      MAG: 29,
      PDF: 23,
      MDF: 34,
      SPD: 25,
      ACC: 23,
      DEX: 29
    },
    Arn: 100,
    Drop: { Rate: 0.5, Item: 'Black Ash' },
    Steal: { Rate: 0.12, Item: 'Pointed Hat' },
    Type: 'Enemy',
    Available: [ 3 ]
  },
  {
    Name: 'Minotaur',
    Element: 'Fire',
    HP: 380,
    LVL: 17,
    Stats: {
      Base: {
        L: 6.39,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 35,
      MAG: 15,
      PDF: 30,
      MDF: 26,
      SPD: 30,
      ACC: 31,
      DEX: 28
    },
    Arn: 70,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 4 ]
  },
  {
    Name: 'Ogre',
    Element: 'Dark',
    HP: 600,
    LVL: 20,
    Stats: {
      Base: {
        L: 7.09,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 54,
      MAG: 17,
      PDF: 39,
      MDF: 36,
      SPD: 34,
      ACC: 33,
      DEX: 27
    },
    Arn: 155,
    Drop: null,
    Steal: { Rate: 0.25, Item: 'Hard Boots' },
    Type: 'Enemy',
    Available: [ 4 ]
  },
  {
    Name: 'Wild Barbarian',
    Element: 'Fire',
    HP: 450,
    LVL: 19,
    Stats: {
      Base: {
        L: 6.85,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 46,
      MAG: 17,
      PDF: 29,
      MDF: 23,
      SPD: 30,
      ACC: 27,
      DEX: 27
    },
    Arn: 55,
    Drop: null,
    Steal: { Rate: 0.25, Item: 'Leather Belt' },
    Type: 'Enemy',
    Available: [ 4 ]
  },
  {
    Name: 'Highlander',
    Element: 'Ice',
    HP: 140,
    LVL: 19,
    Stats: {
      Base: {
        L: 6.85,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 27,
      MAG: 27,
      PDF: 29,
      MDF: 27,
      SPD: 30,
      ACC: 30,
      DEX: 30
    },
    Arn: 45,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 4 ]
  },
  {
    Name: 'Highland Scout',
    Element: 'Light',
    HP: 90,
    LVL: 20,
    Stats: {
      Base: {
        L: 7.09,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 26,
      MAG: 28,
      PDF: 28,
      MDF: 30,
      SPD: 29,
      ACC: 35,
      DEX: 28
    },
    Arn: 55,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 4 ]
  },
  {
    Name: 'Guard Tiger',
    Element: 'Lightning',
    HP: 480,
    LVL: 22,
    Stats: {
      Base: {
        L: 7.59,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 53,
      MAG: 18,
      PDF: 36,
      MDF: 33,
      SPD: 31,
      ACC: 34,
      DEX: 32
    },
    Arn: 125,
    Drop: { Rate: 0.8, Item: 'Battery' },
    Steal: { Rate: 0.25, Item: 'Battery' },
    Type: 'Enemy',
    Available: [ 4 ]
  },
  {
    Name: 'Joshua',
    Element: 'Water',
    HP: 1000,
    LVL: 25,
    Stats: {
      Base: {
        L: 8.42,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 66,
      MAG: 23,
      PDF: 42,
      MDF: 35,
      SPD: 47,
      ACC: 38,
      DEX: 34
    },
    Arn: 1000,
    Drop: { Rate: 0.1, Item: 'Green Bandana' },
    Steal: { Rate: 0.5, Item: 'Waterfall' },
    Type: 'Boss',
    Available: [ 4 ]
  },
  {
    Name: 'Ninja',
    Element: 'Water',
    HP: 200,
    LVL: 22,
    Stats: {
      Base: {
        L: 7.59,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 26,
      MAG: 30,
      PDF: 33,
      MDF: 30,
      SPD: 46,
      ACC: 35,
      DEX: 40
    },
    Arn: 0,
    Drop: null,
    Steal: null,
    Type: 'Boss',
    Available: [ 4 ]
  },
  {
    Name: 'Trevor',
    Element: 'Dark',
    HP: 600,
    LVL: 24,
    Stats: {
      Base: {
        L: 8.14,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 58,
      MAG: 30,
      PDF: 45,
      MDF: 38,
      SPD: 38,
      ACC: 44,
      DEX: 36
    },
    Arn: 700,
    Drop: { Rate: 0.1, Item: 'Shadowcast' },
    Steal: { Rate: 0.5, Item: 'Black Kirgard' },
    Type: 'Boss',
    Available: [ 4 ]
  },
  {
    Name: 'Sick',
    Element: 'Light',
    HP: 500,
    LVL: 23,
    Stats: {
      Base: {
        L: 7.86,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 51,
      MAG: 35,
      PDF: 34,
      MDF: 48,
      SPD: 45,
      ACC: 39,
      DEX: 41
    },
    Arn: 500,
    Drop: { Rate: 0.1, Item: 'Lightray' },
    Steal: { Rate: 0.5, Item: 'Mend-All' },
    Type: 'Boss',
    Available: [ 4 ]
  },
  {
    Name: 'Mist Monster',
    Element: 'Lightning',
    HP: 600,
    LVL: 26,
    Stats: {
      Base: {
        L: 8.72,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 54,
      MAG: 43,
      PDF: 28,
      MDF: 34,
      SPD: 43,
      ACC: 43,
      DEX: 39
    },
    Arn: 235,
    Drop: { Rate: 0.7, Item: 'Lightning' },
    Steal: { Rate: 0.25, Item: 'Lightning' },
    Type: 'Enemy',
    Available: [ 4 ]
  },
  {
    Name: 'Proto-Mist',
    Element: 'Lightning',
    HP: 380,
    LVL: 24,
    Stats: {
      Base: {
        L: 8.14,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 48,
      MAG: 38,
      PDF: 25,
      MDF: 31,
      SPD: 39,
      ACC: 39,
      DEX: 35
    },
    Arn: 120,
    Drop: null,
    Steal: { Rate: 0.25, Item: 'Battery' },
    Type: 'Enemy',
    Available: [ 4 ]
  },
  {
    Name: 'Mist Queen',
    Element: 'Lightning',
    HP: 1200,
    LVL: 34,
    Stats: {
      Base: {
        L: 11.48,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 75,
      MAG: 51,
      PDF: 49,
      MDF: 71,
      SPD: 67,
      ACC: 57,
      DEX: 57
    },
    Arn: 2200,
    Drop: { Rate: 0.1, Item: 'Thunderbolt' },
    Steal: { Rate: 0.5, Item: 'Gold Dust' },
    Type: 'Boss',
    Available: [ 4 ]
  },
  {
    Name: 'Kirgard 2nd',
    Element: 'Water',
    HP: 150,
    LVL: 21,
    Stats: {
      Base: {
        L: 7.34,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 30,
      MAG: 22,
      PDF: 34,
      MDF: 32,
      SPD: 36,
      ACC: 33,
      DEX: 34
    },
    Arn: 42,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 4 ]
  },
  {
    Name: 'Kirgard Sergeant',
    Element: 'Ice',
    HP: 210,
    LVL: 22,
    Stats: {
      Base: {
        L: 7.59,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 36,
      MAG: 30,
      PDF: 37,
      MDF: 34,
      SPD: 36,
      ACC: 36,
      DEX: 37
    },
    Arn: 145,
    Drop: { Rate: 0.5, Item: 'Bronze Badge' },
    Steal: { Rate: 0.5, Item: 'Icicle' },
    Type: 'Enemy',
    Available: [ 4 ]
  },
  {
    Name: 'Kirgard Captain',
    Element: 'Lightning',
    HP: 1150,
    LVL: 26,
    Stats: {
      Base: {
        L: 8.72,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 50,
      MAG: 34,
      PDF: 43,
      MDF: 39,
      SPD: 45,
      ACC: 41,
      DEX: 43
    },
    Arn: 1500,
    Drop: { Rate: 0.1, Item: 'Leather Belt' },
    Steal: { Rate: 0.25, Item: 'Silver Helmet' },
    Type: 'Boss',
    Available: [ 4 ]
  },
  {
    Name: 'Relic',
    Element: 'Light',
    HP: 300,
    LVL: 22,
    Stats: {
      Base: {
        L: 7.59,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 28,
      MAG: 33,
      PDF: 29,
      MDF: 58,
      SPD: 31,
      ACC: 30,
      DEX: 24
    },
    Arn: 150,
    Drop: { Rate: 0.1, Item: 'Lightray' },
    Steal: { Rate: 0.25, Item: 'White Ash' },
    Type: 'Enemy',
    Available: [ 4 ]
  },
  {
    Name: 'Sentinel',
    Element: 'Dark',
    HP: 350,
    LVL: 23,
    Stats: {
      Base: {
        L: 7.86,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 53,
      MAG: 19,
      PDF: 55,
      MDF: 33,
      SPD: 34,
      ACC: 37,
      DEX: 31
    },
    Arn: 200,
    Drop: { Rate: 0.8, Item: 'Steel Bracer' },
    Steal: { Rate: 0.5, Item: 'Hide Belt' },
    Type: 'Enemy',
    Available: [ 4 ]
  },
  {
    Name: 'Keyser',
    Element: 'Water',
    HP: 1150,
    LVL: 30,
    Stats: {
      Base: {
        L: 10,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 70,
      MAG: 50,
      PDF: 62,
      MDF: 42,
      SPD: 40,
      ACC: 47,
      DEX: 40
    },
    Arn: 2500,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Mithril Bracer' },
    Type: 'Boss',
    Available: [ 4 ]
  },
  {
    Name: 'Iron Golem',
    Element: 'Ice',
    HP: 1800,
    LVL: 31,
    Stats: {
      Base: {
        L: 10.35,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 85,
      MAG: 25,
      PDF: 103,
      MDF: 23,
      SPD: 33,
      ACC: 43,
      DEX: 33
    },
    Arn: 0,
    Drop: { Rate: 0.1, Item: 'Frostwave' },
    Steal: { Rate: 0.5, Item: 'Granite Mail' },
    Type: 'Boss',
    Available: [ 5 ]
  },
  {
    Name: 'Black Cobra',
    Element: 'Dark',
    HP: 200,
    LVL: 25,
    Stats: {
      Base: {
        L: 8.42,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 38,
      MAG: 29,
      PDF: 36,
      MDF: 36,
      SPD: 51,
      ACC: 42,
      DEX: 44
    },
    Arn: 80,
    Drop: { Rate: 0.4, Item: 'Neutralize' },
    Steal: { Rate: 0.5, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 5 ]
  },
  {
    Name: 'Dragon Man',
    Element: 'Water',
    HP: 210,
    LVL: 26,
    Stats: {
      Base: {
        L: 8.72,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 43,
      MAG: 47,
      PDF: 34,
      MDF: 54,
      SPD: 35,
      ACC: 45,
      DEX: 39
    },
    Arn: 135,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Splash' },
    Type: 'Enemy',
    Available: [ 5 ]
  },
  {
    Name: 'Wood Berserker',
    Element: 'Water',
    HP: 650,
    LVL: 27,
    Stats: {
      Base: {
        L: 9.02,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 65,
      MAG: 22,
      PDF: 41,
      MDF: 31,
      SPD: 41,
      ACC: 38,
      DEX: 36
    },
    Arn: 185,
    Drop: { Rate: 0.5, Item: 'Bronze Badge' },
    Steal: { Rate: 0.5, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 5 ]
  },
  {
    Name: 'Basilisk',
    Element: 'Fire',
    HP: 1000,
    LVL: 29,
    Stats: {
      Base: {
        L: 9.66,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 74,
      MAG: 48,
      PDF: 43,
      MDF: 45,
      SPD: 40,
      ACC: 43,
      DEX: 39
    },
    Arn: 565,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Leather Belt' },
    Type: 'Enemy',
    Available: [ 5 ]
  },
  {
    Name: 'Frostmonger',
    Element: 'Ice',
    HP: 1200,
    LVL: 34,
    Stats: {
      Base: {
        L: 11.48,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 86,
      MAG: 51,
      PDF: 49,
      MDF: 71,
      SPD: 67,
      ACC: 53,
      DEX: 47
    },
    Arn: 2400,
    Drop: { Rate: 0.1, Item: 'Frost Shard' },
    Steal: { Rate: 0.5, Item: 'Brigandine' },
    Type: 'Boss',
    Available: [ 5 ]
  },
  {
    Name: 'Devourer',
    Element: 'Dark',
    HP: 375,
    LVL: 28,
    Stats: {
      Base: {
        L: 9.34,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 60,
      MAG: 23,
      PDF: 44,
      MDF: 37,
      SPD: 42,
      ACC: 35,
      DEX: 35
    },
    Arn: 215,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 5 ]
  },
  {
    Name: 'Almenga Soldier',
    Element: 'Ice',
    HP: 95,
    LVL: 1,
    Stats: {
      Base: {
        L: 3.69,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 13,
      MAG: 18,
      PDF: 18,
      MDF: 15,
      SPD: 13,
      ACC: 13,
      DEX: 16
    },
    Arn: 0,
    Drop: null,
    Steal: null,
    Type: 'Enemy',
    Available: [ 5 ]
  },
  {
    Name: 'Blue Elemental',
    Element: 'Water',
    HP: 300,
    LVL: 30,
    Stats: {
      Base: {
        L: 10,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 37,
      MAG: 60,
      PDF: 40,
      MDF: 65,
      SPD: 46,
      ACC: 40,
      DEX: 45
    },
    Arn: 205,
    Drop: { Rate: 0.3, Item: 'Blue Drop' },
    Steal: { Rate: 0.5, Item: 'Blue Drop' },
    Type: 'Enemy',
    Available: [ 5 ]
  },
  {
    Name: 'White Elemental',
    Element: 'Ice',
    HP: 300,
    LVL: 30,
    Stats: {
      Base: {
        L: 10,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 45,
      MAG: 51,
      PDF: 50,
      MDF: 60,
      SPD: 42,
      ACC: 45,
      DEX: 30
    },
    Arn: 210,
    Drop: { Rate: 0.3, Item: 'Frost Shard' },
    Steal: { Rate: 0.5, Item: 'Ice Cube' },
    Type: 'Enemy',
    Available: [ 5 ]
  },
  {
    Name: 'Black Elemental',
    Element: 'Dark',
    HP: 300,
    LVL: 31,
    Stats: {
      Base: {
        L: 10.35,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 51,
      MAG: 49,
      PDF: 46,
      MDF: 56,
      SPD: 55,
      ACC: 51,
      DEX: 62
    },
    Arn: 215,
    Drop: { Rate: 0.3, Item: 'Charged Jet' },
    Steal: { Rate: 0.5, Item: 'Black Ash' },
    Type: 'Enemy',
    Available: [ 5 ]
  },
  {
    Name: 'Deep Puddle',
    Element: 'Water',
    HP: 600,
    LVL: 29,
    Stats: {
      Base: {
        L: 9.66,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 33,
      MAG: 43,
      PDF: 96,
      MDF: 48,
      SPD: 36,
      ACC: 36,
      DEX: 28
    },
    Arn: 125,
    Drop: { Rate: 0.8, Item: 'Blue Drop' },
    Steal: { Rate: 0.5, Item: 'Splash' },
    Type: 'Enemy',
    Available: [ 5 ]
  },
  {
    Name: 'Tiamat',
    Element: 'Dark',
    HP: 600,
    LVL: 33,
    Stats: {
      Base: {
        L: 11.09,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 60,
      MAG: 49,
      PDF: 52,
      MDF: 62,
      SPD: 58,
      ACC: 58,
      DEX: 63
    },
    Arn: 3500,
    Drop: { Rate: 0.1, Item: 'Red Cape' },
    Steal: { Rate: 0.5, Item: 'Brass Ring' },
    Type: 'Boss',
    Available: [ 5 ]
  },
  {
    Name: 'Boris',
    Element: 'Lightning',
    HP: 800,
    LVL: 32,
    Stats: {
      Base: {
        L: 10.71,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 74,
      MAG: 26,
      PDF: 71,
      MDF: 46,
      SPD: 42,
      ACC: 52,
      DEX: 45
    },
    Arn: 0,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Chain Belt' },
    Type: 'Boss',
    Available: [ 5 ]
  },
  {
    Name: 'Orlando',
    Element: 'Water',
    HP: 525,
    LVL: 32,
    Stats: {
      Base: {
        L: 10.71,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 48,
      MAG: 51,
      PDF: 53,
      MDF: 74,
      SPD: 49,
      ACC: 50,
      DEX: 51
    },
    Arn: 0,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Waterfall' },
    Type: 'Boss',
    Available: [ 5 ]
  },
  {
    Name: 'Ice',
    Element: 'Ice',
    HP: 450,
    LVL: 32,
    Stats: {
      Base: {
        L: 10.71,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 50,
      MAG: 53,
      PDF: 47,
      MDF: 53,
      SPD: 53,
      ACC: 64,
      DEX: 53
    },
    Arn: 0,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Frostwave' },
    Type: 'Boss',
    Available: [ 5 ]
  },
  {
    Name: 'The Mad King',
    Element: 'Dark',
    HP: 2000,
    LVL: 38,
    Stats: {
      Base: {
        L: 13.17,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 105,
      MAG: 66,
      PDF: 76,
      MDF: 61,
      SPD: 57,
      ACC: 71,
      DEX: 62
    },
    Arn: 5500,
    Drop: { Rate: 0.1, Item: 'Circlet of Insanity' },
    Steal: { Rate: 0.5, Item: 'Diamond Dust' },
    Type: 'Boss',
    Available: [ 5 ]
  },
  {
    Name: 'Light Stalker',
    Element: 'Light',
    HP: 340,
    LVL: 34,
    Stats: {
      Base: {
        L: 11.48,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 64,
      MAG: 68,
      PDF: 51,
      MDF: 63,
      SPD: 61,
      ACC: 57,
      DEX: 68
    },
    Arn: 320,
    Drop: { Rate: 0.3, Item: 'Charged Pearl' },
    Steal: { Rate: 0.25, Item: 'Mend-All' },
    Type: 'Enemy',
    Available: [ 5 ]
  },
  {
    Name: 'Brain Leech',
    Element: 'Light',
    HP: 250,
    LVL: 33,
    Stats: {
      Base: {
        L: 11.09,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 55,
      MAG: 55,
      PDF: 53,
      MDF: 67,
      SPD: 67,
      ACC: 55,
      DEX: 58
    },
    Arn: 165,
    Drop: { Rate: 0.1, Item: 'Memento' },
    Steal: { Rate: 0.12, Item: 'Enlight' },
    Type: 'Enemy',
    Available: [ 5 ]
  },
  {
    Name: 'Lurker',
    Element: 'Water',
    HP: 500,
    LVL: 35,
    Stats: {
      Base: {
        L: 11.88,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 89,
      MAG: 44,
      PDF: 59,
      MDF: 53,
      SPD: 52,
      ACC: 53,
      DEX: 44
    },
    Arn: 420,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 5 ]
  },
  {
    Name: 'Cathead',
    Element: 'Light',
    HP: 1250,
    LVL: 36,
    Stats: {
      Base: {
        L: 12.29,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 86,
      MAG: 61,
      PDF: 79,
      MDF: 58,
      SPD: 58,
      ACC: 59,
      DEX: 64
    },
    Arn: 1250,
    Drop: { Rate: 0.5, Item: 'Gold Dust' },
    Steal: { Rate: 0.12, Item: 'Fur Sandals' },
    Type: 'Enemy',
    Available: [ 5 ]
  },
  {
    Name: 'Wyvern',
    Element: 'Light',
    HP: 1900,
    LVL: 37,
    Stats: {
      Base: {
        L: 12.72,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 79,
      MAG: 64,
      PDF: 64,
      MDF: 62,
      SPD: 47,
      ACC: 69,
      DEX: 55
    },
    Arn: 4500,
    Drop: { Rate: 0.1, Item: 'Purple Herb' },
    Steal: { Rate: 0.5, Item: 'Diamond Dust' },
    Type: 'Boss',
    Available: [ 5 ]
  },
  {
    Name: 'Left Wing',
    Element: 'Light',
    HP: 550,
    LVL: 36,
    Stats: {
      Base: {
        L: 12.29,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 67,
      MAG: 62,
      PDF: 54,
      MDF: 69,
      SPD: 59,
      ACC: 66,
      DEX: 57
    },
    Arn: 0,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Photon Beam' },
    Type: 'Boss',
    Available: [ 5 ]
  },
  {
    Name: 'Right Wing',
    Element: 'Light',
    HP: 550,
    LVL: 36,
    Stats: {
      Base: {
        L: 12.29,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 67,
      MAG: 62,
      PDF: 71,
      MDF: 56,
      SPD: 59,
      ACC: 66,
      DEX: 57
    },
    Arn: 0,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Brass Badge' },
    Type: 'Boss',
    Available: [ 5 ]
  },
  {
    Name: 'Matrech Soldier',
    Element: 'Fire',
    HP: 180,
    LVL: 33,
    Stats: {
      Base: {
        L: 11.09,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 38,
      MAG: 33,
      PDF: 52,
      MDF: 48,
      SPD: 50,
      ACC: 38,
      DEX: 44
    },
    Arn: 100,
    Drop: null,
    Steal: null,
    Type: 'Enemy',
    Available: [ 5 ]
  },
  {
    Name: 'Matrech Corporal',
    Element: 'Light',
    HP: 250,
    LVL: 35,
    Stats: {
      Base: {
        L: 11.88,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 50,
      MAG: 47,
      PDF: 59,
      MDF: 53,
      SPD: 53,
      ACC: 43,
      DEX: 53
    },
    Arn: 330,
    Drop: { Rate: 0.5, Item: 'Green Herb' },
    Steal: null,
    Type: 'Enemy',
    Available: [ 5 ]
  },
  {
    Name: 'Mai',
    Element: 'Ice',
    HP: 262,
    LVL: 38,
    Stats: {
      Base: {
        L: 13.17,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 39,
      MAG: 105,
      PDF: 657,
      MDF: 105,
      SPD: 69,
      ACC: 62,
      DEX: 67
    },
    Arn: 0,
    Drop: null,
    Steal: null,
    Type: 'Boss',
    Available: [ 6 ]
  },
  {
    Name: 'Boris',
    Element: 'Lightning',
    HP: 1850,
    LVL: 37,
    Stats: {
      Base: {
        L: 12.72,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 111,
      MAG: 31,
      PDF: 85,
      MDF: 60,
      SPD: 55,
      ACC: 63,
      DEX: 48
    },
    Arn: 2000,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Titanium Brace' },
    Type: 'Boss',
    Available: [ 6 ]
  },
  {
    Name: 'Dire Spider',
    Element: 'Dark',
    HP: 250,
    LVL: 37,
    Stats: {
      Base: {
        L: 12.72,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 50,
      MAG: 50,
      PDF: 57,
      MDF: 54,
      SPD: 68,
      ACC: 60,
      DEX: 66
    },
    Arn: 245,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 6 ]
  },
  {
    Name: 'Belgugon',
    Element: 'Dark',
    HP: 300,
    LVL: 37,
    Stats: {
      Base: {
        L: 12.72,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 63,
      MAG: 76,
      PDF: 60,
      MDF: 75,
      SPD: 63,
      ACC: 55,
      DEX: 60
    },
    Arn: 295,
    Drop: { Rate: 0.4, Item: 'Charged Jet' },
    Steal: { Rate: 0.25, Item: 'Balance' },
    Type: 'Enemy',
    Available: [ 6 ]
  },
  {
    Name: 'Carrion Worm',
    Element: 'Dark',
    HP: 740,
    LVL: 38,
    Stats: {
      Base: {
        L: 13.17,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 65,
      MAG: 52,
      PDF: 59,
      MDF: 59,
      SPD: 69,
      ACC: 69,
      DEX: 62
    },
    Arn: 410,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Leather Belt' },
    Type: 'Enemy',
    Available: [ 6 ]
  },
  {
    Name: 'Cave Troll',
    Element: 'Fire',
    HP: 1600,
    LVL: 40,
    Stats: {
      Base: {
        L: 14.11,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 109,
      MAG: 52,
      PDF: 52,
      MDF: 52,
      SPD: 67,
      ACC: 67,
      DEX: 56
    },
    Arn: 1675,
    Drop: { Rate: 0.1, Item: 'Green Herb' },
    Steal: { Rate: 0.12, Item: 'Green Herb' },
    Type: 'Enemy',
    Available: [ 6 ]
  },
  {
    Name: 'Pestilence',
    Element: 'Dark',
    HP: 2200,
    LVL: 42,
    Stats: {
      Base: {
        L: 15.11,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 102,
      MAG: 79,
      PDF: 89,
      MDF: 75,
      SPD: 68,
      ACC: 68,
      DEX: 52
    },
    Arn: 6666,
    Drop: { Rate: 0.1, Item: 'Plague Mask' },
    Steal: { Rate: 0.5, Item: 'Titanium Orb' },
    Type: 'Boss',
    Available: [ 6 ]
  },
  {
    Name: 'Enchanter',
    Element: 'Lightning',
    HP: 500,
    LVL: 42,
    Stats: {
      Base: {
        L: 15.11,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 60,
      MAG: 87,
      PDF: 52,
      MDF: 105,
      SPD: 75,
      ACC: 67,
      DEX: 68
    },
    Arn: 595,
    Drop: { Rate: 0.5, Item: 'Lightning Rod' },
    Steal: { Rate: 0.25, Item: 'Charged Pearl' },
    Type: 'Enemy',
    Available: [ 6 ]
  },
  {
    Name: 'Crusader',
    Element: 'Light',
    HP: 400,
    LVL: 41,
    Stats: {
      Base: {
        L: 14.6,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 69,
      MAG: 65,
      PDF: 73,
      MDF: 69,
      SPD: 71,
      ACC: 76,
      DEX: 69
    },
    Arn: 485,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Brass Badge' },
    Type: 'Enemy',
    Available: [ 6 ]
  },
  {
    Name: 'Templar',
    Element: 'Light',
    HP: 720,
    LVL: 44,
    Stats: {
      Base: {
        L: 16.19,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 101,
      MAG: 80,
      PDF: 84,
      MDF: 76,
      SPD: 76,
      ACC: 90,
      DEX: 73
    },
    Arn: 700,
    Drop: { Rate: 0.5, Item: 'Chain Belt' },
    Steal: { Rate: 0.12, Item: 'Photon Beam' },
    Type: 'Enemy',
    Available: [ 6 ]
  },
  {
    Name: 'Unicorn',
    Element: 'Light',
    HP: 900,
    LVL: 43,
    Stats: {
      Base: {
        L: 15.64,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 101,
      MAG: 92,
      PDF: 70,
      MDF: 87,
      SPD: 70,
      ACC: 71,
      DEX: 79
    },
    Arn: 1500,
    Drop: { Rate: 0.5, Item: 'Gold Dust' },
    Steal: { Rate: 0.5, Item: 'Mend-All' },
    Type: 'Enemy',
    Available: [ 6 ]
  },
  {
    Name: 'Pendragon',
    Element: 'Light',
    HP: 2400,
    LVL: 46,
    Stats: {
      Base: {
        L: 17.34,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 134,
      MAG: 103,
      PDF: 104,
      MDF: 86,
      SPD: 86,
      ACC: 86,
      DEX: 77
    },
    Arn: 12500,
    Drop: { Rate: 0.1, Item: 'Holy Grail' },
    Steal: { Rate: 0.5, Item: 'Blue Bandana' },
    Type: 'Boss',
    Available: [ 6 ]
  },
  {
    Name: 'Trevor',
    Element: 'Dark',
    HP: 1000,
    LVL: 41,
    Stats: {
      Base: {
        L: 14.6,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 105,
      MAG: 54,
      PDF: 82,
      MDF: 69,
      SPD: 69,
      ACC: 80,
      DEX: 65
    },
    Arn: 5000,
    Drop: { Rate: 0.1, Item: 'Charged Jet' },
    Steal: { Rate: 0.5, Item: 'Darkstrike' },
    Type: 'Boss',
    Available: [ 6 ]
  },
  {
    Name: 'Sick',
    Element: 'Light',
    HP: 850,
    LVL: 40,
    Stats: {
      Base: {
        L: 14.11,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 93,
      MAG: 63,
      PDF: 61,
      MDF: 87,
      SPD: 82,
      ACC: 70,
      DEX: 74
    },
    Arn: 4000,
    Drop: { Rate: 0.1, Item: 'Charged Pearl' },
    Steal: { Rate: 0.5, Item: 'Lightstrike' },
    Type: 'Boss',
    Available: [ 6 ]
  },
  {
    Name: 'Clint',
    Element: 'Fire',
    HP: 1750,
    LVL: 44,
    Stats: {
      Base: {
        L: 16.19,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 117,
      MAG: 66,
      PDF: 74,
      MDF: 97,
      SPD: 69,
      ACC: 89,
      DEX: 70
    },
    Arn: 10000,
    Drop: { Rate: 0.1, Item: 'Blue Glasses' },
    Steal: { Rate: 0.5, Item: "Adventurer's Jacket" },
    Type: 'Boss',
    Available: [ 6 ]
  },
  {
    Name: 'Ogre Soldier',
    Element: 'Fire',
    HP: 300,
    LVL: 40,
    Stats: {
      Base: {
        L: 14.11,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 70,
      MAG: 40,
      PDF: 77,
      MDF: 64,
      SPD: 63,
      ACC: 65,
      DEX: 52
    },
    Arn: 500,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 6 ]
  },
  {
    Name: 'Ogre Chieftain',
    Element: 'Dark',
    HP: 800,
    LVL: 43,
    Stats: {
      Base: {
        L: 15.64,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 109,
      MAG: 50,
      PDF: 92,
      MDF: 78,
      SPD: 75,
      ACC: 74,
      DEX: 58
    },
    Arn: 830,
    Drop: { Rate: 0.5, Item: 'Chain Belt' },
    Steal: { Rate: 0.5, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 6 ]
  },
  {
    Name: 'Orc Shaman',
    Element: 'Water',
    HP: 200,
    LVL: 41,
    Stats: {
      Base: {
        L: 14.6,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 54,
      MAG: 83,
      PDF: 67,
      MDF: 105,
      SPD: 71,
      ACC: 58,
      DEX: 54
    },
    Arn: 660,
    Drop: { Rate: 0.5, Item: 'Marid Tear' },
    Steal: { Rate: 0.5, Item: 'Quartz Amulet' },
    Type: 'Enemy',
    Available: [ 6 ]
  },
  {
    Name: 'Nightmare',
    Element: 'Dark',
    HP: 750,
    LVL: 41,
    Stats: {
      Base: {
        L: 14.6,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 73,
      MAG: 72,
      PDF: 67,
      MDF: 86,
      SPD: 76,
      ACC: 72,
      DEX: 69
    },
    Arn: 1200,
    Drop: null,
    Steal: { Rate: 0.25, Item: 'Enlight' },
    Type: 'Enemy',
    Available: [ 6 ]
  },
  {
    Name: 'Hill Giant',
    Element: 'Fire',
    HP: 1500,
    LVL: 44,
    Stats: {
      Base: {
        L: 16.19,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 117,
      MAG: 64,
      PDF: 73,
      MDF: 72,
      SPD: 77,
      ACC: 79,
      DEX: 68
    },
    Arn: 2500,
    Drop: { Rate: 0.15, Item: 'Green Herb' },
    Steal: { Rate: 0.5, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 6 ]
  },
  {
    Name: 'Brunhild',
    Element: 'Light',
    HP: 2200,
    LVL: 48,
    Stats: {
      Base: {
        L: 18.58,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 120,
      MAG: 110,
      PDF: 91,
      MDF: 92,
      SPD: 149,
      ACC: 91,
      DEX: 82
    },
    Arn: 12000,
    Drop: { Rate: 0.1, Item: 'Diamond Dust' },
    Steal: { Rate: 0.5, Item: 'Silver Tiara' },
    Type: 'Boss',
    Available: [ 6 ]
  },
  {
    Name: 'Matrech Knight',
    Element: 'Light',
    HP: 265,
    LVL: 43,
    Stats: {
      Base: {
        L: 15.64,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 61,
      MAG: 46,
      PDF: 74,
      MDF: 68,
      SPD: 78,
      ACC: 66,
      DEX: 74
    },
    Arn: 560,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 7 ]
  },
  {
    Name: 'Matrech Elite',
    Element: 'Ice',
    HP: 550,
    LVL: 47,
    Stats: {
      Base: {
        L: 17.95,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 80,
      MAG: 71,
      PDF: 89,
      MDF: 80,
      SPD: 85,
      ACC: 79,
      DEX: 89
    },
    Arn: 1050,
    Drop: { Rate: 0.5, Item: 'Green Herb' },
    Steal: { Rate: 0.5, Item: 'Steel Bracer' },
    Type: 'Enemy',
    Available: [ 7 ]
  },
  {
    Name: 'Sahagin',
    Element: 'Water',
    HP: 200,
    LVL: 45,
    Stats: {
      Base: {
        L: 16.75,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 83,
      MAG: 102,
      PDF: 71,
      MDF: 87,
      SPD: 83,
      ACC: 87,
      DEX: 79
    },
    Arn: 1100,
    Drop: { Rate: 0.5, Item: 'Marid Tear' },
    Steal: { Rate: 0.12, Item: 'Waterfall' },
    Type: 'Enemy',
    Available: [ 7 ]
  },
  {
    Name: 'Land Shark',
    Element: 'Water',
    HP: 900,
    LVL: 48,
    Stats: {
      Base: {
        L: 18.58,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 125,
      MAG: 46,
      PDF: 83,
      MDF: 78,
      SPD: 109,
      ACC: 110,
      DEX: 100
    },
    Arn: 1550,
    Drop: null,
    Steal: { Rate: 0.25, Item: 'Gold Dust' },
    Type: 'Enemy',
    Available: [ 7 ]
  },
  {
    Name: 'Ghost Magus',
    Element: 'Water',
    HP: 4500,
    LVL: 48,
    Stats: {
      Base: {
        L: 18.58,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 46,
      MAG: 128,
      PDF: 1,
      MDF: 109,
      SPD: 84,
      ACC: 46,
      DEX: 74
    },
    Arn: 16000,
    Drop: { Rate: 0.1, Item: 'Silver Ring' },
    Steal: { Rate: 0.5, Item: 'Fine Silk Robe' },
    Type: 'Boss',
    Available: [ 7 ]
  },
  {
    Name: 'Hoarder',
    Element: 'Lightning',
    HP: 1000,
    LVL: 48,
    Stats: {
      Base: {
        L: 18.58,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 55,
      MAG: 116,
      PDF: 69,
      MDF: 106,
      SPD: 75,
      ACC: 67,
      DEX: 74
    },
    Arn: 2600,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Black Ruby' },
    Type: 'Enemy',
    Available: [ 7 ]
  },
  {
    Name: 'Azure Golem',
    Element: 'Water',
    HP: 350,
    LVL: 46,
    Stats: {
      Base: {
        L: 17.34,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 112,
      MAG: 43,
      PDF: 109,
      MDF: 69,
      SPD: 56,
      ACC: 69,
      DEX: 52
    },
    Arn: 0,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 7 ]
  },
  {
    Name: 'Tribal Warrior',
    Element: 'Fire',
    HP: 270,
    LVL: 47,
    Stats: {
      Base: {
        L: 17.95,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 78,
      MAG: 53,
      PDF: 82,
      MDF: 78,
      SPD: 88,
      ACC: 79,
      DEX: 81
    },
    Arn: 900,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 7 ]
  },
  {
    Name: 'Warlock',
    Element: 'Dark',
    HP: 400,
    LVL: 51,
    Stats: {
      Base: {
        L: 20.6,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 77,
      MAG: 118,
      PDF: 95,
      MDF: 149,
      SPD: 100,
      ACC: 82,
      DEX: 77
    },
    Arn: 1300,
    Drop: { Rate: 0.5, Item: 'Marid Tear' },
    Steal: { Rate: 0.25, Item: 'Quartz Amulet' },
    Type: 'Enemy',
    Available: [ 7 ]
  },
  {
    Name: 'Hunter',
    Element: 'Fire',
    HP: 450,
    LVL: 49,
    Stats: {
      Base: {
        L: 19.23,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 96,
      MAG: 72,
      PDF: 75,
      MDF: 98,
      SPD: 78,
      ACC: 100,
      DEX: 87
    },
    Arn: 1050,
    Drop: null,
    Steal: { Rate: 0.25, Item: 'Green Herb' },
    Type: 'Enemy',
    Available: [ 7 ]
  },
  {
    Name: 'Savak',
    Element: 'Dark',
    HP: 1100,
    LVL: 52,
    Stats: {
      Base: {
        L: 21.32,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 127,
      MAG: 53,
      PDF: 102,
      MDF: 87,
      SPD: 102,
      ACC: 105,
      DEX: 93
    },
    Arn: 2000,
    Drop: { Rate: 0.4, Item: 'Darkstrike' },
    Steal: { Rate: 0.5, Item: 'Energy Drink' },
    Type: 'Enemy',
    Available: [ 7 ]
  },
  {
    Name: 'Beastmaster',
    Element: 'Fire',
    HP: 2000,
    LVL: 55,
    Stats: {
      Base: {
        L: 23.63,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 129,
      MAG: 118,
      PDF: 128,
      MDF: 112,
      SPD: 92,
      ACC: 118,
      DEX: 94
    },
    Arn: 19000,
    Drop: { Rate: 0.1, Item: 'Purple Herb' },
    Steal: { Rate: 0.5, Item: 'Brown Herb' },
    Type: 'Boss',
    Available: [ 7 ]
  },
  {
    Name: 'Black Beast',
    Element: 'Dark',
    HP: 1250,
    LVL: 52,
    Stats: {
      Base: {
        L: 21.32,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 127,
      MAG: 70,
      PDF: 95,
      MDF: 89,
      SPD: 117,
      ACC: 104,
      DEX: 95
    },
    Arn: 0,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Studded Belt' },
    Type: 'Boss',
    Available: [ 7 ]
  },
  {
    Name: 'White Beast',
    Element: 'Ice',
    HP: 1250,
    LVL: 52,
    Stats: {
      Base: {
        L: 21.32,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 127,
      MAG: 70,
      PDF: 95,
      MDF: 89,
      SPD: 117,
      ACC: 104,
      DEX: 95
    },
    Arn: 0,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Silver Badge' },
    Type: 'Boss',
    Available: [ 7 ]
  },
  {
    Name: 'Lava Bones',
    Element: 'Fire',
    HP: 350,
    LVL: 52,
    Stats: {
      Base: {
        L: 21.32,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 87,
      MAG: 85,
      PDF: 111,
      MDF: 101,
      SPD: 106,
      ACC: 106,
      DEX: 101
    },
    Arn: 1215,
    Drop: { Rate: 0.1, Item: 'Silver Dust' },
    Steal: { Rate: 0.5, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 7 ]
  },
  {
    Name: 'Hobgoblin',
    Element: 'Fire',
    HP: 480,
    LVL: 52,
    Stats: {
      Base: {
        L: 21.32,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 106,
      MAG: 53,
      PDF: 117,
      MDF: 94,
      SPD: 108,
      ACC: 83,
      DEX: 79
    },
    Arn: 1450,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Long Boots' },
    Type: 'Enemy',
    Available: [ 7 ]
  },
  {
    Name: 'Imp',
    Element: 'Dark',
    HP: 600,
    LVL: 53,
    Stats: {
      Base: {
        L: 22.06,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 110,
      MAG: 137,
      PDF: 101,
      MDF: 134,
      SPD: 122,
      ACC: 99,
      DEX: 115
    },
    Arn: 1700,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 7 ]
  },
  {
    Name: 'Gargoyle',
    Element: 'Fire',
    HP: 760,
    LVL: 54,
    Stats: {
      Base: {
        L: 22.84,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 171,
      MAG: 57,
      PDF: 184,
      MDF: 102,
      SPD: 107,
      ACC: 109,
      DEX: 89
    },
    Arn: 2250,
    Drop: { Rate: 0.8, Item: 'Mithril Bracer' },
    Steal: { Rate: 0.25, Item: 'Gold Dust' },
    Type: 'Enemy',
    Available: [ 7 ]
  },
  {
    Name: 'Catoblepas',
    Element: 'Dark',
    HP: 1800,
    LVL: 55,
    Stats: {
      Base: {
        L: 23.63,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 190,
      MAG: 160,
      PDF: 127,
      MDF: 131,
      SPD: 105,
      ACC: 124,
      DEX: 93
    },
    Arn: 5625,
    Drop: { Rate: 0.5, Item: 'Charged Jet' },
    Steal: { Rate: 0.25, Item: 'Watershield' },
    Type: 'Enemy',
    Available: [ 7 ]
  },
  {
    Name: 'Soth',
    Element: 'Dark',
    HP: 2500,
    LVL: 56,
    Stats: {
      Base: {
        L: 24.46,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 134,
      MAG: 134,
      PDF: 117,
      MDF: 107,
      SPD: 133,
      ACC: 133,
      DEX: 128
    },
    Arn: 25000,
    Drop: { Rate: 0.1, Item: 'Diamond Dust' },
    Steal: { Rate: 0.5, Item: 'Blackened Helm' },
    Type: 'Boss',
    Available: [ 7 ]
  },
  {
    Name: 'Almenga Soldier',
    Element: 'Ice',
    HP: 250,
    LVL: 51,
    Stats: {
      Base: {
        L: 20.6,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 77,
      MAG: 82,
      PDF: 87,
      MDF: 102,
      SPD: 105,
      ACC: 87,
      DEX: 77
    },
    Arn: 1215,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 7 ]
  },
  {
    Name: 'Almenga Captain',
    Element: 'Ice',
    HP: 600,
    LVL: 52,
    Stats: {
      Base: {
        L: 21.32,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 101,
      MAG: 95,
      PDF: 105,
      MDF: 110,
      SPD: 115,
      ACC: 98,
      DEX: 85
    },
    Arn: 2150,
    Drop: { Rate: 0.8, Item: 'Green Herb' },
    Steal: { Rate: 0.25, Item: 'Imperial Mail' },
    Type: 'Enemy',
    Available: [ 7 ]
  },
  {
    Name: 'Almenga Summoner',
    Element: 'Ice',
    HP: 1400,
    LVL: 53,
    Stats: {
      Base: {
        L: 22.06,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 105,
      MAG: 137,
      PDF: 71,
      MDF: 115,
      SPD: 86,
      ACC: 97,
      DEX: 78
    },
    Arn: 6400,
    Drop: { Rate: 0.5, Item: 'Charged Jet' },
    Steal: { Rate: 0.25, Item: 'Charged Jet' },
    Type: 'Enemy',
    Available: [ 7 ]
  },
  {
    Name: "Pandora's Box",
    Element: 'Water',
    HP: 600,
    LVL: 52,
    Stats: {
      Base: {
        L: 21.32,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 79,
      MAG: 82,
      PDF: 79,
      MDF: 166,
      SPD: 90,
      ACC: 85,
      DEX: 58
    },
    Arn: 0,
    Drop: null,
    Steal: { Rate: 0.12, Item: 'Menu Set #6' },
    Type: 'Enemy',
    Available: [ 7 ]
  },
  {
    Name: 'Mountain Tiger',
    Element: 'Lightning',
    HP: 1200,
    LVL: 52,
    Stats: {
      Base: {
        L: 21.32,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 124,
      MAG: 53,
      PDF: 94,
      MDF: 85,
      SPD: 83,
      ACC: 93,
      DEX: 77
    },
    Arn: 2300,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 7 ]
  },
  {
    Name: 'Parasite',
    Element: 'Light',
    HP: 500,
    LVL: 51,
    Stats: {
      Base: {
        L: 20.6,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 90,
      MAG: 96,
      PDF: 96,
      MDF: 118,
      SPD: 102,
      ACC: 101,
      DEX: 92
    },
    Arn: 1850,
    Drop: { Rate: 0.4, Item: 'Charged Pearl' },
    Steal: { Rate: 0.25, Item: 'Restore' },
    Type: 'Enemy',
    Available: [ 7 ]
  },
  {
    Name: 'Manticore',
    Element: 'Lightning',
    HP: 1800,
    LVL: 53,
    Stats: {
      Base: {
        L: 22.06,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 142,
      MAG: 142,
      PDF: 114,
      MDF: 118,
      SPD: 98,
      ACC: 113,
      DEX: 76
    },
    Arn: 6750,
    Drop: null,
    Steal: { Rate: 0.25, Item: 'Nerveheal' },
    Type: 'Enemy',
    Available: [ 7 ]
  },
  {
    Name: 'Mahadevi',
    Element: 'Fire',
    HP: 2200,
    LVL: 55,
    Stats: {
      Base: {
        L: 23.63,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 118,
      MAG: 153,
      PDF: 105,
      MDF: 115,
      SPD: 112,
      ACC: 112,
      DEX: 87
    },
    Arn: 7500,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Fireball' },
    Type: 'Boss',
    Available: [ 7 ]
  },
  {
    Name: 'Indra',
    Element: 'Lightning',
    HP: 2500,
    LVL: 56,
    Stats: {
      Base: {
        L: 24.46,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 158,
      MAG: 122,
      PDF: 114,
      MDF: 110,
      SPD: 110,
      ACC: 122,
      DEX: 85
    },
    Arn: 9000,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Thunderbolt' },
    Type: 'Boss',
    Available: [ 7 ]
  },
  {
    Name: 'Elder Summoner',
    Element: 'Ice',
    HP: 1200,
    LVL: 53,
    Stats: {
      Base: {
        L: 22.06,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 105,
      MAG: 110,
      PDF: 71,
      MDF: 115,
      SPD: 86,
      ACC: 97,
      DEX: 86
    },
    Arn: 0,
    Drop: null,
    Steal: { Rate: 0.25, Item: 'Charged Jet' },
    Type: 'Boss',
    Available: [ 7 ]
  },
  {
    Name: 'Nandi',
    Element: 'Ice',
    HP: 2000,
    LVL: 54,
    Stats: {
      Base: {
        L: 22.84,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 137,
      MAG: 101,
      PDF: 108,
      MDF: 94,
      SPD: 99,
      ACC: 101,
      DEX: 68
    },
    Arn: 7000,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Frostwave' },
    Type: 'Boss',
    Available: [ 7 ]
  },
  {
    Name: 'Kama',
    Element: 'Light',
    HP: 1800,
    LVL: 54,
    Stats: {
      Base: {
        L: 22.84,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 102,
      MAG: 158,
      PDF: 99,
      MDF: 119,
      SPD: 118,
      ACC: 102,
      DEX: 89
    },
    Arn: 6500,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Photon Beam' },
    Type: 'Boss',
    Available: [ 7 ]
  },
  {
    Name: 'Green Wolf',
    Element: 'Water',
    HP: 500,
    LVL: 53,
    Stats: {
      Base: {
        L: 22.06,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 88,
      MAG: 55,
      PDF: 93,
      MDF: 100,
      SPD: 88,
      ACC: 101,
      DEX: 99
    },
    Arn: 2000,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 7 ]
  },
  {
    Name: 'Demilich',
    Element: 'Dark',
    HP: 3333,
    LVL: 63,
    Stats: {
      Base: {
        L: 31.12,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 194,
      MAG: 224,
      PDF: 124,
      MDF: 194,
      SPD: 147,
      ACC: 118,
      DEX: 133
    },
    Arn: 66666,
    Drop: { Rate: 0.1, Item: 'Menu Set #3' },
    Steal: { Rate: 0.5, Item: 'Black-Green Cloak' },
    Type: 'Boss',
    Available: [ 7 ]
  },
  {
    Name: 'Black Death',
    Element: 'Dark',
    HP: 625,
    LVL: 57,
    Stats: {
      Base: {
        L: 25.32,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 125,
      MAG: 87,
      PDF: 116,
      MDF: 116,
      SPD: 136,
      ACC: 139,
      DEX: 122
    },
    Arn: 2600,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 7 ]
  },
  {
    Name: 'Brown Serpent',
    Element: 'Lightning',
    HP: 650,
    LVL: 58,
    Stats: {
      Base: {
        L: 26.2,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 137,
      MAG: 103,
      PDF: 113,
      MDF: 112,
      SPD: 159,
      ACC: 131,
      DEX: 134
    },
    Arn: 3400,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Muscleheal' },
    Type: 'Enemy',
    Available: [ 7 ]
  },
  {
    Name: 'Sand Shark',
    Element: 'Lightning',
    HP: 2400,
    LVL: 60,
    Stats: {
      Base: {
        L: 28.07,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 203,
      MAG: 70,
      PDF: 126,
      MDF: 117,
      SPD: 168,
      ACC: 167,
      DEX: 151
    },
    Arn: 8300,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 7 ]
  },
  {
    Name: 'Harpy',
    Element: 'Lightning',
    HP: 800,
    LVL: 59,
    Stats: {
      Base: {
        L: 27.12,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 124,
      MAG: 131,
      PDF: 127,
      MDF: 123,
      SPD: 162,
      ACC: 135,
      DEX: 142
    },
    Arn: 3500,
    Drop: { Rate: 0.5, Item: 'Gold Dust' },
    Steal: { Rate: 0.25, Item: 'Velvet Scarf' },
    Type: 'Enemy',
    Available: [ 7 ]
  },
  {
    Name: 'Rashnu',
    Element: 'Light',
    HP: 2750,
    LVL: 64,
    Stats: {
      Base: {
        L: 32.21,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 228,
      MAG: 209,
      PDF: 128,
      MDF: 201,
      SPD: 177,
      ACC: 122,
      DEX: 138
    },
    Arn: 55000,
    Drop: { Rate: 0.1, Item: 'Lightstrike' },
    Steal: { Rate: 0.5, Item: 'White Fez' },
    Type: 'Boss',
    Available: [ 7 ]
  },
  {
    Name: 'Demon Trevor',
    Element: 'Dark',
    HP: 8000,
    LVL: 75,
    Stats: {
      Base: {
        L: 47.03,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 338,
      MAG: 246,
      PDF: 277,
      MDF: 235,
      SPD: 183,
      ACC: 258,
      DEX: 188
    },
    Arn: 0,
    Drop: null,
    Steal: null,
    Type: 'Boss',
    Available: [ 7 ]
  },
  {
    Name: 'Demon Sick',
    Element: 'Light',
    HP: 7000,
    LVL: 75,
    Stats: {
      Base: {
        L: 47.03,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 310,
      MAG: 310,
      PDF: 213,
      MDF: 298,
      SPD: 199,
      ACC: 235,
      DEX: 199
    },
    Arn: 0,
    Drop: null,
    Steal: null,
    Type: 'Boss',
    Available: [ 7 ]
  },
  {
    Name: 'Earth Worm',
    Element: 'Lightning',
    HP: 750,
    LVL: 62,
    Stats: {
      Base: {
        L: 30.07,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 150,
      MAG: 120,
      PDF: 135,
      MDF: 135,
      SPD: 157,
      ACC: 157,
      DEX: 127
    },
    Arn: 2250,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 7 ]
  },
  {
    Name: 'Deathgaze',
    Element: 'Dark',
    HP: 1900,
    LVL: 64,
    Stats: {
      Base: {
        L: 32.21,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 257,
      MAG: 193,
      PDF: 144,
      MDF: 153,
      SPD: 141,
      ACC: 144,
      DEX: 125
    },
    Arn: 6300,
    Drop: { Rate: 0.15, Item: 'Green Herb' },
    Steal: { Rate: 0.25, Item: 'Chain Belt' },
    Type: 'Enemy',
    Available: [ 7 ]
  },
  {
    Name: 'Paragon',
    Element: 'Water',
    HP: 900,
    LVL: 63,
    Stats: {
      Base: {
        L: 31.12,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 155,
      MAG: 188,
      PDF: 147,
      MDF: 183,
      SPD: 155,
      ACC: 136,
      DEX: 136
    },
    Arn: 3600,
    Drop: { Rate: 0.4, Item: 'Marid Tear' },
    Steal: { Rate: 0.25, Item: 'Gold Dust' },
    Type: 'Enemy',
    Available: [ 7 ]
  },
  {
    Name: 'Chimaera',
    Element: 'Lightning',
    HP: 2500,
    LVL: 65,
    Stats: {
      Base: {
        L: 33.34,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 275,
      MAG: 216,
      PDF: 166,
      MDF: 185,
      SPD: 151,
      ACC: 171,
      DEX: 125
    },
    Arn: 12000,
    Drop: null,
    Steal: { Rate: 0.12, Item: 'Opal Amulet' },
    Type: 'Enemy',
    Available: [ 7 ]
  },
  {
    Name: 'Tiamat',
    Element: 'Dark',
    HP: 3500,
    LVL: 66,
    Stats: {
      Base: {
        L: 34.51,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 286,
      MAG: 244,
      PDF: 160,
      MDF: 160,
      SPD: 153,
      ACC: 150,
      DEX: 120
    },
    Arn: 75000,
    Drop: { Rate: 0.1, Item: 'Black Dragonplate' },
    Steal: { Rate: 0.5, Item: 'Lock' },
    Type: 'Boss',
    Available: [ 7 ]
  },
  {
    Name: 'Riftgate',
    Element: 'Lightning',
    HP: 3000,
    LVL: 66,
    Stats: {
      Base: {
        L: 34.51,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 258,
      MAG: 207,
      PDF: 86,
      MDF: 198,
      SPD: 189,
      ACC: 181,
      DEX: 172
    },
    Arn: 60000,
    Drop: { Rate: 0.1, Item: 'Battle Plan #10' },
    Steal: { Rate: 0.5, Item: 'Blink' },
    Type: 'Boss',
    Available: [ 7 ]
  },
  {
    Name: 'Drow Fairy',
    Element: 'Dark',
    HP: 825,
    LVL: 63,
    Stats: {
      Base: {
        L: 31.12,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 105,
      MAG: 140,
      PDF: 119,
      MDF: 147,
      SPD: 124,
      ACC: 127,
      DEX: 178
    },
    Arn: 3100,
    Drop: { Rate: 0.5, Item: 'Cure' },
    Steal: { Rate: 0.5, Item: 'Balance' },
    Type: 'Enemy',
    Available: [ 8 ]
  },
  {
    Name: 'Flying Fish',
    Element: 'Water',
    HP: 650,
    LVL: 62,
    Stats: {
      Base: {
        L: 30.07,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 142,
      MAG: 97,
      PDF: 138,
      MDF: 138,
      SPD: 180,
      ACC: 130,
      DEX: 157
    },
    Arn: 2175,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 8 ]
  },
  {
    Name: 'Needler Tortoise',
    Element: 'Water',
    HP: 950,
    LVL: 64,
    Stats: {
      Base: {
        L: 32.21,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 177,
      MAG: 161,
      PDF: 194,
      MDF: 144,
      SPD: 141,
      ACC: 153,
      DEX: 144
    },
    Arn: 4300,
    Drop: { Rate: 0.8, Item: 'Mithril Bracer' },
    Steal: { Rate: 0.5, Item: 'Green Herb' },
    Type: 'Enemy',
    Available: [ 8 ]
  },
  {
    Name: 'Frost Giant',
    Element: 'Ice',
    HP: 2200,
    LVL: 65,
    Stats: {
      Base: {
        L: 33.34,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 241,
      MAG: 133,
      PDF: 151,
      MDF: 150,
      SPD: 160,
      ACC: 150,
      DEX: 141
    },
    Arn: 11250,
    Drop: { Rate: 0.5, Item: 'Frost Shard' },
    Steal: { Rate: 0.5, Item: 'Frost Shard' },
    Type: 'Enemy',
    Available: [ 8 ]
  },
  {
    Name: 'Snow Worm',
    Element: 'Ice',
    HP: 999,
    LVL: 64,
    Stats: {
      Base: {
        L: 32.21,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 161,
      MAG: 128,
      PDF: 144,
      MDF: 144,
      SPD: 169,
      ACC: 169,
      DEX: 153
    },
    Arn: 3500,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 8 ]
  },
  {
    Name: 'Ice Wolf',
    Element: 'Ice',
    HP: 750,
    LVL: 63,
    Stats: {
      Base: {
        L: 31.12,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 124,
      MAG: 77,
      PDF: 132,
      MDF: 141,
      SPD: 124,
      ACC: 143,
      DEX: 140
    },
    Arn: 2250,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 8 ]
  },
  {
    Name: 'Ghoul',
    Element: 'Dark',
    HP: 800,
    LVL: 69,
    Stats: {
      Base: {
        L: 38.26,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 248,
      MAG: 95,
      PDF: 153,
      MDF: 153,
      SPD: 156,
      ACC: 143,
      DEX: 143
    },
    Arn: 4100,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 8 ]
  },
  {
    Name: 'Wraith',
    Element: 'Dark',
    HP: 900,
    LVL: 70,
    Stats: {
      Base: {
        L: 39.6,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 108,
      MAG: 178,
      PDF: 138,
      MDF: 207,
      SPD: 152,
      ACC: 138,
      DEX: 178
    },
    Arn: 6000,
    Drop: { Rate: 0.5, Item: 'Charged Jet' },
    Steal: { Rate: 0.25, Item: 'Brass Ring' },
    Type: 'Enemy',
    Available: [ 8 ]
  },
  {
    Name: 'Harbinger',
    Element: 'Dark',
    HP: 650,
    LVL: 72,
    Stats: {
      Base: {
        L: 42.42,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 201,
      MAG: 265,
      PDF: 127,
      MDF: 275,
      SPD: 235,
      ACC: 190,
      DEX: 269
    },
    Arn: 7250,
    Drop: { Rate: 0.5, Item: 'Gold Dust' },
    Steal: { Rate: 0.5, Item: 'Enlight' },
    Type: 'Enemy',
    Available: [ 8 ]
  },
  {
    Name: 'Little Scarlet',
    Element: 'Dark',
    HP: 1500,
    LVL: 73,
    Stats: {
      Base: {
        L: 43.9,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 252,
      MAG: 252,
      PDF: 208,
      MDF: 217,
      SPD: 219,
      ACC: 208,
      DEX: 230
    },
    Arn: 10000,
    Drop: { Rate: 0.4, Item: 'Opal Amulet' },
    Steal: { Rate: 0.25, Item: 'Green Herb' },
    Type: 'Enemy',
    Available: [ 8 ]
  },
  {
    Name: 'Vanrushal',
    Element: 'Dark',
    HP: 4500,
    LVL: 74,
    Stats: {
      Base: {
        L: 45.44,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 345,
      MAG: 306,
      PDF: 211,
      MDF: 231,
      SPD: 249,
      ACC: 215,
      DEX: 215
    },
    Arn: 110000,
    Drop: { Rate: 0.1, Item: 'Darkshield' },
    Steal: { Rate: 0.5, Item: 'Dark Matter' },
    Type: 'Boss',
    Available: [ 8 ]
  },
  {
    Name: 'Merman',
    Element: 'Water',
    HP: 700,
    LVL: 67,
    Stats: {
      Base: {
        L: 35.71,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 196,
      MAG: 217,
      PDF: 151,
      MDF: 187,
      SPD: 178,
      ACC: 187,
      DEX: 157
    },
    Arn: 7200,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 8 ]
  },
  {
    Name: 'Stalker',
    Element: 'Water',
    HP: 550,
    LVL: 66,
    Stats: {
      Base: {
        L: 34.51,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 198,
      MAG: 129,
      PDF: 136,
      MDF: 175,
      SPD: 141,
      ACC: 181,
      DEX: 148
    },
    Arn: 6500,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Brown Herb' },
    Type: 'Enemy',
    Available: [ 8 ]
  },
  {
    Name: 'Deep Spawn',
    Element: 'Water',
    HP: 1000,
    LVL: 67,
    Stats: {
      Base: {
        L: 35.71,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 249,
      MAG: 133,
      PDF: 178,
      MDF: 160,
      SPD: 157,
      ACC: 160,
      DEX: 133
    },
    Arn: 10500,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Green Herb' },
    Type: 'Enemy',
    Available: [ 8 ]
  },
  {
    Name: 'Black Cat',
    Element: 'Dark',
    HP: 2250,
    LVL: 68,
    Stats: {
      Base: {
        L: 36.96,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 258,
      MAG: 267,
      PDF: 240,
      MDF: 175,
      SPD: 194,
      ACC: 177,
      DEX: 175
    },
    Arn: 24000,
    Drop: { Rate: 0.2, Item: 'Gold Dust' },
    Steal: { Rate: 0.12, Item: 'Silver Ring' },
    Type: 'Enemy',
    Available: [ 8 ]
  },
  {
    Name: 'Scylla',
    Element: 'Lightning',
    HP: 1400,
    LVL: 70,
    Stats: {
      Base: {
        L: 39.6,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 227,
      MAG: 227,
      PDF: 188,
      MDF: 195,
      SPD: 197,
      ACC: 188,
      DEX: 178
    },
    Arn: 14500,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Nerveheal' },
    Type: 'Enemy',
    Available: [ 8 ]
  },
  {
    Name: 'Charybdis',
    Element: 'Water',
    HP: 1600,
    LVL: 69,
    Stats: {
      Base: {
        L: 38.26,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 219,
      MAG: 219,
      PDF: 181,
      MDF: 189,
      SPD: 191,
      ACC: 181,
      DEX: 172
    },
    Arn: 14500,
    Drop: { Rate: 0.1, Item: 'Marid Tear' },
    Steal: { Rate: 0.25, Item: 'Marid Tear' },
    Type: 'Enemy',
    Available: [ 8 ]
  },
  {
    Name: 'Marid King',
    Element: 'Water',
    HP: 3000,
    LVL: 68,
    Stats: {
      Base: {
        L: 36.96,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 166,
      MAG: 249,
      PDF: 138,
      MDF: 147,
      SPD: 184,
      ACC: 157,
      DEX: 166
    },
    Arn: 22000,
    Drop: { Rate: 0.1, Item: 'Crystal Orb' },
    Steal: { Rate: 0.5, Item: 'Djinni Shoes' },
    Type: 'Boss',
    Available: [ 8 ]
  },
  {
    Name: 'Fafnir',
    Element: 'Ice',
    HP: 2800,
    LVL: 69,
    Stats: {
      Base: {
        L: 38.26,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 239,
      MAG: 241,
      PDF: 193,
      MDF: 189,
      SPD: 210,
      ACC: 208,
      DEX: 166
    },
    Arn: 22500,
    Drop: { Rate: 0.1, Item: 'Diamond Dust' },
    Steal: { Rate: 0.5, Item: 'Purple Cape' },
    Type: 'Boss',
    Available: [ 8 ]
  },
  {
    Name: 'Left Wing',
    Element: 'Ice',
    HP: 1300,
    LVL: 67,
    Stats: {
      Base: {
        L: 35.71,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 1,
      MAG: 1,
      PDF: 158,
      MDF: 201,
      SPD: 1,
      ACC: 1,
      DEX: 167
    },
    Arn: 0,
    Drop: null,
    Steal: null,
    Type: 'Boss',
    Available: [ 8 ]
  },
  {
    Name: 'Right Wing',
    Element: 'Ice',
    HP: 1300,
    LVL: 67,
    Stats: {
      Base: {
        L: 35.71,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 1,
      MAG: 1,
      PDF: 207,
      MDF: 164,
      SPD: 1,
      ACC: 1,
      DEX: 167
    },
    Arn: 0,
    Drop: null,
    Steal: null,
    Type: 'Boss',
    Available: [ 8 ]
  },
  {
    Name: 'Tlazolteotl',
    Element: 'Fire',
    HP: 3400,
    LVL: 70,
    Stats: {
      Base: {
        L: 39.6,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 269,
      MAG: 247,
      PDF: 233,
      MDF: 197,
      SPD: 178,
      ACC: 178,
      DEX: 138
    },
    Arn: 25000,
    Drop: { Rate: 0.1, Item: 'Inferno' },
    Steal: { Rate: 0.5, Item: 'Haste' },
    Type: 'Boss',
    Available: [ 8 ]
  },
  {
    Name: 'Thanatos',
    Element: 'Dark',
    HP: 3500,
    LVL: 71,
    Stats: {
      Base: {
        L: 40.98,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 331,
      MAG: 184,
      PDF: 186,
      MDF: 219,
      SPD: 202,
      ACC: 202,
      DEX: 163
    },
    Arn: 30000,
    Drop: { Rate: 0.1, Item: 'Purple Herb' },
    Steal: { Rate: 0.5, Item: 'Power Gear' },
    Type: 'Boss',
    Available: [ 8 ]
  },
  {
    Name: 'Phaseshaper',
    Element: 'Light',
    HP: 4000,
    LVL: 72,
    Stats: {
      Base: {
        L: 42.42,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 318,
      MAG: 296,
      PDF: 106,
      MDF: 243,
      SPD: 243,
      ACC: 222,
      DEX: 222
    },
    Arn: 35000,
    Drop: { Rate: 0.1, Item: 'Menu Set #9' },
    Steal: { Rate: 0.5, Item: 'Solar Flare' },
    Type: 'Boss',
    Available: [ 8 ]
  },
  {
    Name: 'Shadow Clan',
    Element: 'Dark',
    HP: 750,
    LVL: 75,
    Stats: {
      Base: {
        L: 47.03,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 230,
      MAG: 162,
      PDF: 188,
      MDF: 223,
      SPD: 289,
      ACC: 235,
      DEX: 223
    },
    Arn: 5600,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Green Herb' },
    Type: 'Enemy',
    Available: [ 8 ]
  },
  {
    Name: 'Shadow Assassin',
    Element: 'Dark',
    HP: 1300,
    LVL: 77,
    Stats: {
      Base: {
        L: 50.38,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 289,
      MAG: 173,
      PDF: 216,
      MDF: 251,
      SPD: 314,
      ACC: 277,
      DEX: 251
    },
    Arn: 12800,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Green Herb' },
    Type: 'Enemy',
    Available: [ 8 ]
  },
  {
    Name: 'Navar',
    Element: 'Lightning',
    HP: 2200,
    LVL: 78,
    Stats: {
      Base: {
        L: 52.14,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 378,
      MAG: 130,
      PDF: 286,
      MDF: 239,
      SPD: 250,
      ACC: 260,
      DEX: 239
    },
    Arn: 16200,
    Drop: { Rate: 0.4, Item: 'Darkstrike' },
    Steal: { Rate: 0.25, Item: 'Thunderstrike' },
    Type: 'Enemy',
    Available: [ 8 ]
  },
  {
    Name: 'Fukubei',
    Element: 'Dark',
    HP: 2000,
    LVL: 83,
    Stats: {
      Base: {
        L: 61.93,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 448,
      MAG: 278,
      PDF: 247,
      MDF: 275,
      SPD: 402,
      ACC: 356,
      DEX: 294
    },
    Arn: 0,
    Drop: null,
    Steal: null,
    Type: 'Boss',
    Available: [ 8 ]
  },
  {
    Name: 'Fukubei',
    Element: 'Fire',
    HP: 2000,
    LVL: 83,
    Stats: {
      Base: {
        L: 61.93,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 427,
      MAG: 356,
      PDF: 278,
      MDF: 278,
      SPD: 325,
      ACC: 309,
      DEX: 278
    },
    Arn: 0,
    Drop: null,
    Steal: null,
    Type: 'Boss',
    Available: [ 8 ]
  },
  {
    Name: 'Fukubei',
    Element: 'Ice',
    HP: 2000,
    LVL: 83,
    Stats: {
      Base: {
        L: 61.93,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 371,
      MAG: 433,
      PDF: 247,
      MDF: 371,
      SPD: 340,
      ACC: 294,
      DEX: 247
    },
    Arn: 0,
    Drop: null,
    Steal: null,
    Type: 'Boss',
    Available: [ 8 ]
  },
  {
    Name: 'Fukubei',
    Element: 'Water',
    HP: 2000,
    LVL: 83,
    Stats: {
      Base: {
        L: 61.93,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 417,
      MAG: 371,
      PDF: 263,
      MDF: 309,
      SPD: 377,
      ACC: 371,
      DEX: 340
    },
    Arn: 0,
    Drop: null,
    Steal: null,
    Type: 'Boss',
    Available: [ 8 ]
  },
  {
    Name: 'Fukubei',
    Element: 'Lightning',
    HP: 2000,
    LVL: 83,
    Stats: {
      Base: {
        L: 61.93,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 433,
      MAG: 263,
      PDF: 247,
      MDF: 247,
      SPD: 433,
      ACC: 309,
      DEX: 309
    },
    Arn: 0,
    Drop: null,
    Steal: null,
    Type: 'Boss',
    Available: [ 8 ]
  },
  {
    Name: 'Fukubei',
    Element: 'Light',
    HP: 2000,
    LVL: 83,
    Stats: {
      Base: {
        L: 61.93,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 479,
      MAG: 278,
      PDF: 278,
      MDF: 294,
      SPD: 408,
      ACC: 359,
      DEX: 278
    },
    Arn: 200000,
    Drop: { Rate: 0.1, Item: 'Battle Plan #18' },
    Steal: null,
    Type: 'Boss',
    Available: [ 8 ]
  },
  {
    Name: 'Demon Trevor',
    Element: 'Dark',
    HP: 7000,
    LVL: 74,
    Stats: {
      Base: {
        L: 45.44,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 329,
      MAG: 249,
      PDF: 236,
      MDF: 174,
      SPD: 220,
      ACC: 245,
      DEX: 172
    },
    Arn: 0,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Gold Badge' },
    Type: 'Boss',
    Available: [ 8 ]
  },
  {
    Name: 'Demon Sick',
    Element: 'Light',
    HP: 6500,
    LVL: 74,
    Stats: {
      Base: {
        L: 45.44,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 295,
      MAG: 272,
      PDF: 184,
      MDF: 240,
      SPD: 270,
      ACC: 222,
      DEX: 193
    },
    Arn: 0,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Gold Ring' },
    Type: 'Boss',
    Available: [ 8 ]
  },
  {
    Name: 'Demon Trevor',
    Element: 'Dark',
    HP: 7000,
    LVL: 72,
    Stats: {
      Base: {
        L: 42.42,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 286,
      MAG: 203,
      PDF: 226,
      MDF: 201,
      SPD: 180,
      ACC: 229,
      DEX: 161
    },
    Arn: 100000,
    Drop: { Rate: 0.1, Item: 'Dark Matter' },
    Steal: { Rate: 0.5, Item: 'Gold Badge' },
    Type: 'Boss',
    Available: [ 8 ]
  },
  {
    Name: 'Demon Sick',
    Element: 'Light',
    HP: 6500,
    LVL: 72,
    Stats: {
      Base: {
        L: 42.42,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 254,
      MAG: 233,
      PDF: 182,
      MDF: 243,
      SPD: 222,
      ACC: 207,
      DEX: 180
    },
    Arn: 80000,
    Drop: { Rate: 0.1, Item: 'Solar Flare' },
    Steal: { Rate: 0.5, Item: 'Gold Ring' },
    Type: 'Boss',
    Available: [ 8 ]
  },
  {
    Name: 'Poltergeist',
    Element: 'Light',
    HP: 1000,
    LVL: 72,
    Stats: {
      Base: {
        L: 42.42,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 190,
      MAG: 214,
      PDF: 205,
      MDF: 212,
      SPD: 243,
      ACC: 212,
      DEX: 190
    },
    Arn: 10500,
    Drop: { Rate: 0.1, Item: 'Memento' },
    Steal: { Rate: 0.25, Item: 'Charged Pearl' },
    Type: 'Enemy',
    Available: [ 8 ]
  },
  {
    Name: 'Eyestalker',
    Element: 'Light',
    HP: 1500,
    LVL: 73,
    Stats: {
      Base: {
        L: 43.9,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 208,
      MAG: 241,
      PDF: 131,
      MDF: 252,
      SPD: 206,
      ACC: 197,
      DEX: 188
    },
    Arn: 11025,
    Drop: { Rate: 0.5, Item: 'Gold Dust' },
    Steal: { Rate: 0.5, Item: 'Green Herb' },
    Type: 'Enemy',
    Available: [ 8 ]
  },
  {
    Name: 'Mara',
    Element: 'Dark',
    HP: 2400,
    LVL: 74,
    Stats: {
      Base: {
        L: 45.44,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 340,
      MAG: 272,
      PDF: 215,
      MDF: 213,
      SPD: 227,
      ACC: 238,
      DEX: 181
    },
    Arn: 36000,
    Drop: null,
    Steal: { Rate: 0.12, Item: 'Rainbow Ore' },
    Type: 'Enemy',
    Available: [ 8 ]
  },
  {
    Name: 'Non-Euclidian Horror',
    Element: 'Dark',
    HP: 1250,
    LVL: 72,
    Stats: {
      Base: {
        L: 42.42,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 190,
      MAG: 201,
      PDF: 148,
      MDF: 212,
      SPD: 212,
      ACC: 212,
      DEX: 190
    },
    Arn: 8000,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Green Herb' },
    Type: 'Enemy',
    Available: [ 8 ]
  },
  {
    Name: 'Mephisto',
    Element: 'Dark',
    HP: 4000,
    LVL: 77,
    Stats: {
      Base: {
        L: 50.38,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 226,
      MAG: 327,
      PDF: 239,
      MDF: 272,
      SPD: 236,
      ACC: 226,
      DEX: 219
    },
    Arn: 175000,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Checkered Robe' },
    Type: 'Boss',
    Available: [ 8 ]
  },
  {
    Name: 'Mustang',
    Element: 'Light',
    HP: 1900,
    LVL: 77,
    Stats: {
      Base: {
        L: 50.38,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 251,
      MAG: 249,
      PDF: 231,
      MDF: 299,
      SPD: 264,
      ACC: 249,
      DEX: 239
    },
    Arn: 19000,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Green Herb' },
    Type: 'Enemy',
    Available: [ 8 ]
  },
  {
    Name: 'Snow Tortoise',
    Element: 'Ice',
    HP: 2000,
    LVL: 78,
    Stats: {
      Base: {
        L: 52.14,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 286,
      MAG: 260,
      PDF: 315,
      MDF: 234,
      SPD: 229,
      ACC: 247,
      DEX: 247
    },
    Arn: 21150,
    Drop: { Rate: 0.8, Item: 'Mithril Bracer' },
    Steal: { Rate: 0.5, Item: 'Green Herb' },
    Type: 'Enemy',
    Available: [ 8 ]
  },
  {
    Name: 'Thunderbeast',
    Element: 'Lightning',
    HP: 3500,
    LVL: 79,
    Stats: {
      Base: {
        L: 53.96,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 445,
      MAG: 350,
      PDF: 269,
      MDF: 299,
      SPD: 245,
      ACC: 277,
      DEX: 215
    },
    Arn: 40000,
    Drop: null,
    Steal: { Rate: 0.12, Item: 'Blink' },
    Type: 'Enemy',
    Available: [ 8 ]
  },
  {
    Name: 'Almenga Elite (Axe)',
    Element: 'Ice',
    HP: 750,
    LVL: 77,
    Stats: {
      Base: {
        L: 50.38,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 201,
      MAG: 201,
      PDF: 214,
      MDF: 251,
      SPD: 256,
      ACC: 214,
      DEX: 214
    },
    Arn: 7800,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Green Herb' },
    Type: 'Enemy',
    Available: [ 8 ]
  },
  {
    Name: 'Almenga Colonel',
    Element: 'Ice',
    HP: 1650,
    LVL: 80,
    Stats: {
      Base: {
        L: 55.85,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 279,
      MAG: 279,
      PDF: 276,
      MDF: 290,
      SPD: 301,
      ACC: 256,
      DEX: 270
    },
    Arn: 11500,
    Drop: { Rate: 0.8, Item: 'Green Herb' },
    Steal: { Rate: 0.5, Item: 'Green Herb' },
    Type: 'Enemy',
    Available: [ 8 ]
  },
  {
    Name: 'Grand Conjurer',
    Element: 'Ice',
    HP: 2500,
    LVL: 79,
    Stats: {
      Base: {
        L: 53.96,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 259,
      MAG: 337,
      PDF: 175,
      MDF: 283,
      SPD: 210,
      ACC: 237,
      DEX: 234
    },
    Arn: 40000,
    Drop: { Rate: 0.5, Item: 'Opal Amulet' },
    Steal: { Rate: 0.25, Item: 'Rainbow Ore' },
    Type: 'Enemy',
    Available: [ 8 ]
  },
  {
    Name: 'Lightning Bolt',
    Element: 'Lightning',
    HP: 1000,
    LVL: 77,
    Stats: {
      Base: {
        L: 50.38,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 251,
      MAG: 201,
      PDF: 214,
      MDF: 226,
      SPD: 314,
      ACC: 226,
      DEX: 251
    },
    Arn: 3000,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Lightning Rod' },
    Type: 'Enemy',
    Available: [ 8 ]
  },
  {
    Name: 'Dracoknight',
    Element: 'Light',
    HP: 3000,
    LVL: 81,
    Stats: {
      Base: {
        L: 57.81,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 375,
      MAG: 317,
      PDF: 355,
      MDF: 289,
      SPD: 260,
      ACC: 289,
      DEX: 228
    },
    Arn: 50000,
    Drop: { Rate: 0.5, Item: 'Crystal Plate' },
    Steal: { Rate: 0.12, Item: 'Crystal Bracer' },
    Type: 'Enemy',
    Available: [ 8 ]
  },
  {
    Name: 'Leonius',
    Element: 'Dark',
    HP: 2000,
    LVL: 78,
    Stats: {
      Base: {
        L: 52.14,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 203,
      MAG: 289,
      PDF: 234,
      MDF: 247,
      SPD: 203,
      ACC: 216,
      DEX: 224
    },
    Arn: 200000,
    Drop: { Rate: 0.1, Item: 'Battle Plan #4' },
    Steal: null,
    Type: 'Boss',
    Available: [ 8 ]
  },
  {
    Name: 'Almenga Elite (Bow)',
    Element: 'Ice',
    HP: 800,
    LVL: 78,
    Stats: {
      Base: {
        L: 52.14,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 216,
      MAG: 211,
      PDF: 229,
      MDF: 299,
      SPD: 268,
      ACC: 239,
      DEX: 218
    },
    Arn: 9450,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Green Herb' },
    Type: 'Enemy',
    Available: [ 8 ]
  },
  {
    Name: 'Almenga General',
    Element: 'Ice',
    HP: 2250,
    LVL: 83,
    Stats: {
      Base: {
        L: 61.93,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 340,
      MAG: 346,
      PDF: 309,
      MDF: 325,
      SPD: 337,
      ACC: 287,
      DEX: 291
    },
    Arn: 15000,
    Drop: { Rate: 0.5, Item: 'Crystal Bracer' },
    Steal: { Rate: 0.5, Item: 'Green Herb' },
    Type: 'Enemy',
    Available: [ 8 ]
  },
  {
    Name: 'Apocalypse',
    Element: 'Dark',
    HP: 1800,
    LVL: 85,
    Stats: {
      Base: {
        L: 66.34,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 464,
      MAG: 447,
      PDF: 354,
      MDF: 361,
      SPD: 285,
      ACC: 338,
      DEX: 248
    },
    Arn: 63000,
    Drop: { Rate: 0.5, Item: 'Darkstrike' },
    Steal: { Rate: 0.5, Item: 'Balance' },
    Type: 'Enemy',
    Available: [ 8 ]
  },
  {
    Name: 'Gudrun',
    Element: 'Ice',
    HP: 4000,
    LVL: 86,
    Stats: {
      Base: {
        L: 68.66,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 446,
      MAG: 439,
      PDF: 343,
      MDF: 377,
      SPD: 350,
      ACC: 319,
      DEX: 291
    },
    Arn: 250000,
    Drop: { Rate: 0.1, Item: 'Crystal Battlehelm' },
    Steal: { Rate: 0.5, Item: 'Valkyrie Dress' },
    Type: 'Boss',
    Available: [ 8 ]
  },
  {
    Name: 'Red Dracoknight',
    Element: 'Fire',
    HP: 4500,
    LVL: 87,
    Stats: {
      Base: {
        L: 71.06,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 426,
      MAG: 330,
      PDF: 408,
      MDF: 344,
      SPD: 309,
      ACC: 330,
      DEX: 287
    },
    Arn: 52000,
    Drop: { Rate: 0.5, Item: 'Crystal Plate' },
    Steal: { Rate: 0.12, Item: 'Crystal Orb' },
    Type: 'Enemy',
    Available: [ 8 ]
  },
  {
    Name: 'Sirius Lux',
    Element: 'Light',
    HP: 5000,
    LVL: 88,
    Stats: {
      Base: {
        L: 73.55,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 183,
      MAG: 422,
      PDF: 319,
      MDF: 441,
      SPD: 220,
      ACC: 183,
      DEX: 242
    },
    Arn: 66000,
    Drop: { Rate: 0.3, Item: 'Solar Flare' },
    Steal: { Rate: 0.25, Item: 'Heal' },
    Type: 'Enemy',
    Available: [ 8 ]
  },
  {
    Name: 'Starshine',
    Element: 'Light',
    HP: 1500,
    LVL: 84,
    Stats: {
      Base: {
        L: 64.09,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 381,
      MAG: 349,
      PDF: 256,
      MDF: 352,
      SPD: 307,
      ACC: 310,
      DEX: 291
    },
    Arn: 0,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Gold Dust' },
    Type: 'Enemy',
    Available: [ 8 ]
  },
  {
    Name: 'Brunhild',
    Element: 'Light',
    HP: 6000,
    LVL: 88,
    Stats: {
      Base: {
        L: 73.55,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 478,
      MAG: 437,
      PDF: 360,
      MDF: 364,
      SPD: 525,
      ACC: 360,
      DEX: 327
    },
    Arn: 0,
    Drop: { Rate: 0.1, Item: 'Purple Herb' },
    Steal: null,
    Type: 'Boss',
    Available: [ 8 ]
  },
  {
    Name: 'Hand of Fate',
    Element: 'Light',
    HP: 8000,
    LVL: 90,
    Stats: {
      Base: {
        L: 78.79,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 531,
      MAG: 512,
      PDF: 382,
      MDF: 413,
      SPD: 480,
      ACC: 393,
      DEX: 354
    },
    Arn: 0,
    Drop: null,
    Steal: null,
    Type: 'Boss',
    Available: [ 8 ]
  },
  {
    Name: 'Black Finger',
    Element: 'Dark',
    HP: 1500,
    LVL: 86,
    Stats: {
      Base: {
        L: 68.66,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 408,
      MAG: 274,
      PDF: 274,
      MDF: 377,
      SPD: 171,
      ACC: 332,
      DEX: 274
    },
    Arn: 0,
    Drop: null,
    Steal: null,
    Type: 'Boss',
    Available: [ 8 ]
  },
  {
    Name: 'Red Finger',
    Element: 'Fire',
    HP: 1500,
    LVL: 86,
    Stats: {
      Base: {
        L: 68.66,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 408,
      MAG: 274,
      PDF: 274,
      MDF: 377,
      SPD: 171,
      ACC: 332,
      DEX: 274
    },
    Arn: 0,
    Drop: null,
    Steal: null,
    Type: 'Boss',
    Available: [ 8 ]
  },
  {
    Name: 'White Finger',
    Element: 'Ice',
    HP: 1500,
    LVL: 86,
    Stats: {
      Base: {
        L: 68.66,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 408,
      MAG: 274,
      PDF: 274,
      MDF: 377,
      SPD: 171,
      ACC: 332,
      DEX: 274
    },
    Arn: 0,
    Drop: null,
    Steal: null,
    Type: 'Boss',
    Available: [ 8 ]
  },
  {
    Name: 'Blue Finger',
    Element: 'Water',
    HP: 1500,
    LVL: 86,
    Stats: {
      Base: {
        L: 68.66,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 408,
      MAG: 274,
      PDF: 274,
      MDF: 377,
      SPD: 171,
      ACC: 332,
      DEX: 274
    },
    Arn: 0,
    Drop: null,
    Steal: null,
    Type: 'Boss',
    Available: [ 8 ]
  },
  {
    Name: 'Yellow Finger',
    Element: 'Lightning',
    HP: 1500,
    LVL: 86,
    Stats: {
      Base: {
        L: 68.66,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 408,
      MAG: 274,
      PDF: 274,
      MDF: 377,
      SPD: 171,
      ACC: 332,
      DEX: 274
    },
    Arn: 0,
    Drop: null,
    Steal: null,
    Type: 'Boss',
    Available: [ 8 ]
  },
  {
    Name: 'Hugin',
    Element: 'Fire',
    HP: 6500,
    LVL: 90,
    Stats: {
      Base: {
        L: 78.79,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 551,
      MAG: 413,
      PDF: 472,
      MDF: 358,
      SPD: 358,
      ACC: 342,
      DEX: 311
    },
    Arn: 250000,
    Drop: { Rate: 0.1, Item: 'Battle Plan #22' },
    Steal: { Rate: 0.5, Item: 'Asgard Plate' },
    Type: 'Boss',
    Available: [ 'Post Game' ]
  },
  {
    Name: 'Munin',
    Element: 'Lightning',
    HP: 6500,
    LVL: 90,
    Stats: {
      Base: {
        L: 78.79,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 500,
      MAG: 543,
      PDF: 354,
      MDF: 453,
      SPD: 429,
      ACC: 374,
      DEX: 366
    },
    Arn: 250000,
    Drop: null,
    Steal: { Rate: 0.5, Item: 'Asgard Robe' },
    Type: 'Boss',
    Available: [ 'Post Game' ]
  },
  {
    Name: 'Shadow Legionaire',
    Element: 'Dark',
    HP: 5000,
    LVL: 90,
    Stats: {
      Base: {
        L: 78.79,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 374,
      MAG: 334,
      PDF: 374,
      MDF: 393,
      SPD: 354,
      ACC: 334,
      DEX: 334
    },
    Arn: 50000,
    Drop: null,
    Steal: null,
    Type: 'Enemy',
    Available: [ 'Post Game' ]
  },
  {
    Name: 'Shadow Daniel',
    Element: 'Light',
    HP: 10000,
    LVL: 90,
    Stats: {
      Base: {
        L: 78.79,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 531,
      MAG: 512,
      PDF: 374,
      MDF: 531,
      SPD: 453,
      ACC: 374,
      DEX: 354
    },
    Arn: 999999,
    Drop: { Rate: 0.1, Item: "Arch-Angel's Halo" },
    Steal: null,
    Type: 'Boss',
    Available: [ 'Post Game' ]
  },
  {
    Name: 'Shadow Erin',
    Element: 'Fire',
    HP: 12500,
    LVL: 90,
    Stats: {
      Base: {
        L: 78.79,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 571,
      MAG: 374,
      PDF: 492,
      MDF: 393,
      SPD: 480,
      ACC: 393,
      DEX: 386
    },
    Arn: 999999,
    Drop: { Rate: 0.1, Item: 'Boots of Hermes' },
    Steal: null,
    Type: 'Boss',
    Available: [ 'Post Game' ]
  },
  {
    Name: 'Shadow Eander',
    Element: 'Lightning',
    HP: 15000,
    LVL: 90,
    Stats: {
      Base: {
        L: 78.79,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 669,
      MAG: 453,
      PDF: 512,
      MDF: 413,
      SPD: 543,
      ACC: 393,
      DEX: 378
    },
    Arn: 999999,
    Drop: { Rate: 0.1, Item: 'Crystalline Crown' },
    Steal: null,
    Type: 'Boss',
    Available: [ 'Post Game' ]
  },
  {
    Name: 'Shadow Tarlia',
    Element: 'Ice',
    HP: 15000,
    LVL: 90,
    Stats: {
      Base: {
        L: 78.79,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 689,
      MAG: 433,
      PDF: 630,
      MDF: 433,
      SPD: 531,
      ACC: 413,
      DEX: 354
    },
    Arn: 999999,
    Drop: { Rate: 0.1, Item: 'Zeus Mail' },
    Steal: null,
    Type: 'Boss',
    Available: [ 'Post Game' ]
  },
  {
    Name: 'Shadow Ljusalf',
    Element: 'Water',
    HP: 20000,
    LVL: 90,
    Stats: {
      Base: {
        L: 78.79,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 590,
      MAG: 590,
      PDF: 433,
      MDF: 551,
      SPD: 571,
      ACC: 354,
      DEX: 362
    },
    Arn: 999999,
    Drop: { Rate: 0.1, Item: "Lord-Sorceror's Gown" },
    Steal: null,
    Type: 'Boss',
    Available: [ 'Post Game' ]
  },
  {
    Name: 'Shadow Yan Angwa',
    Element: 'Dark',
    HP: 25000,
    LVL: 90,
    Stats: {
      Base: {
        L: 78.79,
        STR: 75,
        MAG: 100,
        PDF: 100,
        MDF: 85,
        SPD: 80,
        ACC: 75,
        DEX: 90
      },
      STR: 709,
      MAG: 630,
      PDF: 512,
      MDF: 512,
      SPD: 630,
      ACC: 433,
      DEX: 374
    },
    Arn: 999999,
    Drop: { Rate: 0.1, Item: "Mashimizu's Robe" },
    Steal: null,
    Type: 'Boss',
    Available: [ 'Post Game' ]
  }
]
