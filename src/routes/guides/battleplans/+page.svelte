<script>
  import Container from '$lib/components/container.svelte';
  import Battleplan from './Battleplan.svelte';
</script>

<Container>
  <h2>Battleplans</h2>
  <hr>
  <p>
    Battle Plans are special items that allow you to simulate previously fought strategic battles, as well as unique battles not played elsewhere in the game, provided you have Merrick recruited. Whenever you find new Battle Plans, just talk to him (west 1st floor of the castle), and he'll allow you to play out these battles.
  </p>
  <ul>
    <li>Note: Unit types are signified as follows: IN = Infantry, CV = Cavalry, SC = Scout, SO = Sorcery</li>
    <li>Note 2: DM = Demon. Exclusive to Trevor and Sick. It is a Sorcery unit with an attack range of 5 tiles.</li>
    <li>Note 3: Bolded names signify enemy leaders.</li>
    <li>Note 4: D-rank reward is always a Brown/Green Herb, F-rank reward is always Badge of Shame.</li>
  </ul>

  <Battleplan
    battle_index={1}
    title="Jargo Port City"
    obtain="Purchase from a man in northwest Jargo Port City for 5,000 Arn."
    enemy_name="Jargo Defence Force (1700)"
    enemies={['Infantry x4']}
    rewards={['Lightning', 'Hide Belt', 'Blue Drop']}
  />

  <Battleplan
    battle_index={2}
    title="Grunthall"
    obtain="Found in a chest in Bergstadt. (Governor's office; after rebellion)"
    enemy_name="Highland Rebel Army (2,700)"
    enemies={[
      'IN-<b>Rock</b>: 600 MEN, 6 ATK, 6 DEF (Mountaineer)',
      'SC-Paris: 500 MEN, 4 ATK, 3 DEF',
      'Infantry x2',
      'Scout x2',
      'Sorcery x1'
    ]}
    rewards={['Grey Robe', 'Steel Bracer', 'Mend']}
  />

  <Battleplan
    title="Mayfall City I"
    battle_index={3}
    obtain="Speak to Bruce in Elysium Castle. (Chapter 8)"
    enemy_name="Kirgard 2nd Legion (4,950)"
    enemies={[
      'IN-<b>Keyser</b>: 1,000 MEN, 6 ATK, 10 DEF (Blockade, Shield)',
      'Infantry x2',
      'Cavalry x3',
      'Scout x2',
      'Sorcery x2',
    ]}
    rewards={['Photon Beam', 'Mend-All', 'Charged Pearl']}
  />


  <Battleplan
    title="Matrech Coast"
    battle_index={4}
    obtain="Dropped by Leonius in Vanaheim."
    enemy_name="Kirgard 4th Legion (5,900)"
    enemies={[
      'SC-<b>Leonius</b>: 900 MEN, 5 ATK, 8 DEF',
      'IN-Trevor/Sick: 700 MEN, 7 ATK, 5 DEF (Evasion, Counter)',
      'Infantry x2',
      'Cavalry x3',
      'Scout x2',
      'Sorcery x2',
    ]}
    rewards={['Darkstrike', 'Fireball', 'Red Glasses']}
  />


  <Battleplan
    title="Elysium"
    battle_index={5}
    obtain="Found in a chest in Levier. (Jovian's room)"
    enemy_name="Matrech Guard (5,275)"
    enemies={[
      'IN-<b>Erin</b>: 850 MEN, 7 ATK, 7 DEF',
      'CV-Jasper: 675 MEN, 7 ATK, 4 DEF (Light Feet)',
      'Infantry x4',
      'Cavalry x2',
      'Scout x2',
    ]}
    rewards={['Matrech Plate', 'Diamond Dust', 'Velvet Scarf']}
  />


  <Battleplan
    title="Mayfall City II"
    battle_index={6}
    obtain="Speak to Merrick in Elysium Castle after recruiting him."
    enemy_name="Mayfall Army (5,675)"
    enemies={[
      'SC-<b>Merrick</b>: 800 MEN, 5 ATK, 9 DEF (Forester, Berserker)',
      'Infantry x3',
      'Cavalry x3',
      'Scout x2',
      'Sorcery x2',
    ]}
    rewards={['Cure','Blue Cape', 'Frost Shard']}
  />


  <Battleplan
    title="Matrech State Capital"
    battle_index={7}
    obtain="Found in a chest in Matrech. (Ryan's office; Ryan in party)"
    enemy_name="Matrech Guard (6,955)"
    enemies={[
      'IN-<b>Erin</b>: 850 MEN, 7 ATK, 7 DEF',
      'CV-Jasper: 675 MEN, 7 ATK, 4 DEF (Light Feet)',
      'Infantry x5',
      'Cavalry x3',
      'Scout x2',
      'Sorcery x3',
    ]}
    rewards={['Winged Boots', 'Firestrike', 'Knight Armor']}
  />


  <Battleplan
    title="Vishnu Citadel"
    battle_index={8}
    obtain="Found in a chest at Ft. Brahma."
    enemy_name="Mountain Tribes (4,125)"
    enemies={[
      'CV-<b>Pereious</b>: 900 MEN, 10 ATK, 6 DEF (Mountaineer)',
      'Infantry x3',
      'Cavalry x4',
      'Scout x1',
    ]}
    rewards={['Darkshield', 'Mountain Boots', 'Red Cape']}
  />


  <Battleplan
    title="Ft. Brahma"
    battle_index={9}
    obtain="Found in a chest at Mt. Ea."
    enemy_name="Imperial Occupation Army (7,200)"
    enemies={[
      'IN-<b>Regin</b>: 900 MEN, 7 ATK, 9 DEF',
      'Infantry x6',
      'Cavalry x4',
      'Scout x2',
      'Sorcery x2',
    ]}
    rewards={['Barrier', 'Rainbow Ore', 'Golden Helmet']}
  />


  <Battleplan
    title="St. Reinard"
    battle_index={10}
    obtain="Dropped by Riftgate at St. Reinard."
    enemy_name="Imperial Occupation Army (8,700)"
    enemies={[
      'CV-<b>Ash</b>: 1,100 MEN, 9 ATK, 7 DEF (Counter, Light Feet)',
      'Infantry x8',
      'Cavalry x3',
      'Scout x4',
      'Sorcery x2',
    ]}

    rewards={['Purple Bandanna', 'Cure-All', 'Brown Herb']}


  />


  <Battleplan
    title="Jormundgand"
    battle_index={11}
    obtain="Found in a chest in Hall of Memories."
    enemy_name="Imperial Elite Guard (3,750)"
    enemies={[
      'CV-<b>Brunhild</b>: 1,500 MEN, 12 ATK, 12 DEF (Cntr, Sctr, Frcfld)',
      'Infantry x3',
    ]}

    rewards={['Pointed Shoes', 'Lightshield', 'Lightstrike']}


  />


  <Battleplan
    title="Midgard Plains"
    battle_index={12}
    obtain="Found in a chest in Spiritual Plane."
    enemy_name="Demon Commandos (2,000)"
    enemies={[
      'DM-<b>Trevor</b>: 1,000 MEN, 12 ATK, 14 DEF (Forcefield, Blockade)',
      'DM-<b>Sick</b>: 1,000 MEN, 10 ATK, 16 DEF (Forcefield, Scatter)',
    ]}

    rewards={['Demon Robe', 'Heal', 'Diamond Dust']}


  />


  <Battleplan
    title="Vanaheim"
    battle_index={13}
    obtain="Found in a chest in Jotunheim."
    enemy_name="Imperial Army (11,575)"
    enemies={[
      'CV-<b>Gudrun</b>: 1,250 MEN, 10 ATK, 10 DEF (Shield)',
      'SC-Leonius: 900 MEN, 5 ATK, 8 DEF',
      'IN-Regin: 950 MEN, 7 ATK, 9 DEF',
      'Infantry x7',
      'Cavalry x5',
      'Scout x4',
      'Sorcery x3',
    ]}
    rewards={['Topaz Amulet', 'Crystal Plate', 'Diamond Dust']}
  />


  <Battleplan
    title="Cornered!"
    battle_index={14}
    obtain="Speak to Merrick in Elysium Castle after recruiting him."
    enemy_name="Mayfall Army (5,600)"
    enemies={[
      'SC-<b>Merrick</b>: 900 MEN, 5 ATK, 9 DEF (Forester, Berserker)',
      'Infantry x3',
      'Cavalry x5',
      'Scout x2',
    ]}
  />


  <Battleplan
    title="Forest Raiders"
    battle_index={15}
    obtain="Speak to Rivalna at Sacred Circle of Druids in Oischin Forest. (Chapter 7; Alex in party)"
    enemy_name="Forest Defenders (9,125)"
    enemies={[
      'IN-<b>Alex</b>: 1,000 MEN, 7 ATK, 8 DEF (Forester)',
      'SO-Ljusalf: 700 MEN, 9 ATK, 3 DEF (Forester)',
      'SC-Richard: 750 MEN, 6 ATK, 6 DEF (Forester)',
      'Infantry x5',
      'Cavalry x4',
      'Scout x5',
    ]}


  />


  <Battleplan
    title="Oischin Conquest"
    battle_index={16}
    obtain="Speak to Cantor at Faraday University. (Chapter 7)"
    enemy_name="Oischin Army (6,300)"
    enemies={[
      'SO-<b>Galius</b>: 750 MEN, 8 ATK, 5 DEF (Regenerate)',
      'SO-Marian: 700 MEN, 10 ATK, 3 DEF (Blockade, Scatter)',
      'SO-<b>Deus</b>: 600 MEN, 7 ATK, 4 DEF (Regenerate)',
      'Sorcery x10',
    ]}
  />


  <Battleplan
    title="Pereious' Revenge"
    battle_index={17}
    obtain="Speak to Rashnu at Tal Gren. (Chapter 8)"
    enemy_name="Mountain Tribes (9,350)"
    enemies={[
      'IN-<b>Pereious</b>: 900 MEN, 10 ATK, 6 DEF (Mountaineer)',
      'SO-Rashnu: 800 MEN, 9 ATK, 5 DEF (Mountaineer, Forcefield)',
      'Infantry x6',
      'Cavalry x5',
      'Scout x6',
    ]}
  />


  <Battleplan
    title="Ninja Onslaught"
    battle_index={18}
    obtain="Dropped by Fu'kubei in the Shadow Clan village."
    enemy_name="Sun Clan (8,400)"
    enemies={[
      'SC-<b>Gilbert</b>: 900 MEN, 9 ATK, 4 DEF (Counter)',
      'SC-<b>Rorschach</b>: 800 MEN, 7 ATK, 6 DEF (Scatter)',
      'SC-<b>Yomiko</b>: 750 MEN, 6 ATK, 6 DEF (Evasion)',
      'Scout x14',
    ]}
  />


  <Battleplan
    title="Knights of Matrech"
    battle_index={19}
    obtain="Speak to Erin in Elysium Castle. (Chapter 8)"
    enemy_name="State Army (11,200)"
    enemies={[
      'IN-<b>Erin</b>: 850 MEN, 7 ATK, 7 DEF',
      'IN-<b>Bast</b>: 850 MEN, 8 ATK, 6 DEF (Counter, Blockade)',
      'CV-Jasper: 675 MEN, 7 ATK, 4 DEF (Light Feet)',
      'SC-<b>Merrick</b>: 800 MEN, 5 ATK, 9 DEF (Forester, Berserker)',
      'Infantry x5',
      'Cavalry x5',
      'Scout x5',
      'Sorcery x3',
    ]}
  />


  <Battleplan
    title="Royal Defence"
    battle_index={20}
    obtain="Found in a chest in St. Reinard. (Daniel's room; Chapter 8)"
    enemy_name="Kirgard Royal Army (13,600)"
    enemies={[
      'CV-<b>Eander</b>: 1,100 MEN, 9 ATK, 8 DEF (Scatter)',
      'IN-<b>Keyser</b>: 1,000 MEN, 6 ATK, 10 DEF (Blockade, Shield)',
      'IN-<b>Jovian</b>: 900 MEN, 7 ATK, 6 DEF (Counter)',
      'SC-<b>Leonius</b>: 900 MEN, 5 ATK, 8 DEF',
      'Infantry x5',
      'Cavalry x4',
      'Scout x7',
      'Sorcery x4',
    ]}
  />


  <Battleplan
    title="Almenga Assault"
    battle_index={21}
    obtain="Found in a chest in Vanaheim."
    enemy_name="Imperial Army (14,675)"
    enemies={[
      'CV-<b>Brunhild</b>: 1,500 MEN, 12 ATK, 12 DEF (Cntr, Sctr, Frcfld)',
      'CV-<b>Gudrun</b>: 1,250 MEN, 10 ATK, 10 DEF (Shield)',
      'CV-<b>Ash</b>: 1,100 MEN, 9 ATK, 7 DEF (Counter, Scatter)',
      'IN-<b>Tarlia</b>: 1,000 MEN, 5 ATK, 11 DEF (Shield, Blockade)',
      'IN-<b>Regin</b>: 950 MEN, 7 ATK, 9 DEF',
      'Infantry x6',
      'Cavalry x6',
      'Scout x5',
      'Sorcery x3',
    ]}
  />


  <Battleplan
    title="Puppet Master"
    battle_index={22}
    obtain="Dropped by Hugin and Munin in Spiritual Plane."
    enemy_name="Demon Army (8,627)"
    enemies={[
      'DM-<b>Trevor</b>: 1,000 MEN, 12 ATK, 14 DEF (Forcefield, Blockade)',
      'DM-<b>Sick</b>: 1,000 MEN, 10 ATK, 16 DEF (Forcefield, Scatter)',
      'CV-<b>Ash</b>: 1,100 MEN, 9 ATK, 7 DEF (Counter, Scatter)',
      'SC-Leonius: 900 MEN, 5 ATK, 8 DEF',
      'Infantry x3',
      'Cavalry x3',
      'Scout x4',
      'Sorcery x3',
    ]}
  />

  <Battleplan
    title="Fated Battle"
    battle_index={23}
    obtain="Recruit all 75 characters, and then examine the chest in the basement of Elysium Castle."
    enemy_name="Elysium Army? (11,650)"
    enemies={[
      'IN-<b>Daniel</b>: 1,200 MEN, 13 ATK, 13 DEF (Regenerate, Forcefield)',
      'SO-Ljusalf: 700 MEN, 7 ATK, 2 DEF (Forester)',
      'SC-Outsider: 750 MEN, 4 ATK, 3 DEF',
      'SC-Paris: 750 MEN, 5 ATK, 4 DEF (Mountaineer)',
      'CV-Bast: 1,000 MEN, 7 ATK, 7 DEF (Blockade)',
      'IN-Shiro: 850 MEN, 5 ATK, 5 DEF (Evasion)',
      'CV-Griever: 725 MEN, 12 ATK, 6 DEF',
      'CV-Jovian: 825 MEN, 8 ATK, 7 DEF (Light Feet)',
      'IN-Keyser: 900 MEN, 5 ATK, 9 DEF (Shield)',
      'CV-Eander: 1,000 MEN, 10 ATK, 8 DEF (Counter)',
      'IN-Nashal: 800 MEN, 5 ATK, 6 DEF (Scatter)',
      'IN-Erin: 775 MEN, 6 ATK, 7 DEF (Blockade)',
      'SC-Merrick: 725 MEN, 6 ATK, 6 DEF (Berserker)',
      'SO-Marian: 650 MEN, 9 ATK, 3 DEF (Forcefield)',
    ]}
  />
</Container>
