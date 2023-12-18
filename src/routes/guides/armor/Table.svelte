<script>
  export let armor;
</script>

<table>
  <thead>
    <tr>
      <th class="name">Name</th>
      <th class="stat">PDF</th>
      <th class="stat">MDF</th>
      <th class="stat">WGT</th>
      <th>Other</th>
    </tr>
  </thead>
  <tbody>
    {#each armor as item}
      <tr>
        <td class="name">{item.name}</td>
        <td class="stat">{item.PDF}</td>
        <td class="stat">{item.MDF || ''}</td>
        <td class="stat">{item.WGT}</td>
        <td>
          {item.description || ''}
          {#if item.how_to_obtain}
            {item.description ? ' | ' : ''}
            <span title="{item.how_to_obtain}">How to Obtain</span>
          {/if}
        </td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  td, th {
    text-align: left;
    padding: .25rem .5rem;
  }

  td.stat, th.stat {
    text-align: right;
  }

  td:first-child, th:first-child {
    padding-left: 0;
    padding-right: 1rem;
  }

  td.name, th.name {
    min-width: 12rem;
  }

  td span {
    color: #a2b9d3;
  }
</style>
