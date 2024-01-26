<script>
  import Relations from '$lib/data/relations.js';
</script>

<table>
  <thead>
    <tr>
      <th>Character</th>
      <th>Relation 1</th>
      <th>Rank</th>
      <th>Relation 2</th>
      <th>Rank</th>
      <th>Relation 3</th>
      <th>Rank</th>
    </tr>
  </thead>
  <tbody>
    {#each Relations as character}
      <tr>
        <td>{character.name}</td>
        {#each character.relations as relation}
          <td>{relation.character}</td>
          <td>{relation.rank}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

<style>
  td, th {
    text-align: left;
    padding: .25rem .5rem;
  }

  td:first-child, th:first-child {
    padding-left: 0;
    padding-right: 1rem;
    min-width: 7.5rem;
  }
</style>
