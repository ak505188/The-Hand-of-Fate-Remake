<script>
  import Container from '$lib/components/container.svelte';
  import { inventories } from '$lib/data/characters.js';

  let character_inventories = inventories;
  let sortBy = { id: 'character', ascending: true }
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

    character_inventories = character_inventories.sort(sort);
    console.log(character_inventories);
  }
</script>

<Container>
  <h2>Character Initial Equipment</h2>
  <p>
    This is a list of all the equipment and items initially equipped on a character. If you're short on money, the Total Sale Price also acts as a reference on how much Arns can you obtain by selling the inventory of an unused character.
  </p>
  <p>
    Tip: Bartolli's inventory is worth 10000 Arn, which is a very big amount if you recruited him at the start of Chapter 4. You'll need to do more than 40 encounters on Chapter 4 enemies to get the same amount of Arn.
  </p>
  <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          <th on:click={sort('character')}>Character {#if sortBy.id == 'character'}{@html sortSymbol}{/if}</th>
          <th on:click={sort('head')}>Head {#if sortBy.id == 'head'}{@html sortSymbol}{/if}</th>
          <th on:click={sort('body')}>Body {#if sortBy.id == 'body'}{@html sortSymbol}{/if}</th>
          <th on:click={sort('foot')}>Foot {#if sortBy.id == 'foot'}{@html sortSymbol}{/if}</th>
          <th on:click={sort('accessory_1')}>Accessory 1 {#if sortBy.id == 'accessory_1'}{@html sortSymbol}{/if}</th>
          <th on:click={sort('accessory_2')}>Accessory 2 {#if sortBy.id == 'accessory_2'}{@html sortSymbol}{/if}</th>
          <th on:click={sort('accessory_3')}>Accessory 3 {#if sortBy.id == 'accessory_3'}{@html sortSymbol}{/if}</th>
          <th on:click={sort('item_1')}>Item 1 {#if sortBy.id == 'item_1'}{@html sortSymbol}{/if}</th>
          <th on:click={sort('item_2')}>Item 2 {#if sortBy.id == 'item_2'}{@html sortSymbol}{/if}</th>
          <th on:click={sort('total_sale_price')}>Total Sale Price {#if sortBy.id == 'total_sale_price'}{@html sortSymbol}{/if}</th>
        </tr>
      </thead>
      <tbody>
        {#each character_inventories as inventory}
          <tr>
            <td>{inventory.character}</td>
            <td>{inventory.head}</td>
            <td>{inventory.body}</td>
            <td>{inventory.foot}</td>
            <td>{inventory.accessory_1}</td>
            <td>{inventory.accessory_2}</td>
            <td>{inventory.accessory_3}</td>
            <td>{inventory.item_1}</td>
            <td>{inventory.item_2}</td>
            <td>{inventory.total_sale_price}</td>
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
