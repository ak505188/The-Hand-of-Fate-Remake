<script>
  import Spoiler from '$lib/components/Spoiler.svelte';
  export let item;
  export let header = false;

  const has_description = item.description || item.how_to_obtain;

</script>

<div class:header={header} class:description={has_description} class="row">
  <div class="name">{item.name}</div>
  <div class="wgt">{item.WGT}</div>
  <div class="pdf">{item.PDF}</div>
  <div class="mdf">{item.MDF || ''}</div>
  {#if has_description}
  <div class="other">
    {item.description || ''}
    {#if item.how_to_obtain}
      <Spoiler>{item.how_to_obtain}</Spoiler>
    {/if}
  </div>
  {/if}
</div>

<style>
  .row {
    display: grid;
    grid-template-columns: 12rem repeat(3, 4rem);
    margin: .25rem 0;
  }

  .row.header {
    font-weight: 600;
  }

  .row.description {
    grid-template-columns: 12rem repeat(3, 4rem) auto;
  }

  @media (max-width: 700px) {
    .row.row {
      grid-template-columns: 12rem repeat(2, 4rem) auto;
    }

    .row .name {
      text-wrap: wrap;
    }

    .row .other {
      width: 100%;
      text-wrap: wrap;
      grid-area: other;
    }

    .row.description {
      grid-template-areas:
        ". . . ."
        "other other other other";
    }
  }

  @media (max-width: 420px) {
    .row.row {
      grid-template-columns: auto repeat(3, 2.875rem);
    }
  }
</style>
