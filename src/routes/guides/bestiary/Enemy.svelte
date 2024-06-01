<script>
  import EnemyCell from './EnemyCell.svelte';
  import ElementComponent from '$lib/components/Element.svelte';

  export let enemy;
  export let open = false;

  const { Name, Element, HP, LVL, Arn, Steal, Drop, Available, Type } = enemy;
  const { STR, MAG, PDF, MDF, ACC, DEX } = enemy.Stats;
  const steal = Steal ? `${Steal.Item} - ${Steal.Rate * 100}%` : 'None';
  const drop = Drop ? `${Drop.Item} - ${Drop.Rate * 100}%` : 'None';

  const isLocationChapter = !isNaN(Available[0]);

  const location = isLocationChapter ? `Ch ${Available.join(', ')}` : Available[0];
</script>

<details id={Name} open={open}>
  <summary class="title">
    <span class:boss={Type == 'Boss'} class="name">{Name}</span>
    <span class="element"><ElementComponent element={Element}/></span>
    <span class="location">{location}</span>
  </summary>
  <div>
    <div class="stats">
      <EnemyCell name='LVL'>{LVL}</EnemyCell>
      <EnemyCell name='HP'>{HP}</EnemyCell>
      <EnemyCell name='STR'>{STR}</EnemyCell>
      <EnemyCell name='MAG'>{MAG}</EnemyCell>
      <EnemyCell name='PDF'>{PDF}</EnemyCell>
      <EnemyCell name='MDF'>{MDF}</EnemyCell>
      <EnemyCell name='ACC'>{ACC}</EnemyCell>
      <EnemyCell name='DEX'>{DEX}</EnemyCell>
    </div>
    <div class="item drop">
      <header>Drop</header>
      <span>{drop}</span>
    </div>
    <div class="item steal">
      <header>Steal</header>
      <span>{steal}</span>
    </div>
    <div class="item arn">
      <header>Arn</header>
      <span>{Arn}</span>
    </div>
  </div>
</details>

<style>
  details {
    --border-color: #959E26;
    --background-color: #4e0101;
    --background-color-alt: #4e0101;
    background: var(--background-color);
    box-shadow: 0 0 0 1px var(--border-color);
    border-radius: 1px;
  }

  details[open]:not(:last-child) {
    margin-bottom: 1rem;
  }

  summary {
    display: flex;
    padding: .5rem;
  }

  details summary::before {
    font-weight: 600;
    font-size: 1rem;
    content: '+';
    margin-right: .25rem;
    font-family: monospace;
    cursor: pointer;
  }

  details[open] summary::before {
    content: '-';
  }

  span.name.boss {
    font-weight: 600;
  }

  span.location {
    margin-left: auto;
  }

  span.element {
    align-self: center;
    margin-left: .25rem;
  }

  details div {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-areas:
      "stats stats stats stats stats stats stats stats"
      "drop drop drop steal steal steal arn arn";
  }

  .stats {
    display: grid;
    grid-area: stats;
    grid-template-columns: repeat(8, 1fr);
    box-shadow: 0 0 0 1px var(--border-color);
    background: #4e0101;
  }

  .stats > :global(*:not(:first-child)) {
    box-shadow: -1px 0 0 0 var(--border-color);
  }

  .stats > :global(*:nth-child(even)) {
    background: var(--background-color-alt);
  }

  .steal {
    grid-area: steal;
  }

  .drop {
    grid-area: drop;
  }

  .arn {
    grid-area: arn;
  }

  .item {
    display: flex;
    padding: .5rem;
  }

  .item header {
    padding-right: .5rem;
    text-decoration: underline;
  }

  .item:not(:first-child) {
    box-shadow: -1px 0 0 0 var(--border-color);
  }

  @media (max-width: 640px) {
    details div {
      grid-template-columns: repeat(4, 1fr);
      grid-template-areas:
        "stats stats stats stats"
        "stats stats stats stats"
        "drop drop drop drop"
        "steal steal steal steal"
        "arn arn arn arn";
    }

    .stats {
      grid-template-columns: repeat(4, 1fr);
    }

    .stats > :global(*:nth-child(-n+4)) {
      border-bottom: 1px solid var(--border-color);
    }

    .item:not(:first-child) {
      box-shadow: 0 1px 0 0 var(--border-color);
    }
  }
</style>
