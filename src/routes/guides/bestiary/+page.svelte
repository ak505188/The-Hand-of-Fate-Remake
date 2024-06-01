<script>
  import { page } from "$app/stores";
  import Container from '$lib/components/container.svelte';
  import { BestiaryByChapter } from '$lib/data/bestiary.js';
  import Enemy from './Enemy.svelte';

</script>

<Container>
  <h2>Exit Fate: Bestiary</h2>
  <hr class="border">
  <p>Click on each entry to view more details. Bosses are signified by bolded name.</p>
  <h3>Table of Contents</h3>
  <ul>
    {#each BestiaryByChapter as Chapter}
      <li>
        <a href="{$page.url}#{Chapter.name}">{Chapter.name}</a>
      </li>
    {/each}
  </ul>
  {#each BestiaryByChapter as Chapter}
    <h3 id={Chapter.name}>{Chapter.name}</h3>
    <section>
    {#each Chapter.enemies as enemy}
      <Enemy open={decodeURIComponent($page.url.hash) == '#' + enemy.Name} enemy={enemy}/>
    {/each}
    </section>
  {/each}
</Container>

<style>
  section {
    margin: 1rem auto;
  }
</style>
