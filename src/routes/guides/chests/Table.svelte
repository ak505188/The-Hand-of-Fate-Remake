<script>
  import Spoiler from '$lib/components/Spoiler.svelte';
  export let title = 'Location';
  export let chests = [];
  export let tip = null;

  const strToPath = (str, space_replacement = '_') => {
    const new_str = str
    .toLowerCase()
    .replace(/\s/g, space_replacement)
    .replace(':', '')
    .replace('\'', '')
    .replace('#', '')
    return new_str;
  }
</script>

<div>
  <h3>
    {title}
    {#if tip}
      <Spoiler title="[?]">{tip}</Spoiler>
    {/if}
  </h3>
  <table>
    <thead>
      <tr>
        <th>No.</th>
        <th>Contents</th>
      </tr>
    </thead>
    <tbody>
      {#each chests as chest,index}
        <tr>
          <td>
            <a href="/images/guides/chests/{strToPath(title)}/{chest.no ? chest.no.toLowerCase().replace('.', '') : (index + 1).toString().padStart(2, '0')}-{strToPath(chest.name, '')}.jpg">
            {chest.no ? chest.no : (index + 1).toString().padStart(2, '0')}</td>
          <td>{chest.name}</td>
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
