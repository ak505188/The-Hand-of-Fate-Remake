<script>
  import Container from '$lib/components/container.svelte';
  import { stats } from '$lib/data/characters.js';

  let characters = stats;
</script>

<Container>
  <h2>Character Stats</h2>
  <p>This table shows the base stats values for each characters. The actual stats are calculated based on the level and their base stat. 100 is the baseline (e.g. 120 base STR means they have 20% higher STR than average at all levels). Refer to the game mechanics formulas guide to calculate the exact stats for each characters based on their levels & equipment.</p>
  <div class="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>Character</th>
        <th>Element</th>
        <th>HP</th>
        <th>MP+</th>
        <th>STR</th>
        <th>MAG</th>
        <th>PDF</th>
        <th>MDF</th>
        <th>SPD</th>
        <th>ACC</th>
        <th>DEX</th>
        <th>SKL</th>
        <th>Starting Level</th>
        <th>Skill</th>
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
  }
</style>
