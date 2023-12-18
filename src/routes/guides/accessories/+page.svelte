<script>
  import Container from '$lib/components/container.svelte';
  import Table from './Table.svelte';
  import { Amulets, Bandannas, Belts, Bracers, Glasses, Orbs, Rings, Scarves, Other } from '$lib/data/items/accessories.js';
</script>

<Container>
  <h2>Exit Fate: Accessory List</h2>
  <hr class="border">
  <div class="tables-container">
  <Table title="Amulets" accessories={Amulets}/>
  <Table title="Bandannas" accessories={Bandannas}/>
  <Table title="Belts" accessories={Belts}/>
  <Table title="Bracers" accessories={Bracers}/>
  <Table title="Glasses" accessories={Glasses}/>
  <Table title="Orbs" accessories={Orbs}/>
  <Table title="Rings" accessories={Rings}/>
  <Table title="Scarves" accessories={Scarves}/>
  </div>
  <Table title="Other" accessories={Other}/>
</Container>

<style>
  div.tables-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

</style>
