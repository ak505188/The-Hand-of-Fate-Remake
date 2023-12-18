<script>
  import Container from '$lib/components/container.svelte';
  import Table from './Table.svelte';
  import { Robes, Light_Armor, Heavy_Armor, Special_Armor, Light_Headgear, Heavy_Headgear, Special_Headgear, Light_Footwear, Heavy_Footwear, Special_Footwear } from '$lib/data/items/armor.js';
</script>

<Container>
  <h2>Exit Fate: Armor List</h2>
  <hr>
  <ul>
    <li>
      Note: "Special" armor is unobtainable from shops. Hover over highlighted text for how to obtain the items.</li>
    <li>
      Note 2: * = The in-game item information is incorrect. The values listed here are the corrected values.
    </li>
  </ul>
  <h3>Robes</h3>
  <Table armor={Robes}/>
  <h3>Light_Armor</h3>
  <Table armor={Light_Armor}/>
  <h3>Heavy_Armor</h3>
  <Table armor={Heavy_Armor}/>
  <h3>Special_Armor</h3>
  <Table armor={Special_Armor}/>
  <hr>
  <h3>Light_Headgear</h3>
  <Table armor={Light_Headgear}/>
  <h3>Heavy_Headgear</h3>
  <Table armor={Heavy_Headgear}/>
  <h3>Special_Headgear</h3>
  <Table armor={Special_Headgear}/>
  <hr>
  <h3>Light_Footwear</h3>
  <Table armor={Light_Footwear}/>
  <h3>Heavy_Footwear</h3>
  <Table armor={Heavy_Footwear}/>
  <h3>Special_Footwear</h3>
  <Table armor={Special_Footwear}/>
</Container>
