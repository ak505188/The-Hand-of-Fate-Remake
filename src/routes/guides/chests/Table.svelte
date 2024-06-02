<script>
  import Spoiler from '$lib/components/Spoiler.svelte';
  export let title = 'Location';
  export let chests = [];
  export let tip = null;
  export let open;

  const strToPath = (str, space_replacement = '_') => {
    const new_str = str
    .toLowerCase()
    .replace(/\s/g, space_replacement)
    .replace(':', '')
    .replace('\'', '')
    .replace('#', '')
    return new_str;
  }

  const imgPathGenerator = (chest, index) => `/images/guides/chests/${strToPath(title)}/${chest.no ? chest.no.toLowerCase().replace('.', '') : (index + 1).toString().padStart(2, '0')}-${strToPath(chest.name, '')}.jpg`;
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
          <td class="no" on:click={open(imgPathGenerator(chest, index))}>
            {chest.no ? chest.no : (index + 1).toString().padStart(2, '0')}</td>
          <td>{chest.name}</td>
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

  td.no {
    text-decoration: underline;
    cursor: pointer;
    color: var(--color-text-alt);
  }

  td:first-child, th:first-child {
    padding-left: 0;
    padding-right: 1rem;
    min-width: 7.5rem;
  }
</style>
