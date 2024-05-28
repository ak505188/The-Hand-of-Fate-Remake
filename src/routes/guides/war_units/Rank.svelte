<script>
  export let rank = 0;

  const classes = ['bronze', 'silver', 'gold'];

</script>

<span class={classes[rank-1]}>
  {#each {length: rank} as _}
    &#9733;
  {/each}
</span>

<style>
  span.bronze {
    color: #CD7F32;
  }

  span.silver {
    color: #C0C0C0;
  }

  span.gold {
    color: #FFD700;
  }
</style>
