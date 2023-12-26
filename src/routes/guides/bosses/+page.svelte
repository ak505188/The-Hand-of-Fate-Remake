<script>
  import Container from '$lib/components/container.svelte';
  import Element from '$lib/components/Element.svelte';
  import Elements from '$lib/data/elements.js'
  import Bosses from '$lib/data/bosses.js';
  import Table from './Table.svelte';
</script>

<Container>
  <h2>Exit Fate: Boss List</h2>
  <hr class="border">
  <p>
    Expecting an encounter with a tough enemy sometime in the future? Having trouble against one you've already encountered, and want to know their stats? Wanna check what kind of loot they're carrying? Here's a list of the game's bosses, then, including the optional ones.
  </p>
  <ul class="elements">
    <li><Element element={Elements.Light}/> = Light</li>
    <li><Element element={Elements.Dark}/> = Dark</li>
    <li><Element element={Elements.Fire}/> = Fire</li>
    <li><Element element={Elements.Ice}/> = Ice</li>
    <li><Element element={Elements.Water}/> = Water</li>
    <li><Element element={Elements.Lightning}/> = Lightning</li>
  </ul>

  <aside>
    Note: * = No official data, so estimated.
  </aside>
  <section>
    {#each Bosses as boss}
      <Table boss={boss}/>
    {/each}
  </section>

</Container>

<style>
  ul.elements {
    list-style-type: none;
    margin: 0;
  }

  section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
  }
</style>
