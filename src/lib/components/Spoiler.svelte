<script>
  export let title = 'How to Obtain';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<details class="spoiler" on:click={({ target }) => target.open = !target.open}>
  <summary>{title}</summary>
  <slot/>
</details>

<style>
  :global(details.spoiler) {
    display: inline;
    color: var(--color-text-alt);
    cursor: pointer;
  }

  :global(details.spoiler summary) {
    list-style: none;
  }

  :global(details[open].spoiler summary), :global(details.spoiler summary::marker) {
    display: none;
  }
</style>
