<script>
  import Container from '$lib/components/container.svelte';
  import HowToObtain from '$lib/components/HowToObtain.svelte';
</script>

<Container>
  <h2>Exit Fate: Item List</h2>
  <hr class="border">
  <p>Note: Where provided, hover over highlighted text for how to obtain the items.</p>
  <h3>HP Recovery</h3>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Effect</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Brown Herb</td>
        <td>Heals 100 HP</td>
      </tr>
      <tr>
        <td>Green Herb</td>
        <td>Heals 500 HP</td>
      </tr>
      <tr>
        <td>Purple Herb</td>
        <td>Heals 2,000 HP</td>
      </tr>
      <tr>
        <td>Silver Dust</td>
        <td>Heals 40 HP for all</td>
      </tr>
      <tr>
        <td>Gold Dust</td>
        <td>Heals 200 HP for all</td>
      </tr>
      <tr>
        <td>Diamond Dust</td>
        <td>Heals 750 HP for all</td>
      </tr>
      <tr>
        <td>Holy Grail</td>
        <td>Heals ? HP for user (re-usable) | <HowToObtain>Defeat Pentdragon in Avalon</HowToObtain></td>
      </tr>
    </tbody>
  </table>

  <h3>Status Recovery</h3>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Effect</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Memento</td>
        <td>Cures Amnesia</td>
      </tr>
      <tr>
        <td>Antidote</td>
        <td>Cures Poison</td>
      </tr>
      <tr>
        <td>Prism Lens</td>
        <td>Cures Blind</td>
      </tr>
      <tr>
        <td>Voice Box</td>
        <td>Cures Silence</td>
      </tr>
      <tr>
        <td>Energy Drink</td>
        <td>Cures Enfeeble</td>
      </tr>
    </tbody>
  </table>

  <h3>Offense</h3>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Effect</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>White Ash</td>
        <td>Light-elemental damage vs. enemy (Lightray)</td>
      </tr>
      <tr>
        <td>Charged Pearl</td>
        <td>Light-elemental damage vs. enemy (Photon Beam)</td>
      </tr>
      <tr>
        <td>Black Ash</td>
        <td>Dark-elemental damage spread vs. all enemies (Shadowcast)</td>
      </tr>
      <tr>
        <td>Charged Jet</td>
        <td>Dark-elemental damage spread vs. all enemies (Eclipse)</td>
      </tr>
      <tr>
        <td>Red Cinder</td>
        <td>Fire-elemental damage vs. all enemies (Spark)</td>
      </tr>
      <tr>
        <td>Flame Ball</td>
        <td>Fire-elemental damage vs. all enemies (Fireball)</td>
      </tr>
      <tr>
        <td>Ice Cube</td>
        <td>Ice-elemental damage vs. column (Icicle)</td>
      </tr>
      <tr>
        <td>Frost Shard</td>
        <td>Ice-elemental damage vs. column (Frostwave)</td>
      </tr>
      <tr>
        <td>Blue Drop</td>
        <td>Water-elemental damage vs. row (Splash)</td>
      </tr>
      <tr>
        <td>Marid Tear</td>
        <td>Water-elemental damage vs. row (Waterfall)</td>
      </tr>
      <tr>
        <td>Battery</td>
        <td>Lightning-elemental damage vs. enemy + adjacent enemies (Lightning)</td>
      </tr>
      <tr>
        <td>Lightning Rod</td>
        <td>Lightning-elemental damage vs. enemy + adjacent enemies (Thunderbolt)</td>
      </tr>
      <tr>
        <td>Spectral Prism</td>
        <td>Non-elemental damage vs. enemy | <HowToObtain>Bring Rainbow Ore to Darwin, return 10-15 minutes later</HowToObtain></td>
      </tr>
    </tbody>
  </table>

  <hr>

  <h3>Special</h3>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Effect</th>
      </tr>
    </thead>
    <tbody>

      <tr>
        <td>Portal Key</td>
        <td>Return to Elysium Castle (Only on world map)</td>
      </tr>
      <tr>
        <td>Merrick's Letter</td>
        <td>"Formal letter signed by Colonel Merrick"</td>
      </tr>
      <tr>
        <td>Mine Cell Key</td>
        <td>"Key to the cell in the Highland mines"</td>
      </tr>
      <tr>
        <td>Ornate Key</td>
        <td>"Polished iron key with intricate carvings"</td>
      </tr>
      <tr>
        <td>Sheet Music</td>
        <td>"A few music sheets with words scribbled over them."</td>
      </tr>
      <tr>
        <td>Supplies</td>
        <td>"Some boxes labeled 'Bartolli, Grunthall' "</td>
      </tr>
      <tr>
        <td>Brown Clay</td>
        <td>"A piece of enchanted brown clay"</td>
      </tr>
      <tr>
        <td>Sea Spider Toxin</td>
        <td>"A peculiar flask filled with grey liquid"</td>
      </tr>
      <tr>
        <td>Black Ruby</td>
        <td>"A dark black gemstone"</td>
      </tr>
      <tr>
        <td>Rainbow Ore</td>
        <td>"A piece of shimmering metal ore"</td>
      </tr>
      <tr>
        <td>Menu Set</td>
        <td>Change the menu theme (Venkal required)</td>
      </tr>
      <tr>
        <td>Battle Plan</td>
        <td>Simulate a strategic battle (Merrick required)</td>
      </tr>
    </tbody>
  </table>

</Container>

<style>
  th {
    text-align: left;
  }

  td:first-child {
    min-width: 10rem;
  }
</style>
