<script>
  export let recruit;
</script>

<details>
  <summary>
    <span class="name">{recruit.name}</span>
    {#if recruit.method}
      <span class="method">Method {recruit.method}</span>
    {/if}
    {#if recruit.available}
      <span class="available">Chapter {recruit.available}</span>
    {/if}
  </summary>
  <div>
    {#if recruit.castle_function}
      <p class="castle_function">Castle Function: {recruit.castle_function}</p>
    {/if}
    {@html recruit.html}
  </div>
</details>

<style>
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

  summary span.name {
    font-weight: 500;
  }

  summary span.method:before {
    content: "-";
    padding: 0 .25rem;
  }

  summary span.available {
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

  details > div :global(ul) {
    padding-left: 0;
  }
</style>
