<script>
  import Container from '$lib/components/container.svelte';
  import { stats } from '$lib/data/characters.js';

  let characters = stats;
  let sortBy = { id: 'name', ascending: true }
  $: sortSymbol = sortBy.ascending ? '&#x25B4;' : '&#x25BE;';
	$: sort = (column) => {
		if (sortBy.id == column) {
			sortBy.ascending = !sortBy.ascending
		} else {
			sortBy.id = column
			sortBy.ascending = true
		}

		// Modifier to sorting function for ascending or descending
		let sortModifier = (sortBy.ascending) ? 1 : -1;

		let sort = (a, b) =>
			(a[column] < b[column])
			? -1 * sortModifier
			: (a[column] > b[column])
			? 1 * sortModifier
			: 0;

		characters = characters.sort(sort);
	}
</script>

<Container>
  <h2>Character Stats</h2>
  <p>This table shows the base stats values for each characters. The actual stats are calculated based on the level and their base stat. 100 is the baseline (e.g. 120 base STR means they have 20% higher STR than average at all levels). Refer to the game mechanics formulas guide to calculate the exact stats for each characters based on their levels & equipment.</p>
  <div class="table-wrapper">
  <table>
    <thead>
      <tr>
        <th on:click={sort('name')}>Character {#if sortBy.id == 'name'}{@html sortSymbol}{/if}</th>
        <th on:click={sort('element')}>Element {#if sortBy.id == 'element'}{@html sortSymbol}{/if}</th>
        <th on:click={sort('HP')}>HP {#if sortBy.id == 'HP'}{@html sortSymbol}{/if}</th>
        <th on:click={sort('MP')}>MP+ {#if sortBy.id == 'MP'}{@html sortSymbol}{/if}</th>
        <th on:click={sort('STR')}>STR {#if sortBy.id == 'STR'}{@html sortSymbol}{/if}</th>
        <th on:click={sort('MAG')}>MAG {#if sortBy.id == 'MAG'}{@html sortSymbol}{/if}</th>
        <th on:click={sort('PDF')}>PDF {#if sortBy.id == 'PDF'}{@html sortSymbol}{/if}</th>
        <th on:click={sort('MDF')}>MDF {#if sortBy.id == 'MDF'}{@html sortSymbol}{/if}</th>
        <th on:click={sort('SPD')}>SPD {#if sortBy.id == 'SPD'}{@html sortSymbol}{/if}</th>
        <th on:click={sort('ACC')}>ACC {#if sortBy.id == 'ACC'}{@html sortSymbol}{/if}</th>
        <th on:click={sort('DEX')}>DEX {#if sortBy.id == 'DEX'}{@html sortSymbol}{/if}</th>
        <th on:click={sort('SLK')}>SKL {#if sortBy.id == 'SLK'}{@html sortSymbol}{/if}</th>
        <th on:click={sort('Starting_Level')}>Starting Level {#if sortBy.id == 'Starting_Level'}{@html sortSymbol}{/if}</th>
        <th on:click={sort('Skill')}>Skill {#if sortBy.id == 'Skill'}{@html sortSymbol}{/if}</th>
      </tr>
    </thead>
    <tbody>
      {#each characters as character}
        <tr>
          <td>{character.name}</td>
          <td>{character.element}</td>
          <td>{character.HP}</td>
          <td>{character.MP}</td>
          <td>{character.STR}</td>
          <td>{character.MAG}</td>
          <td>{character.PDF}</td>
          <td>{character.MDF}</td>
          <td>{character.SPD}</td>
          <td>{character.ACC}</td>
          <td>{character.DEX}</td>
          <td>{character.SKL}</td>
          <td>{character.Starting_Level}</td>
          <td>{character.Skill}</td>
        </tr>
      {/each}
    </tbody>
  </table>
  </div>
</Container>

<style>
  div.table-wrapper {
    overflow: auto;
    margin: 1rem;
    padding: 0;
    border-radius: 5px;
  }

  table {
    border-collapse: collapse;
    overflow: hidden;
    width: 100%;
  }

  table tr {
    background: white;
    color: black;
  }

  thead tr {
    background-color: #009879;
    background-color: #ee6463;
    color: #ffffff;
    text-align: left;
  }

  table th, table td {
    padding: .25rem .5rem;
  }

  tbody tr {
    border-bottom: 1px solid #dddddd;
    background: #fff4f2;
  }

  tbody tr:nth-of-type(even) {
    background-color: #f3eed9;
  }

  table tr th {
    cursor: pointer;
  }
</style>
