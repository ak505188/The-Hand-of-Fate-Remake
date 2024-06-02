<script>
  import Entry from './Entry.svelte';
  export let armor;

  const header = {
    name: 'Name',
    PDF: 'PDF',
    MDF: 'MDF',
    WGT: 'WGT',
  }
</script>

<div>
  <Entry header={true} item={header}/>
  {#each armor as item}
    <Entry item={item}/>
  {/each}
</div>

<style>
  div {
    display: grid;
  }
</style>
