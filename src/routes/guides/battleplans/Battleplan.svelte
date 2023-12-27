<script>
  export let title;
  export let battle_index;
  export let obtain;
  export let enemy_name;
  export let enemies;
  export let rewards;

  const image_src = `/images/guides/battleplans/${battle_index.toString().padStart(2, '0')}.jpg`
</script>
<div class="battleplan">
  <div class="image">
    <h3>Battle Plan #{battle_index}: {title}</h3>
    <img src={image_src} alt="">
  </div>
  <div class="info">
    <h4>How to Obtain</h4>
    <p>{obtain}</p>
    <hr color="ffffff">
    <p>Enemy: {enemy_name}</p>
    <ul>
      {#each enemies as enemy }
        <li>{@html enemy}</li>
      {/each}
    </ul>
    {#if rewards}
      <ol type='A'>
        {#each rewards as reward }
          <li>{reward}</li>
        {/each}
      </ol>
    {/if}
  </div>
</div>

<style>
  div.battleplan {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 1rem;
  }

  ul {
    list-style-position: inside;
    padding: 0;
  }

  ol li:nth-child(1)::marker {
    color: #fbec5d;
  }
  ol li:nth-child(2)::marker {
    color: #6495ed;
  }
  ol li:nth-child(3)::marker {
    color: #ace1af;
  }
</style>
