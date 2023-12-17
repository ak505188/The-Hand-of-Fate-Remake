<script>
  import Container from './container.svelte';
</script>

<Container>
  <nav>
    <ul>
      <li>Home</li>
      <li>About Exit Fate</li>
      <li>Plot Introduction</li>
      <li>Download</li>
      <li><a href="/guides">Gameplay Guides</a></li>
      <li>Forum</li>
      <li>Contact</li>
    </ul>
  </nav>
</Container>

<style>
  ul {
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
    margin: 0;
  }

  li:not(:last-child) {
    padding-right: 1rem;
  }
</style>
