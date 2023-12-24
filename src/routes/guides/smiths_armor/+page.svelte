<script>
  import Container from '$lib/components/container.svelte';
  import Table from './Table.svelte';
  import { Shops, SpecialSales } from '$lib/data/shops/armor.js';

  const special_body_sales = SpecialSales[0];
  const special_head_and_foot_sales = { items: [...SpecialSales[1].items, {}, ...SpecialSales[2].items] };
</script>

<Container>
  <h2>Exit Fate: General Store List</h2>
  <hr class="border">
  <p>
    Note: Once Bartolli is recruited, Elysium Castle's general store will stock all of the items and accessories you've seen in shops, and will update each time you find new wares in stores.
  </p>
  <section>
    {#each Shops as shop}
      <Table shop={shop}/>
    {/each}
  </section>
  <hr>
  <h3>Special Armor Sale Values</h3>
  <section>
    <Table shop={special_body_sales}/>
    <Table shop={special_head_and_foot_sales}/>
  </section>
</Container>

<style>
  section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem 1rem;
  }
</style>
