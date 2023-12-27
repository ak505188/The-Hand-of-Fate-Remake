<script>
  import Container from '$lib/components/container.svelte';
  import BGM from '$lib/data/bgm.js';
  import Table from './Table.svelte';
</script>

<Container>
  <h2>Exit Fate: BGM List</h2>
  <hr class="border">
  <p>
    Exit Fate borrows a lot from a myriad of well-respected RPG's, and its soundtrack is no exception to that. If you're curious about the music used for any particular part of the game, then this is where you want to be. Below is a complete list of Exit Fate's soundtrack, with each track's original title and source.
  </p>
  <aside>
    Note: * = Band name; track not from a game.
  </aside>
  <Table BGM={BGM}/>
</Container>
