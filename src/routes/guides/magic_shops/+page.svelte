<script>
  import Container from '$lib/components/container.svelte';
  import Element from '$lib/components/Element.svelte';
  import Shops from '$lib/data/shops/magic.js';
  import Elements from '$lib/data/elements.js';
  import Table from './Table.svelte';
</script>

<Container>
  <h2>Exit Fate: Magic Shop List</h2>
  <hr class="border">
  <ul>
    <li>
      Note: Once Mai is recruited, Elysium Castle's magic shop will stock all of the spells you've seen in shops, and will update each time you find new spells in stores.
    </li>
    <li>
      Note 2: * = Jargo Port City's magic shop can be difficult to locate. It's an unmarked building behind the inn.
    </li>
  </ul>
  <div>
    Element Key:
  </div>
  <ul class="elements">
    <li><Element element={Elements.Light}/> = Light</li>
    <li><Element element={Elements.Dark}/> = Dark</li>
    <li><Element element={Elements.Fire}/> = Fire</li>
    <li><Element element={Elements.Ice}/> = Ice</li>
    <li><Element element={Elements.Water}/> = Water</li>
    <li><Element element={Elements.Lightning}/> = Lightning</li>
  </ul>
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

  ul.elements {
    list-style-type: none;
    margin: 0;
  }
</style>
