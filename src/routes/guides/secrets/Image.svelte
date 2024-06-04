<script>
  export let open;
  export let base;

  const thumbnail_src = `${base}_th.jpg`;
  const img_src = `${base}.jpg`;
</script>

<button on:click={() => open(img_src)}>
  <img src={thumbnail_src} alt=""/>
</button>

<style>
  button {
    padding: 0;
    border: none;
    cursor: pointer;
  }

  button img {
    display: block;
  }
</style>
