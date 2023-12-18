<script>
  import Spoiler from '$lib/components/Spoiler.svelte';
  export let title = 'Accessory Type';
  export let accessories = [];
</script>

<div>
  <h3>{title}</h3>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Effect</th>
      </tr>
    </thead>
    <tbody>
      {#each accessories as accessory}
        <tr>
          <td class="name">{accessory.name}</td>
          <td>
            {accessory.effect}
          </td>
        </tr>

        {#if accessory.how_to_obtain}
          <tr>
            <td colspan=2>
              <Spoiler title="&boxur;How to Obtain">{accessory.how_to_obtain}</Spoiler>
            </td>
          </tr>
        {/if}
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
  }
</style>
