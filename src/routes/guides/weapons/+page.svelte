<script>
  import Container from '$lib/components/container.svelte';
  import { weapons } from '$lib/data/characters.js';
</script>

<Container>
  <h2>Exit Fate: Character Skills</h2>
  <p>
    Upgrading weapons can be rather expensive, and because of that, you often have to decide whose weapons are worth upgrading sooner than later, and whose can wait. Just for this kind of purpose, here's a complete list of all 75 playable characters' weapons and their stats at each level.
  </p>

  {#each weapons as character}
    <aside><b>{character.name}</b>: {character.weapon}</aside>
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>LVL</th>
            {#each character.ATK as _,index}
              <th>{index}</th>
            {/each}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ATK</td>
            {#each character.ATK as atk}
              <td>{#if atk}{atk}{/if}</td>
            {/each}
          </tr>
          <tr>
            <td>HIT</td>
            {#each character.HIT as hit}
              <td>{#if hit}{hit}{/if}</td>
            {/each}
          </tr>
          <tr>
            <td>CRT</td>
            {#each character.CRT as crt}
              <td>{#if crt}{crt}{/if}</td>
            {/each}
          </tr>
        </tbody>
      </table>
    </div>
  {/each}
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
