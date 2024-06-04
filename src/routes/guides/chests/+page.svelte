<script>
  import Container from '$lib/components/container.svelte';
  import Table from './Table.svelte';
  import Chests from '$lib/data/items/chests.js';
  import ImageModal from '$lib/components/ImageModal.svelte';

  let src;
  let showModal = false;

  function openModal(new_src) {
    src = new_src;
    showModal = true;
  }

</script>

<ImageModal bind:showModal={showModal} bind:src={src}/>
<Container>
  <h2>Exit Fate: Treasure Chest List</h2>
  <hr class="border">
  <section>
    {#each Chests as chests}
      <Table title={chests.location} tip={chests.tip} chests={chests.chests} open={openModal}/>
    {/each}
  </section>
</Container>

<style>
  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
</style>
