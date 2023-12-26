<script>
  import Container from '$lib/components/container.svelte';
  import Enemies from '$lib/data/enemies';
  import Table from './Table.svelte';
</script>

<Container>
  <h2>Exit Fate: Enemy Loot Guide</h2>
  <hr class="border">
  <p>
    Looking for a good area to amass funds for those expensive weapon upgrades? Or perhaps you're looking for an enemy carrying a particular item? Scanning and unnecessary failed attempts at stealing can be rather time- consuming, so why not avoid that as much as possible? To help with that, here's a guide containing all the information you'll need for the hunt.
  </p>
  <ul>
    <li>
      Note: This guide is only for standard enemies. For boss info, check the <a href="/guides/bosses">Boss List</a>.
    </li>
    <li>
      Note 2: * = Only during initial visit
    </li>
    <li>
      Note 3: ** = Fixed encounters
    </li>
  </ul>
  <section class="table-container">
    {#each Enemies as enemy_loot}
      <Table enemy_loot={enemy_loot}/>
    {/each}
  </section>

</Container>
