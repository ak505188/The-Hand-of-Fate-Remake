const relations = [
  {
    name: 'Alex',
    relations: [
      {
        character: 'King',
        rank: 'B',
      },
      {
        character: 'Klaus',
        rank: 'B',
      },
      {
        character: 'Richard',
        rank: 'B'
      },
    ]
  },
  {
    name: 'Angel',
    relations: [
      {
        character: 'Jovian',
        rank: 'A',
      },
      {
        character: 'Daniel',
        rank: 'B',
      },
      {
        character: 'Ayara',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Avelion',
    relations: [
      {
        character: 'Deus',
        rank: 'B',
      },
      {
        character: 'Sef',
        rank: 'C',
      },
      {
        character: 'Luther',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Ayara',
    relations: [
      {
        character: 'Daniel',
        rank: 'A',
      },
      {
        character: 'Angel',
        rank: 'C',
      },
      {
        character: 'Rorschach',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Bartolli',
    relations: [
      {
        character: 'Hawk',
        rank: 'B',
      },
      {
        character: 'Nikolai',
        rank: 'C',
      },
      {
        character: 'Teej',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Bast',
    relations: [
      {
        character: 'Shiro',
        rank: 'A',
      },
      {
        character: 'Bruce',
        rank: 'B',
      },
      {
        character: 'Keyser',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Beau',
    relations: [
      {
        character: 'Wilona',
        rank: 'B',
      },
      {
        character: 'Carson',
        rank: 'B',
      },
      {
        character: 'Shiro',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Bruce',
    relations: [
      {
        character: 'Keyser',
        rank: 'B',
      },
      {
        character: 'Harvey',
        rank: 'B',
      },
      {
        character: 'Bast',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Carson',
    relations: [
      {
        character: 'Ryan',
        rank: 'A',
      },
      {
        character: 'Beau',
        rank: 'B',
      },
      {
        character: 'Col',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Cid',
    relations: [
      {
        character: 'Teej',
        rank: 'B',
      },
      {
        character: 'Tiffany',
        rank: 'C',
      },
      {
        character: 'Venkal',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Col',
    relations: [
      {
        character: 'Joe',
        rank: 'B',
      },
      {
        character: 'Sally',
        rank: 'C',
      },
      {
        character: 'Carson',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Daniel',
    relations: [
      {
        character: 'Jovian',
        rank: 'A',
      },
      {
        character: 'Angel',
        rank: 'B',
      },
      {
        character: 'Ljusalf',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Darwin',
    relations: [
      {
        character: 'Marian',
        rank: 'A',
      },
      {
        character: 'Wilona',
        rank: 'B',
      },
      {
        character: 'Deke',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Deke',
    relations: [
      {
        character: 'Darwin',
        rank: 'C',
      },
      {
        character: 'Harvey',
        rank: 'C',
      },
      {
        character: 'Joe',
        rank: 'F'
      },
    ]
  },
  {
    name: 'Derek',
    relations: [
      {
        character: 'Shin',
        rank: 'B',
      },
      {
        character: 'Hawk',
        rank: 'C',
      },
      {
        character: 'Myst',
        rank: 'F'
      },
    ]
  },
  {
    name: 'Deus',
    relations: [
      {
        character: 'Avelion',
        rank: 'B',
      },
      {
        character: 'Luther',
        rank: 'B',
      },
      {
        character: 'Orlando',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Eander',
    relations: [
      {
        character: 'Jovian',
        rank: 'B',
      },
      {
        character: 'Keyser',
        rank: 'B',
      },
      {
        character: 'Bruce',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Erin',
    relations: [
      {
        character: 'Ryan',
        rank: 'A',
      },
      {
        character: 'Jasper',
        rank: 'B',
      },
      {
        character: 'Rock',
        rank: 'F'
      },
    ]
  },
  {
    name: 'Fitch',
    relations: [
      {
        character: 'Ljusalf',
        rank: 'A',
      },
      {
        character: 'Naja',
        rank: 'C',
      },
      {
        character: 'Sally',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Francesca',
    relations: [
      {
        character: 'Shin',
        rank: 'A',
      },
      {
        character: 'Vanrushal',
        rank: 'B',
      },
      {
        character: 'Soth',
        rank: 'B'
      },
    ]
  },
  {
    name: 'Frore',
    relations: [
      {
        character: 'Jasper',
        rank: 'B',
      },
      {
        character: 'Mike',
        rank: 'B',
      },
      {
        character: 'Ice',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Gilbert',
    relations: [
      {
        character: 'Rorschach',
        rank: 'B',
      },
      {
        character: 'Yomiko',
        rank: 'B',
      },
      {
        character: 'Tong Wu',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Griever',
    relations: [
      {
        character: 'Klaus',
        rank: 'A',
      },
      {
        character: 'Tarlia',
        rank: 'B',
      },
      {
        character: 'Petra',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Harvey',
    relations: [
      {
        character: 'Deke',
        rank: 'B',
      },
      {
        character: 'Nikolai',
        rank: 'C',
      },
      {
        character: 'Eander',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Hawk',
    relations: [
      {
        character: 'Bartolli',
        rank: 'B',
      },
      {
        character: 'Derek',
        rank: 'C',
      },
      {
        character: 'Sormaus',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Ice',
    relations: [
      {
        character: 'Orlando',
        rank: 'C',
      },
      {
        character: 'Frore',
        rank: 'C',
      },
      {
        character: 'Avelion',
        rank: 'F'
      },
    ]
  },
  {
    name: 'Jasper',
    relations: [
      {
        character: 'Erin',
        rank: 'A',
      },
      {
        character: 'Ayara',
        rank: 'B',
      },
      {
        character: 'Merrick',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Joe',
    relations: [
      {
        character: 'Col',
        rank: 'B',
      },
      {
        character: 'Reod',
        rank: 'C',
      },
      {
        character: 'Deke',
        rank: 'F'
      },
    ]
  },
  {
    name: 'Johnny',
    relations: [
      {
        character: 'King',
        rank: 'A',
      },
      {
        character: 'Tiffany',
        rank: 'B',
      },
      {
        character: 'Mai',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Jovian',
    relations: [
      {
        character: 'Angel',
        rank: 'A',
      },
      {
        character: 'Daniel',
        rank: 'A',
      },
      {
        character: 'Eander',
        rank: 'B'
      },
    ]
  },
  {
    name: 'Keyser',
    relations: [
      {
        character: 'Eander',
        rank: 'B',
      },
      {
        character: 'Jovian',
        rank: 'C',
      },
      {
        character: 'Bast',
        rank: 'C'
      },
    ]
  },
  {
    name: 'King',
    relations: [
      {
        character: 'Alex',
        rank: 'A',
      },
      {
        character: 'Johnny',
        rank: 'A',
      },
      {
        character: 'Klaus',
        rank: 'B'
      },
    ]
  },
  {
    name: 'Klaus',
    relations: [
      {
        character: 'Alex',
        rank: 'A',
      },
      {
        character: 'Griever',
        rank: 'A',
      },
      {
        character: 'King',
        rank: 'B'
      },
    ]
  },
  {
    name: 'Ljusalf',
    relations: [
      {
        character: 'Ryan',
        rank: 'B',
      },
      {
        character: 'Fitch',
        rank: 'C',
      },
      {
        character: 'Naja',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Luther',
    relations: [
      {
        character: 'Deus',
        rank: 'A',
      },
      {
        character: 'Avelion',
        rank: 'C',
      },
      {
        character: 'Vanrushal',
        rank: 'F'
      },
    ]
  },
  {
    name: 'Mai',
    relations: [
      {
        character: 'Marian',
        rank: 'B',
      },
      {
        character: 'Myst',
        rank: 'C',
      },
      {
        character: 'Yan Angwa',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Mandala',
    relations: [
      {
        character: 'Merrick',
        rank: 'B',
      },
      {
        character: 'Stromgaard',
        rank: 'C',
      },
      {
        character: 'Nomad',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Marcello',
    relations: [
      {
        character: 'Joe',
        rank: 'C',
      },
      {
        character: 'Reod',
        rank: 'C',
      },
      {
        character: 'Sef',
        rank: 'F'
      },
    ]
  },
  {
    name: 'Marian',
    relations: [
      {
        character: 'Nomad',
        rank: 'A',
      },
      {
        character: 'Mai',
        rank: 'B',
      },
      {
        character: 'Ljusalf',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Meiko',
    relations: [
      {
        character: 'Yan Angwa',
        rank: 'B',
      },
      {
        character: 'Francesca',
        rank: 'B',
      },
      {
        character: 'Tong Wu',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Merrick',
    relations: [
      {
        character: 'Erin',
        rank: 'B',
      },
      {
        character: 'Mandala',
        rank: 'B',
      },
      {
        character: 'Ryan',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Midian',
    relations: [
      {
        character: 'Ljusalf',
        rank: 'B',
      },
      {
        character: 'Myst',
        rank: 'C',
      },
      {
        character: 'Royston',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Mike',
    relations: [
      {
        character: 'Outsider',
        rank: 'A',
      },
      {
        character: 'Paris',
        rank: 'C',
      },
      {
        character: 'Jasper',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Myst',
    relations: [
      {
        character: 'Derek',
        rank: 'B',
      },
      {
        character: 'Midian',
        rank: 'C',
      },
      {
        character: 'Yan Angwa',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Naja',
    relations: [
      {
        character: 'Ljusalf',
        rank: 'B',
      },
      {
        character: 'Richard',
        rank: 'C',
      },
      {
        character: 'Fitch',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Nashal',
    relations: [
      {
        character: 'Nomad',
        rank: 'B',
      },
      {
        character: 'Frore',
        rank: 'C',
      },
      {
        character: 'Orlando',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Nikolai',
    relations: [
      {
        character: 'Stromgaard',
        rank: 'B',
      },
      {
        character: 'Frore',
        rank: 'C',
      },
      {
        character: 'Venkal',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Nomad',
    relations: [
      {
        character: 'Marian',
        rank: 'A',
      },
      {
        character: 'Nashal',
        rank: 'B',
      },
      {
        character: 'Mandala',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Orlando',
    relations: [
      {
        character: 'Ice',
        rank: 'B',
      },
      {
        character: 'Deus',
        rank: 'C',
      },
      {
        character: 'Nashal',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Outsider',
    relations: [
      {
        character: 'Mike',
        rank: 'A',
      },
      {
        character: 'Paris',
        rank: 'B',
      },
      {
        character: 'Sormaus',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Paris',
    relations: [
      {
        character: 'Outsider',
        rank: 'B',
      },
      {
        character: 'Petra',
        rank: 'C',
      },
      {
        character: 'Stromgaard',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Petra',
    relations: [
      {
        character: 'Erin',
        rank: 'B',
      },
      {
        character: 'Tarlia',
        rank: 'B',
      },
      {
        character: 'Ayara',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Reod',
    relations: [
      {
        character: 'Joe',
        rank: 'B',
      },
      {
        character: 'Marcello',
        rank: 'B',
      },
      {
        character: 'Rorschach',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Richard',
    relations: [
      {
        character: 'Ljusalf',
        rank: 'B',
      },
      {
        character: 'Alex',
        rank: 'B',
      },
      {
        character: 'Naja',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Rock',
    relations: [
      {
        character: 'Paris',
        rank: 'B',
      },
      {
        character: 'Sormaus',
        rank: 'C',
      },
      {
        character: 'Erin',
        rank: 'F'
      },
    ]
  },
  {
    name: 'Rorschach',
    relations: [
      {
        character: 'Gilbert',
        rank: 'B',
      },
      {
        character: 'Yomiko',
        rank: 'B',
      },
      {
        character: 'Nashal',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Royston',
    relations: [
      {
        character: 'Ryan',
        rank: 'B',
      },
      {
        character: 'Venkal',
        rank: 'C',
      },
      {
        character: 'Midian',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Ryan',
    relations: [
      {
        character: 'Erin',
        rank: 'B',
      },
      {
        character: 'Ljusalf',
        rank: 'B',
      },
      {
        character: 'Carson',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Sally',
    relations: [
      {
        character: 'Ayara',
        rank: 'A',
      },
      {
        character: 'Mandala',
        rank: 'C',
      },
      {
        character: 'Shiro',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Sef',
    relations: [
      {
        character: 'Soth',
        rank: 'A',
      },
      {
        character: 'Marcello',
        rank: 'F',
      },
      {
        character: 'Shin',
        rank: 'F'
      },
    ]
  },
  {
    name: 'Shadfork',
    relations: [
      {
        character: 'Tong Wu',
        rank: 'A',
      },
      {
        character: 'Rock',
        rank: 'C',
      },
      {
        character: 'Keyser',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Shin',
    relations: [
      {
        character: 'Soth',
        rank: 'C',
      },
      {
        character: 'Myst',
        rank: 'C',
      },
      {
        character: 'Yan Angwa',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Shiro',
    relations: [
      {
        character: 'Bast',
        rank: 'A',
      },
      {
        character: 'Sef',
        rank: 'B',
      },
      {
        character: 'Jasper',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Sormaus',
    relations: [
      {
        character: 'Shadfork',
        rank: 'C',
      },
      {
        character: 'Rock',
        rank: 'C',
      },
      {
        character: 'Outsider',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Soth',
    relations: [
      {
        character: 'Sef',
        rank: 'A',
      },
      {
        character: 'Shin',
        rank: 'C',
      },
      {
        character: 'Vanrushal',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Stromgaard',
    relations: [
      {
        character: 'Mandala',
        rank: 'B',
      },
      {
        character: 'Col',
        rank: 'C',
      },
      {
        character: 'Nikolai',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Tarlia',
    relations: [
      {
        character: 'Griever',
        rank: 'B',
      },
      {
        character: 'Petra',
        rank: 'C',
      },
      {
        character: 'Rock',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Teej',
    relations: [
      {
        character: 'Tiffany',
        rank: 'A',
      },
      {
        character: 'Cid',
        rank: 'C',
      },
      {
        character: 'Bartolli',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Tiffany',
    relations: [
      {
        character: 'Teej',
        rank: 'A',
      },
      {
        character: 'Meiko',
        rank: 'C',
      },
      {
        character: 'Mai',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Tong Wu',
    relations: [
      {
        character: 'Shadfork',
        rank: 'A',
      },
      {
        character: 'Shiro',
        rank: 'B',
      },
      {
        character: 'Gilbert',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Vanrushal',
    relations: [
      {
        character: 'Francesca',
        rank: 'B',
      },
      {
        character: 'Luther',
        rank: 'C',
      },
      {
        character: 'Soth',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Venkal',
    relations: [
      {
        character: 'Royston',
        rank: 'B',
      },
      {
        character: 'Wilona',
        rank: 'C',
      },
      {
        character: 'Nikolai',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Wilona',
    relations: [
      {
        character: 'Johnny',
        rank: 'A',
      },
      {
        character: 'Meiko',
        rank: 'C',
      },
      {
        character: 'Darwin',
        rank: 'C'
      },
    ]
  },
  {
    name: 'Yan Angwa',
    relations: [
      {
        character: 'Daniel',
        rank: 'C',
      },
      {
        character: 'Nashal',
        rank: 'F',
      },
      {
        character: 'Meiko',
        rank: 'F'
      },
    ]
  },
  {
    name: 'Yomiko',
    relations: [
      {
        character: 'Gilbert',
        rank: 'A',
      },
      {
        character: 'Rorschach',
        rank: 'B',
      },
      {
        character: 'Johnny',
        rank: 'C'
      },
    ]
  }
]

export default relations;
