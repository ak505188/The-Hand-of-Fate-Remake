<script>
  import Container from '$lib/components/container.svelte';
  import Table from './Table.svelte';
  import { Light, Dark, Fire, Ice, Water, Lightning } from '$lib/data/items/magic.js';
</script>

<Container>
  <h2>Exit Fate: Magic List</h2>
  <hr class="border">
  <Table symbol="&#9670;" color="var(--element-light)" title="Light" magic={Light}/>
  <Table symbol="&#9632;" color="var(--element-dark)" title="Dark" magic={Dark}/>
  <Table symbol="&#9650;" color="var(--element-fire)" title="Fire" magic={Fire}/>
  <Table symbol="&#9660;" color="var(--element-ice)" title="Ice" magic={Ice}/>
  <Table symbol="&#9679;" color="var(--element-water)" title="Water" magic={Water}/>
  <Table symbol="&#9733;" color="var(--element-lightning)" title="Lightning" magic={Lightning}/>
</Container>
