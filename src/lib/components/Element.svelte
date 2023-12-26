<script>
  import Elements from '$lib/data/elements.js'
  export let element;
</script>

{#if element == Elements.Light}
  <span style="color:var(--element-light)">&#9670;</span>
{:else if element == Elements.Dark}
  <span style="color:var(--element-dark)">&#9632;</span>
{:else if element == Elements.Fire}
  <span style="color:var(--element-fire)">&#9650;</span>
{:else if element == Elements.Ice}
  <span style="color:var(--element-ice)">&#9660;</span>
{:else if element == Elements.Water}
  <span style="color:var(--element-water)">&#9679;</span>
{:else if element == Elements.Lightning}
  <span style="color:var(--element-lightning)">&#9733;</span>
{:else}
  <span/>
{/if}

<style>
  span {
    display: inline-block;
    text-align: center;
    min-width: 1rem;
    margin-left: -2px;
  }
</style>
