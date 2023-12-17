<script>
  import Navbar from '$lib/components/navbar.svelte';
</script>

<svelte:head>
  <title>The New Hand of Fate</title>
</svelte:head>
<Navbar/>
<slot/>

<style>
  :global(body) {
    background: #160800 url('/images/background.jpg');
    background-attachment:fixed;
    background-repeat:repeat;
    background-position:center;
    color: white;
  }

  :global(ul) {
    list-style-position: inside;
  }
</style>
