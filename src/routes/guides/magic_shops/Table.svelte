<script>
  import Element from '$lib/components/Element.svelte';
  export let shop;
</script>

<div>
  <h3>
    {shop.town}
  </h3>
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
          <td><Element element={item.element}/> {item.name}</td>
          <td>{item.cost} Arn</td>
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

  td:first-child, th:first-child {
    padding-left: 0;
    padding-right: 1rem;
    min-width: 7.5rem;
  }
</style>
