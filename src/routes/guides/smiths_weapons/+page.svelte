<script>
  import Container from '$lib/components/container.svelte';
  import Table from './Table.svelte';
  import { Blacksmiths, Costs } from '$lib/data/shops/smiths_weapon.js';

  const blacksmiths_headers = ['Location', 'Level'];
  const blacksmiths_data = Blacksmiths.map(({ location, level }) => [ location, level]);


  const costs_table_headers = ['Level', 'Cost'];
  const costs_headers = ['ATK', 'HIT', 'CRT']
  const smith_costs = costs_headers.map((type) => {
    return {
      title: type,
      headers: costs_table_headers,
      data: Costs[type].map(({ level, cost }) => [ level, `${cost} Arn` ])
    }
  })
</script>

<Container>
  <h2>Exit Fate: Blasksmith (Weapons) List</h2>
  <hr class="border">
  <ul>
    <li>Note: Once Nikolai is recruited, his blacksmith skill will adjust based on the blacksmiths he has visited. In order for him to reach his maximum level, Nikolai must visit every blacksmith in the game (excluding the temporary early-game ones) and then speak with the blacksmith in Muspelheim.</li>
    <li>Note 2: * = Located within St. Reinard's castle. Temporary; inaccessible beyond the beginning of the game.</li>
    <li>Note 3: ** = Harlinton's blacksmith is updated when you regain access in Chapter 6.</li>
    <li>Note 4: *** = Mayfall City's blacksmith is updated when you regain access in Chapter 6.</li>
    <li>Note 5: **** = The armorer in St. Reinard's town also handles weapons.</li>
  </ul>
  <h3>Blacksmiths</h3>
  <Table headers={blacksmiths_headers} data={blacksmiths_data}/>

  <h3>Upgrade Costs</h3>
  <section>
    {#each smith_costs as smith_cost }
      <div>
        <h3>{smith_cost.title}</h3>
        <Table headers={smith_cost.headers} data={smith_cost.data}/>
      </div>
    {/each}
  </section>
</Container>

<style>
  ul {
    list-style: none;
  }

  section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
  }
</style>
