<script>
  import { page } from "$app/stores";
  import Container from '$lib/components/container.svelte';
  import { Encounters } from '$lib/data/encounters.js';
</script>

<Container>
  <h2>Exit Fate: Encounters</h2>
  <hr class="border">
  <p>
    This is all the groups of enemies you can encounter in Exit Fate, sorted by chapter and location.
  </p>
  <h3>Table of Contents</h3>
  <ul>
    {#each Encounters as encounters}
    <li>
      <a href="{$page.url.pathname}#{encounters.location}">
        {encounters.location}
      </a>
    </li>
    {/each}
  </ul>
  {#each Encounters as encounters}
  <ul>
    <header id={encounters.location}>
      <h4>Ch.{encounters.chapter}: {encounters.location}</h4>
      {#if encounters.note}
        <aside>{encounters.note}</aside>
      {/if}
    </header>
    {#each encounters.battles as battle}
    <li>
      {battle.arn} Arn: {battle.battle}
    </li>
    {/each}
  </ul>
  {/each}
</Container>

<style>
  header {
    margin-bottom: .25rem;
  }

  header h4 {
    margin-bottom: 0;
  }

  header aside {
    font-style: italic;
  }

  ul {
    list-style: none;
  }
</style>
