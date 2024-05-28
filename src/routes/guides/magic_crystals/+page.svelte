<script>
  import Container from '$lib/components/container.svelte';
  import Crystals from './magic_crystals_data.js';
</script>

<Container>
  <h2>Exit Fate: Magic Crystals</h2>
  <hr class="border">
  <p>
    Magic Crystals lets you cast a spell without using any MP. It’s a very powerful effect, but there’s very limited amounts of crystals available, and you can’t buy them on any shops.
  </p>

  <h3>Level 1 Magic Crystals</h3>
  <table>
    <thead>
      <tr>
        <th>Item</th>
        <th>Element</th>
        <th>Spell</th>
      </tr>
    </thead>
    <tbody>
      {#each Crystals[0] as crystal}
        <tr>
          <td>{crystal.item}</td>
          <td>{crystal.element}</td>
          <td>{crystal.spell}</td>
        </tr>
      {/each}
    </tbody>
  </table>

  <h3>Level 1 Magic Crystals Locations</h3>

  <h4>White Ash</h4>
  <ul>
    <li>Chapter 1 - Treasure Chest in Bandit Cave</li>
    <li>Chapter 3 - Treasure Chest in Credence Castle</li>
    <li>Chapter 4 - Steal from Relic in Mad King’s Vault (25%)</li>
    <li>Chapter 5 - Shiro’s Inventory (x2)</li>
    <li>Chapter 7 - Soth’s Inventory (x2)</li>
  </ul>

  <h4>Black Ash</h4>
  <ul>
    <li>Chapter 2 - Treasure Chest in Mayfall Forest</li>
    <li>Chapter 3 - Francesca’s Inventory</li>
    <li>Chapter 3 - Midian’s Inventory</li>
    <li>Chapter 3 - Item Drop from Spectral Mage in Credence Castle (5%)</li>
    <li>Chapter 5 - Deke’s Inventory</li>
    <li>Chapter 5 - Steal from Black Elemental in Elemental Mansion (50%)</li>
  </ul>

  <h4>Red Cinder</h4>
  <ul>
    <li>Chapter 2 - Item Drop from Goblin in Mayfall Forest or Mayfall World Map (5%)</li>
    <li>Chapter 4 - Treasure Chest in Grunthall Mines</li>
  </ul>

  <h4>Ice Cube</h4>
  <ul>
    <li>Chapter 2 - Treasure Chest in Harlinton Forest</li>
    <li>Chapter 3 - Cid’s Inventory</li>
    <li>Chapter 3 - Treasure Chest in Treasure Island</li>
    <li>Chapter 5 - Steal from White Elemental in Elemental Mansion (50%)</li>
  </ul>

  <h4>Blue Drop</h4>
  <ul>
    <li>Chapter 1 - C-rank reward in Battle of Jargo City</li>
    <li>Chapter 2 - Ljusalf’s Inventory</li>
    <li>Chapter 5 - Steal from Blue Elemental in Elemental Mansion (50%)</li>
    <li>Chapter 5 - Item Drop from Blue Elemental in Elemental Mansion (3%)</li>
  </ul>

  <h4>Battery</h4>
  <ul>
    <li>Chapter 2 - Treasure Chest in Blackwater Port City</li>
    <li>Chapter 3 - Item Drop from Yellow Puddle in Treasure Island (10%)</li>
    <li>Chapter 4 - Steal from Guard Tiger in Grunthall Mines (25%)</li>
    <li>Chapter 4 - Item Drop from Guard Tiger in Grunthall Mines (8%)</li>
    <li>Chapter 4 - Item Drop from Proto-Mist in Mayfall Forest Mist Maze (8%)</li>
    <li>Chapter 4 - Treasure Chest in Mayfall City Hall (accessible during the war story event)</li>
  </ul>

  <h3>Level 2 Magic Crystals</h3>
  <table>
    <thead>
      <trow>
        <th>Item</th>
        <th>Element</th>
        <th>Spell</th>
      </trow>
    </thead>
    <tbody>
      {#each Crystals[1] as crystal}
        <tr>
          <td>{crystal.item}</td>
          <td>{crystal.element}</td>
          <td>{crystal.spell}</td>
        </tr>
      {/each}
    </tbody>
  </table>

  <h3>Level 2 Magic Crystals Locations</h3>

  <h4>Charged Pearl</h4>
  <ul>
    <li>Chapter 4 - C-rank reward in Battle of Mayfall City 1</li>
    <li>Chapter 5 - Deus’s Inventory</li>
    <li>Chapter 5 - Item Drop from Light Stalker in Fading Dream (3%)</li>
    <li>Chapter 6 - Steal from Enchanter in Lost City of Avalon (25%)</li>
    <li>Chapter 6 - Item Drop from Sick in Mayfall City (100%)</li>
    <li>Chapter 6 - Treasure Chest in Kelsinger Pass</li>
    <li>Chapter 7 - Item Drop from Parasite in Shiva Passage (4%)</li>
    <li>Chapter 8 - Steal from Poltergeist in Spiritual Plane (25%)</li>
  </ul>

  <h4>Charged Jet</h4>
  <ul>
    <li>Chapter 4 - Treasure Chest in Myst’s House (available after Blackwater rescue mission)</li>
    <li>Chapter 5 - Treasure Chest in Oischin Forest</li>
    <li>Chapter 5 - Item Drop from Black Elemental in Elemental Mansion (3%)</li>
    <li>Chapter 6 - Item Drop from Belgugon in Fading Dream (4%)</li>
    <li>Chapter 6 - Item Drop from Trevor in Mayfall City (100%)</li>
    <li>Chapter 6 - Treasure Chest in Kelsinger Pass</li>
    <li>Chapter 7 - Item Drop from Catoblepas in Magma Caverns (5%)</li>
    <li>Chapter 7 - Item Drop from Almenga Summoner in Shiva Passage (5%)</li>
    <li>Chapter 7 - Steal from Almenga Summoner in Shiva Passage (25%)</li>
    <li>Chapter 7 - Steal from Elder Summoner in Shiva Passage (25%)</li>
    <li>Chapter 7 - Treasure Chest in Jinen Gama</li>
    <li>Chapter 8 - Item Drop from Wraith in Nocturn Keep (5%)</li>
  </ul>

  <h4>Flame Ball</h4>
  <ul>
    <li>Chapter 5 - Treasure Chest in Fading Dream</li>
    <li>Chapter 6 - Nomad’s Inventory</li>
    <li>Chapter 6 - Reod’s Inventory</li>
    <li>Chapter 7 - Harvey’s Inventory</li>
    <li>Chapter 7 - Treasure Chest in Shiva Passage</li>
  </ul>

  <h4>Frost Shard</h4>
  <ul>
    <li>Chapter 4 - Treasure Chest in Mayfall Forest Mist Maze</li>
    <li>Chapter 5 - Item Drop from Frostmonger in Oischin Forest (100%)</li>
    <li>Chapter 5 - Item Drop from White Elemental in Elemental Mansion (3%)</li>
    <li>Chapter 5 - Treasure Chest in Fading Dream</li>
    <li>Chapter 6 - Mai’s Inventory</li>
    <li>Chapter 6 - C-rank reward in Battle of Mayfall City 2</li>
    <li>Chapter 8 - Item Drop from Frost Giant in Jormundgand (5%)</li>
    <li>Chapter 8 - Steal from Frost Giant in Jormundgand (50%)</li>
  </ul>

  <h4>Marid Tear</h4>
  <ul>
    <li>Chapter 4 - Naja’s Inventory</li>
    <li>Chapter 6 - Orlando’s Inventory</li>
    <li>Chapter 6 - Item Drop from Orc Shaman in Kelsinger Pass (5%)</li>
    <li>Chapter 7 - Item Drop from Sahagin in Matrech Catacombs (5%)</li>
    <li>Chapter 7 - Treasure Chest in Matrech Catacombs</li>
    <li>Chapter 7 - Item Drop from Warlock in Vishnu Citadel (5%)</li>
    <li>Chapter 7 - Darwin’s Inventory</li>
    <li>Chapter 7 - Item Drop from Paragon in Mt. Ea (5%)</li>
    <li>Chapter 8 - Item Drop from Charybdis in Hall of Memories (10%)</li>
    <li>Chapter 8 - Steal from Charybdis in Hall of Memories (25%)</li>
  </ul>

  <h4>Lightning Rod</h4>
  <ul>
    <li>Chapter 5 - Treasure Chest in Oischin Forest</li>
    <li>Chapter 6 - Item Drop from Enchanter in Lost City of Avalon (5%)</li>
    <li>Chapter 7 - Treasure Chest in Matrech Catacombs</li>
    <li>Chapter 8 - Treasure Chest in Jormundgand</li>
    <li>Chapter 8 - Yomiko’s Inventory</li>
    <li>Chapter 8 - Steal from Lightning Bolt in Vaneheim 1F (50%)</li>
  </ul>

  <h3>Spectral Prism</h3>
  <p>
    This is a special non-elemental magic item, casting a unique spell to a single target, with 200 base damage in the game’s formula.
    (For comparison, the base damage of regular Level 1 spells are 30, while regular Level 2 spells are 120)
  </p>

  <p>
    To create Spectral Prisms, give a Rainbow Ore to Darwin in your castle, and wait 5 minutes for him to finish creating the item.
  </p>

  <h3>Rainbow Ore locations:</h3>
  <ul>
    <li>Treasure Chest in Vishnu Citadel</li>
    <li>B-rank reward in Battle of Ft. Brahma</li>
    <li>Treasure Chest in Jormundgand</li>
    <li>Steal from Mara enemy in Spiritual Plane</li>
    <li>Steal from Grand Conjurer enemy in Vaneheim 1F</li>
    <li>Treasure chest in Vaneheim.</li>
  </ul>
</Container>

<style>
  table {
    margin: 0;
    text-align: left;
  }

  table td:not(:last-child), table th:not(:last-child) {
    padding-right: 1rem;
  }
</style>
