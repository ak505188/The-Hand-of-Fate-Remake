<script>
  export let recruit;
</script>

<details>
  <summary>{recruit.name}</summary>
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

</style>
