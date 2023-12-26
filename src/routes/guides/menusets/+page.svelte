<script>
  import Container from '$lib/components/container.svelte';

  const image_src = (name, index) => `/images/guides/menusets/${index.toString().padStart(2, '0')}-${name.toLowerCase()}.PNG`

  const menusets = [
    {
      name: 'Standard',
      how_to_obtain: 'Default. Speak to Venkal in his room after recruiting him.',
    },
    {
      name: 'Blue',
      how_to_obtain: 'Speak to Venkal in his room after recruiting him.',
    },
    {
      name: 'Antagonist',
      how_to_obtain: 'Dropped by Demilich in Forgotten Cave.',
    },
    {
      name: 'Hilbert',
      how_to_obtain: 'Found in a chest at Kelsinger Pass.',
    },
    {
      name: 'Suikoden',
      how_to_obtain: 'Found in a chest in Elemental Mansion.',
    },
    {
      name: 'Arms',
      how_to_obtain: 'Stolen from Pandora Box in the Kirgard region (world map).',
    },
    {
      name: 'Chrono',
      how_to_obtain: 'Found in a chest in the Magma Caverns.',
    },
    {
      name: 'Wood',
      how_to_obtain: 'Speak to Sister Eliza in the Levier orphanage. (Chapter 8)',
    },
    {
      name: 'Retro',
      how_to_obtain: 'Dropped by Phaseshaper in the Hall of Memories.',
    },
    {
      name: 'Imperial',
      how_to_obtain: 'Found in a chest in Vanaheim.',
    },
  ];
</script>

<Container>
  <h2>Exit Fate: Menu Set List</h2>
  <hr class="border">
  <p>
    Menu Sets are special items that allow you to change the appearance of your menus, provided you have Venkal recruited. Whenever you find new Menu Sets, just talk to him (northeast 2nd floor of the castle), and he'll change your menus for you.
  </p>
  <ul>
    {#each menusets as menuset,index}
      <li>
        <h4>Menu Set #{index+1}: {menuset.name} Set</h4>
        <aside>How to Obtain: {menuset.how_to_obtain}</aside>
        <img src={image_src(menuset.name, index+1)} alt="">
      </li>
    {/each}
  </ul>
</Container>

<style>
  ul {
    list-style-type: none;
    text-align: center;
  }

  li h4 {
    margin-bottom: 0;
  }

  li img {
    max-width: 100%;
  }
</style>
