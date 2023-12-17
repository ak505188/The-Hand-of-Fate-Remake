<script>
  import Container from './container.svelte';
</script>

<Container>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About Exit Fate</a></li>
      <li><a href="/download">Download</a></li>
      <li><a href="/guides">Gameplay Guides</a></li>
      <li><a href="https://www.tapatalk.com/groups/elysium_castle/exit-fate-discussion-f3/">Forum</a></li>
      <li><a href="/contact">Contact</a></li>
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
