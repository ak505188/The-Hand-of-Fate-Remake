<script>
  export let BGM;
</script>

<table>
  <thead>
    <tr>
      <th>Exit Fate Track</th>
      <th>Original Title</th>
      <th>Source</th>
    </tr>
  </thead>
  <tbody>
    {#each BGM as { track, name, source }}
      <tr>
        <td>{track}</td>
        <td>{name}</td>
        <td>{source}</td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table {
    width: 100%;
  }

  td, th {
    text-align: left;
    padding: .25rem 0;
    vertical-align: top;
  }

  @media (max-width: 640px) {
    table {
      font-size: .875rem;
    }
  }
</style>
