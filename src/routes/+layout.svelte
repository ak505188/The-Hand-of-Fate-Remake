<script>
  import Navbar from '$lib/components/navbar.svelte';
</script>

<svelte:head>
  <title>The New Hand of Fate</title>
</svelte:head>
<Navbar/>
<slot/>

<style>
  :root {
    --element-light: #00ffff;
    --element-dark: #9966cc;
    --element-fire: #ff0000;
    --element-ice: #ffffff;
    --element-water: #0070ff;
    --element-lightning: #ffff00;
    --color-text-alt: #a2b9d3;
  }

  :global(body) {
    background: #160800 url('/images/background.jpg');
    background-attachment:fixed;
    background-repeat:repeat;
    background-position:center;
    color: white;
  }

  :global(ul, ol) {
    list-style-position: inside;
  }

  :global(hr) {
    padding: 0 !important;
    width: calc(100% - 2rem);
    height: 2px;
    background: white;
  }

  :global(h2) {
    font-size: 1.25rem;
    margin: .5rem 0;
  }
</style>
