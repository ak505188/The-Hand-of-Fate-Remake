<script>
  import Container from '$lib/components/container.svelte';
  import Table from './Table.svelte';
  import Chests from '$lib/data/items/chests.js';
</script>

<Container>
  <h2>Exit Fate: Treasure Chest List</h2>
  <hr class="border">
  <section>
    {#each Chests as chests}
      <Table title={chests.location} chests={chests.chests}/>
    {/each}
  </section>
</Container>

<style>
  section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>
