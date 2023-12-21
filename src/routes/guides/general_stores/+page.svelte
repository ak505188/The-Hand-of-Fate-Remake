<script>
  import Container from '$lib/components/container.svelte';
  import Table from './Table.svelte';
  import Shops from '$lib/data/shops/general.js';
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
</Container>

<style>
  section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
  }
</style>
