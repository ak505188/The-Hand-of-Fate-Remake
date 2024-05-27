<script>
  import Container from '$lib/components/container.svelte';
  import ComicViewer from '$lib/components/ComicViewer.svelte';

  const imagePathGenerator = page => `/images/comic/${(page + 1).toString().padStart(2, '0')}.png`;
</script>

<Container>
  <h2>Exit Fate Comic: The Wanderer</h2>
  <hr class="border">
  <ComicViewer imagePathGenerator={imagePathGenerator} page_count={8}/>
</Container>
