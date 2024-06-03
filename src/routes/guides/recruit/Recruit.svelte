<script>
  export let recruit;
</script>

<details>
  <summary>
    {recruit.name}
    {#if recruit.available}
      <span>Chapter {recruit.available}</span>
    {/if}
  </summary>
  <div>
    {#if recruit.castle_function}
      <p>Castle Function: {recruit.castle_function}</p>
    {/if}
    {@html recruit.html}
  </div>
</details>

<style>
  summary {
    font-size: 1.125rem;
  }

  details {
    background: var(--color-background-alt);
    box-shadow: 0 0 0 1px var(--color-border-alt);
  }

  details[open] {
    margin: 1rem auto;
  }

  summary {
    display: flex;
    padding: .5rem;
  }

  summary span {
    margin-left: auto;
  }

  details summary::before {
    font-weight: 600;
    font-size: 1rem;
    content: '+';
    margin-right: .25rem;
    font-family: monospace;
    cursor: pointer;
  }

  details[open] summary::before {
    content: '-';
  }

  details > div {
    outline: 1px solid var(--color-border-alt);
    padding: .5rem 1rem;
  }
</style>
