<script>
  export let imagePathGenerator;
  export let page_count;
  export let starting_page = 0;

  $:current_page = starting_page;

  const page_images = [];
  for (let i = 0; i < page_count; i++) {
    page_images.push(imagePathGenerator(i))
  }

  const adjustPage = amount => {
    current_page = current_page + amount;
    if (current_page < 0) current_page = 0;
    if (current_page >= page_count) current_page = page_count - 1;
  }
</script>

<div>
  <img src={page_images[current_page]} alt="Comic page {current_page}">
  <div>
    <button class="prev" on:click={() => adjustPage(-1)}>Previous</button>
    <button class="next" on:click={() => adjustPage(1)}>Next</button>
  </div>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
  }

  div > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  img {
    margin: auto;
    max-width: 100%;
  }

  button {
    background: none;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1rem;
  }

  button.next {
    right: 0;
  }

  button.prev {
    left: 0;
  }
</style>
