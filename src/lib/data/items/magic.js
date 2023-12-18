export const Light = [
  {
    name: 'Mend',
    MP: 18,
    effect: 'Minor HP recovery'
  },
  {
    name: 'Mend-All',
    MP: 30,
    effect: 'Minor HP recovery for all'
  },
  {
    name: 'Restore',
    MP: 45,
    effect: "Revive KO'd character"
  },
  {
    name: 'Cure',
    MP: 45,
    effect: 'Moderate HP recovery'
  },
  {
    name: 'Cure-All',
    MP: 90,
    effect: 'Moderate HP recovery for all'
  },
  {
    name: 'Heal',
    MP: 95,
    effect: 'Major HP recovery'
  },
  {
    name: 'Heal-All',
    MP: 150,
    effect: 'Major HP recovery for all'
  },
  {
    name: 'Lightray',
    MP: 21,
    effect: 'Minor light-elemental damage vs. enemy'
  },
  {
    name: 'Photon Beam',
    MP: 50,
    effect: 'Moderate light-elemental damage vs. enemy'
  },
  {
    name: 'Solar Flare',
    MP: 125,
    effect: 'Major light-elemental damage vs. enemy'
  },
  {
    name: 'Neutralize',
    MP: 14,
    effect: 'Cures Poison'
  },
  {
    name: 'Balance',
    MP: 35,
    effect: 'Cures Chaos'
  },
  {
    name: 'Lightstrike',
    MP: 60,
    effect: 'Temporarily gives physical attacks light-elemental property'
  },
  {
    name: 'Lightshield',
    MP: 70,
    effect: 'Temporarily reduces light-elemental damage recieved'
  },
  {
    name: 'Regen',
    MP: 80,
    effect: 'Temporarily recover (10%) HP per turn'
  },
]

export const Dark = [
  {
    name: 'Shadowcast',
    MP: 21,
    effect: 'Minor dark-elemental divided damage vs. all enemies'
  },
  {
    name: 'Eclipse',
    MP: 50,
    effect: 'Moderate dark-elemental divided damage vs. all enemies'
  },
  {
    name: 'Dark Matter',
    MP: 125,
    effect: 'Major dark-elemental divided damage vs. all enemies'
  },
  {
    name: 'Memorial',
    MP: 14,
    effect: 'Cures Amnesia'
  },
  {
    name: 'Enlight',
    MP: 35,
    effect: 'Cures Mindblow'
  },
  {
    name: 'Darkstrike',
    MP: 60,
    effect: 'Temporarily gives physical attacks dark-elemental property'
  },
  {
    name: 'Darkshield',
    MP: 70,
    effect: 'Temporarily reduces dark-elemental damage recieved'
  },
  {
    name: 'Lock',
    MP: 80,
    effect: 'Temporarily locks status'
  },
]

export const Fire = [
  {
    name: 'Spark',
    MP: 21,
    effect: 'Minor fire-elemental damage vs. all enemies'
  },
  {
    name: 'Fireball',
    MP: 50,
    effect: 'Moderate fire-elemental damage vs. all enemies'
  },
  {
    name: 'Inferno',
    MP: 125,
    effect: 'Major fire-elemental damage vs. all enemies'
  },
  {
    name: 'Vigor',
    MP: 14,
    effect: 'Cures Slow'
  },
  {
    name: 'Melt',
    MP: 35,
    effect: 'Cures Freeze'
  },
  {
    name: 'Firestrike',
    MP: 60,
    effect: 'Temporarily gives physical attacks fire-elemental property'
  },
  {
    name: 'Fireshield',
    MP: 70,
    effect: 'Temporarily reduces fire-elemental damage recieved'
  },
  {
    name: 'Haste',
    MP: 80,
    effect: 'Temporarily increases SPD'
  },
]

export const Ice = [
  {
    name: 'Icicle',
    MP: 21,
    effect: 'Minor ice-elemental damage vs. column'
  },
  {
    name: 'Frostwave',
    MP: 50,
    effect: 'Moderate ice-elemental damage vs. column'
  },
  {
    name: 'Iceblast',
    MP: 125,
    effect: 'Major ice-elemental damage vs. column'
  },
  {
    name: 'Clearsight',
    MP: 14,
    effect: 'Cures Blind'
  },
  {
    name: 'Clearmind',
    MP: 35,
    effect: 'Cures Berserk'
  },
  {
    name: 'Icestrike',
    MP: 60,
    effect: 'Temporarily gives physical attacks ice-elemental property'
  },
  {
    name: 'Iceshield',
    MP: 70,
    effect: 'Temporarily reduces ice-elemental damage recieved'
  },
  {
    name: 'Barrier',
    MP: 80,
    effect: 'Temporarily halves physical damage recieved'
  },
]

export const Water = [
  {
    name: 'Splash',
    MP: 21,
    effect: 'Minor water-elemental damage vs. row'
  },
  {
    name: 'Waterfall',
    MP: 50,
    effect: 'Moderate water-elemental damage vs. row'
  },
  {
    name: 'Aquabeam',
    MP: 125,
    effect: 'Major water-elemental damage vs. row'
  },
  {
    name: 'Muscleheal',
    MP: 14,
    effect: 'Cures Enfeeble'
  },
  {
    name: 'Nerveheal',
    MP: 35,
    effect: 'Cures Paralyze'
  },
  {
    name: 'Waterstrike',
    MP: 60,
    effect: 'Temporarily gives physical attacks water-elemental property'
  },
  {
    name: 'Watershield',
    MP: 70,
    effect: 'Temporarily reduces water-elemental damage recieved'
  },
  {
    name: 'Shield',
    MP: 80,
    effect: 'Temporarily halves magic damage recieved'
  },
]

export const Lightning = [
  {
    name: 'Lightning',
    MP: 21,
    effect: 'Minor lightning-elemental damage vs. enemy + adjacent enemies'
  },
  {
    name: 'Thunderbolt',
    MP: 50,
    effect: 'Moderate lightning-elemental damage vs. enemy + adjacent enemies'
  },
  {
    name: 'Shockfield',
    MP: 125,
    effect: 'Major lightning-elemental damage vs. enemy + adjacent enemies'
  },
  {
    name: 'Noise',
    MP: 14,
    effect: 'Cures Silence'
  },
  {
    name: 'Alarm',
    MP: 35,
    effect: 'Cures Sleep'
  },
  {
    name: 'Lightningstrike',
    MP: 60,
    effect: 'Temporarily gives physical attacks lightning-elemental property'
  },
  {
    name: 'Lightningshield',
    MP: 70,
    effect: 'Temporarily reduces lightning-elemental damage recieved'
  },
  {
    name: 'Blink',
    MP: 80,
    effect: 'Temporarily gives chance to dodge any attack'
  },
]
