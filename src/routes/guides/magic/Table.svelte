<script>
  export let title = 'Element Type';
  export let symbol;
  export let color = 'inherit';
  export let magic = [];
</script>

<div>
  <h3>
    {title}
    {#if symbol}
      <span style="color:{color}">{symbol}</span>
    {/if}
  </h3>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>MP Cost</th>
        <th>Effect</th>
      </tr>
    </thead>
    <tbody>
      {#each magic as spell}
        <tr>
          <td class="name">{spell.name}</td>
          <td>{spell.MP}/{Math.floor(spell.MP*1.2)}</td>
          <td>
            {spell.effect}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

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
