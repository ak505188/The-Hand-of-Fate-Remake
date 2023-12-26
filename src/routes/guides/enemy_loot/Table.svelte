<script>
  export let enemy_loot;
</script>

<div>
  <h3>
    {enemy_loot.area}
  </h3>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Steal (Rarity)</th>
        <th>Drop</th>
        <th>Arn</th>
      </tr>
    </thead>
    <tbody>
      {#each enemy_loot.enemies as enemy}
        <tr>
          <td>{enemy.enemy}</td>
          <td>{enemy.steal || ''}</td>
          <td>{enemy.drop || ''}</td>
          <td>{enemy.arn}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  div {
    width: 100%;
  }

  table {
    width: 100%;
  }

  td, th {
    text-align: left;
    padding: .25rem .5rem;
    width: 7rem;
  }


  td:first-child, th:first-child {
    padding-left: 0;
    padding-right: 1rem;
  }
</style>
