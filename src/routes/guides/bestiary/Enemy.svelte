<script>
  import ElementComponent from '$lib/components/Element.svelte';
  import Cell from './Cell.svelte';

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
    <Cell label="LVL">{LVL}</Cell>
    <Cell label="HP">{HP}</Cell>
    <Cell label="STR">{STR}</Cell>
    <Cell label="MAG">{MAG}</Cell>
    <Cell label="PDF">{PDF}</Cell>
    <Cell label="MDF">{MDF}</Cell>
    <Cell label="ACC">{ACC}</Cell>
    <Cell label="DEX">{DEX}</Cell>
    <Cell label="Drop">{drop}</Cell>
    <Cell label="Steal">{steal}</Cell>
    <Cell label="Arn">{Arn}</Cell>
  </div>
</details>

<style>
  details {
    --border-color: #959E26;
    --background-color: #4e0101;
    --background-color-alt: #4e0101;
    background: var(--background-color);
    box-shadow: 0 0 0 1px var(--border-color);
  }

  details[open] {
    margin: 1rem auto;
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

  details > div {
    display: grid;
    gap: 1px;
    grid-template-columns: repeat(8, 1fr);
    grid-template-areas:
      "lvl hp str mag pdf mdf acc dex"
      "drop drop drop steal steal steal arn arn";
  }

  @media (max-width: 800px) {
    details > div {
      grid-template-columns: repeat(4, 1fr);
      grid-template-areas:
        "lvl hp str mag"
        "pdf mdf acc dex"
        "drop drop steal steal"
        "arn arn arn arn";
    }
  }

  @media (max-width: 640px) {
    details > div {
      grid-template-columns: repeat(4, 1fr);
      grid-template-areas:
        "lvl hp str mag"
        "pdf mdf acc dex"
        "drop drop drop drop"
        "steal steal steal steal"
        "arn arn arn arn";
    }
  }

  @media (max-width: 420px) {
    details > div {
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas:
        "lvl hp"
        "str mag"
        "pdf mdf"
        "acc dex"
        "drop drop"
        "steal steal"
        "arn arn";
    }
  }
</style>
