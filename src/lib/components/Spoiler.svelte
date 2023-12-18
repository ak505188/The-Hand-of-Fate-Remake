<script>
  export let title = 'How to Obtain';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<details on:click={({ target }) => target.open = !target.open}>
  <summary>{title}</summary>
  <slot/>
</details>

<style>
  details {
    display: inline;
    color: #a2b9d3;
    cursor: pointer;
  }

  details summary {
    list-style: none;
  }

  details[open] summary, details summary::marker {
    display: none;
  }
</style>
