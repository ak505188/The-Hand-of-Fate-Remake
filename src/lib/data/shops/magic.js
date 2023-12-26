import Elements from '$lib/data/elements.js'

const Magic = [
  {
    town: "Alfheim",
    items: [
      { element: Elements.Light, name: 'Mend', cost: 100 },
      { element: Elements.Light, name: 'Lightray', cost: 80 },
      { element: Elements.Fire, name: 'Spark', cost: 80 },
      { element: Elements.Water, name: 'Splash', cost: 80 },
    ]
  },
  {
    town: "Bayside Town",
    items: [
      { element: Elements.Light, name: 'Mend', cost: 100 },
      { element: Elements.Dark, name: 'Shadowcast', cost: 80 },
    ]
  },
  {
    town: "Harlinton I",
    items: [
      { element: Elements.Light, name: 'Lightray', cost: 80 },
      { element: Elements.Ice, name: 'Icicle', cost: 80 },
      { element: Elements.Lightning, name: 'Lightning', cost: 80 },
    ]
  },
  {
    town: "Mayfall City",
    items: [
      { element: Elements.Light, name: 'Mend', cost: 100 },
      { element: Elements.Light, name: 'Lightray', cost: 80 },
      { element: Elements.Dark, name: 'Shadowcast', cost: 80 },
      { element: Elements.Fire, name: 'Spark', cost: 80 },
      { element: Elements.Ice, name: 'Icicle', cost: 80 },
      { element: Elements.Water, name: 'Splash', cost: 80 },
      { element: Elements.Lightning, name: 'Lightning', cost: 80 },
    ]
  },
  {
    town: "Credence",
    items: [
      { element: Elements.Light, name: 'Mend', cost: 100 },
      { element: Elements.Light, name: 'Lightray', cost: 80 },
      { element: Elements.Dark, name: 'Shadowcast', cost: 80 },
      { element: Elements.Fire, name: 'Spark', cost: 80 },
      { element: Elements.Ice, name: 'Icicle', cost: 80 },
      { element: Elements.Water, name: 'Splash', cost: 80 },
      { element: Elements.Lightning, name: 'Lightning', cost: 80 },
    ]
  },
  {
    town: "Matrech State Capital",
    items: [
      { element: Elements.Light, name: 'Neutralize', cost: 250 },
      { element: Elements.Dark, name: 'Memorial', cost: 250 },
      { element: Elements.Fire, name: 'Vigor', cost: 250 },
      { element: Elements.Ice, name: 'Clearsight', cost: 250 },
      { element: Elements.Water, name: 'Muscleheal', cost: 250 },
      { element: Elements.Lightning, name: 'Noise', cost: 250 },
    ]
  },
  {
    town: "Bergstadt",
    items: [
      { element: Elements.Light, name: 'Mend-All', cost: 2000 },
      { element: Elements.Light, name: 'Neutralize', cost: 250 },
      { element: Elements.Dark, name: 'Memorial', cost: 250 },
      { element: Elements.Fire, name: 'Vigor', cost: 250 },
      { element: Elements.Ice, name: 'Clearsight', cost: 250 },
      { element: Elements.Water, name: 'Muscleheal', cost: 250 },
      { element: Elements.Lightning, name: 'Noise', cost: 250 },
      { element: Elements.Light, name: 'Mend', cost: 100 },
    ]
  },
  {
    town: "Sibet Town",
    items: [
      { element: Elements.Light, name: 'Photon Beam', cost: 7500 },
      { element: Elements.Dark, name: 'Eclipse', cost: 7500 },
      { element: Elements.Fire, name: 'Fireball', cost: 7500 },
      { element: Elements.Ice, name: 'Frostwave', cost: 7500 },
      { element: Elements.Water, name: 'Waterfall', cost: 7500 },
      { element: Elements.Lightning, name: 'Thunderbolt', cost: 7500 },
    ]
  },
  {
    town: "Cento Temple",
    items: [
      { element: Elements.Light, name: 'Balance', cost: 5000 },
      { element: Elements.Dark, name: 'Enlight', cost: 5000 },
      { element: Elements.Fire, name: 'Melt', cost: 5000 },
      { element: Elements.Ice, name: 'Clearmind', cost: 5000 },
      { element: Elements.Water, name: 'Nerveheal', cost: 5000 },
      { element: Elements.Lightning, name: 'Alarm', cost: 5000 },
      { element: Elements.Light, name: 'Restore', cost: 7000 },
    ]
  },
  {
    town: "Harlinton II",
    items: [
      { element: Elements.Light, name: 'Lightstrike', cost: 10000 },
      { element: Elements.Dark, name: 'Darkstrike', cost: 10000 },
      { element: Elements.Fire, name: 'Firestrike', cost: 10000 },
      { element: Elements.Ice, name: 'Icestrike', cost: 10000 },
      { element: Elements.Water, name: 'Waterstrike', cost: 10000 },
      { element: Elements.Lightning, name: 'Lightningstrike', cost: 10000 },
      { element: Elements.Light, name: 'Photon Beam', cost: 7500 },
      { element: Elements.Dark, name: 'Eclipse', cost: 7500 },
      { element: Elements.Fire, name: 'Fireball', cost: 7500 },
      { element: Elements.Ice, name: 'Frostwave', cost: 7500 },
      { element: Elements.Water, name: 'Waterfall', cost: 7500 },
      { element: Elements.Lightning, name: 'Thunderbolt', cost: 7500 },
    ]
  },
  {
    town: "Jargo Port City*",
    items: [
      { element: Elements.Light, name: 'Cure', cost: 12500 },
      { element: Elements.Light, name: 'Restore', cost: 7000 },
      { element: Elements.Light, name: 'Mend-All', cost: 2000 },
      { element: Elements.Light, name: 'Mend', cost: 100 },
    ]
  },
  {
    town: "Ashton Port",
    items: [
      { element: Elements.Light, name: 'Lightshield', cost: 17500 },
      { element: Elements.Dark, name: 'Darkshield', cost: 17500 },
      { element: Elements.Fire, name: 'Fireshield', cost: 17500 },
      { element: Elements.Ice, name: 'Iceshield', cost: 17500 },
      { element: Elements.Water, name: 'Watershield', cost: 17500 },
      { element: Elements.Lightning, name: 'Lightningshield', cost: 17500 },
      { element: Elements.Light, name: 'Lightstrike', cost: 10000 },
      { element: Elements.Dark, name: 'Darkstrike', cost: 10000 },
      { element: Elements.Fire, name: 'Firestrike', cost: 10000 },
      { element: Elements.Ice, name: 'Icestrike', cost: 10000 },
      { element: Elements.Water, name: 'Waterstrike', cost: 10000 },
      { element: Elements.Lightning, name: 'Lightningstrike', cost: 10000 },
    ]
  },
  {
    town: "Tal Gren",
    items: [
      { element: Elements.Light, name: 'Regen', cost: 32000 },
      { element: Elements.Dark, name: 'Lock', cost: 32000 },
      { element: Elements.Fire, name: 'Haste', cost: 32000 },
      { element: Elements.Ice, name: 'Barrier', cost: 32000 },
      { element: Elements.Water, name: 'Shield', cost: 32000 },
      { element: Elements.Lightning, name: 'Blink', cost: 32000 },
      { element: Elements.Light, name: 'Cure-All', cost: 30000 },
      { element: Elements.Light, name: 'Cure', cost: 12500 },
    ]
  },
  {
    town: "St. Reinard",
    items: [
      { element: Elements.Light, name: 'Heal', cost: 75000 },
      { element: Elements.Light, name: 'Regen', cost: 32000 },
      { element: Elements.Dark, name: 'Lock', cost: 32000 },
      { element: Elements.Fire, name: 'Haste', cost: 32000 },
      { element: Elements.Ice, name: 'Barrier', cost: 32000 },
      { element: Elements.Water, name: 'Shield', cost: 32000 },
      { element: Elements.Lightning, name: 'Blink', cost: 32000 },
      { element: Elements.Light, name: 'Cure-All', cost: 30000 },
      { element: Elements.Light, name: 'Cure', cost: 12500 },
      { element: Elements.Light, name: 'Lightshield', cost: 17500 },
      { element: Elements.Dark, name: 'Darkshield', cost: 17500 },
      { element: Elements.Fire, name: 'Fireshield', cost: 17500 },
      { element: Elements.Ice, name: 'Iceshield', cost: 17500 },
      { element: Elements.Water, name: 'Watershield', cost: 17500 },
      { element: Elements.Lightning, name: 'Lightningshield', cost: 17500 },
      { element: Elements.Light, name: 'Lightstrike', cost: 10000 },
      { element: Elements.Dark, name: 'Darkstrike', cost: 10000 },
      { element: Elements.Fire, name: 'Firestrike', cost: 10000 },
      { element: Elements.Ice, name: 'Icestrike', cost: 10000 },
      { element: Elements.Water, name: 'Waterstrike', cost: 10000 },
      { element: Elements.Lightning, name: 'Lightningstrike', cost: 10000 },
    ]
  },
  {
    town: "Jotunheim",
    items: [
      { element: Elements.Light, name: 'Heal-All', cost: 320000 },
      { element: Elements.Light, name: 'Solar Flare', cost: 250000 },
      { element: Elements.Dark, name: 'Dark Matter', cost: 250000 },
      { element: Elements.Fire, name: 'Inferno', cost: 250000 },
      { element: Elements.Ice, name: 'Iceblast', cost: 250000 },
      { element: Elements.Water, name: 'Aquabeam', cost: 250000 },
      { element: Elements.Lightning, name: 'Shockfield', cost: 250000 },
      { element: Elements.Light, name: 'Heal', cost: 75000 },
    ]
  }
]

export default Magic;
