<script>
  export let shop;
</script>

<div>
  {#if shop.town}
  <h3>
    {shop.town}
  </h3>
  {/if}
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {#each shop.items as item}
        <tr>
          <td>{item.name || ' '}</td>
          <td>{item.cost ? `${item.cost} Arn` : ' '}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  div {
    width: min(100%, 360px);
  }

  td, th {
    text-align: left;
    padding: .25rem .5rem;
  }

  tr {
    height: 30px;
  }

  td:first-child, th:first-child {
    padding-left: 0;
    padding-right: 1rem;
    min-width: 7.5rem;
  }
</style>
