<script>
  import Container from '$lib/components/container.svelte';
</script>

<Container>
  <h2>Exit Fate: Shiva Passage Guide</h2>
  <hr class="border">
  <p>
    Shiva Passage can be a bit of a headache, between switching parties and flipping alternating switches to navigate its corridors. Even with a map, things can be a bit tricky, so not only do we have a map for you, but also a step-by-step guide to make your way through Shiva Passage quickly and easily.
  </p>
  <aside>
    Note: Refer to the <a href="/guides/chests/">Treasure Chest List</a> for the contents of the treasure chests within Shiva Passage.
  </aside>
  <img src="/images/guides/maps/shiva_passage.png" alt="">
  <ol>
    <li>
      Default active switch is Moon.
    </li>
    <li>
      <b>Ayara</b>: Exit start, north to middle path to east Moon door, activate Sun inside.
    </li>
    <li>
      <b>Daniel</b>: Exit start, north through Sun door, switch to Jovian.
    </li>
    <li>
      <b>Jovian</b>: Exit start, north through Sun door, collect treasure inside, exit. South to west path, north through Sun door, east to parallel hallways, collect treasure in north hallway, west to activate Star.
    </li>
    <li>
      <b>Daniel</b>: Northeast to Star door, collect treasure inside, exit. South, west, north, collect treasure to east, up west stairs.
    </li>
    <li>
      <b>Harvey</b>: Exit start, down west stairs, through east Star doors, northwest to activate Moon.
    </li>
    <li>
      <b>Daniel</b>: East, south, east, north through Moon door.
    </li>
    <li>
      <b>Jovian</b>: Exit switch room, exit parallel hallways, west, north through Moon door.
    </li>
    <li>
      <b>Ayara</b>: Activate Sun.
    </li>
    <li>
      <b>Jovian</b>: North, west, north through Sun door, up stairs, step on button.
    </li>
    <li>
      <b>Harvey</b>: Activate Moon.
    </li>
    <li>
      <b>Ayara</b>: Exit switch room.
    </li>
    <li>
      <b>Daniel</b>: West to Star switch, activate Star.
    </li>
    <li>
      <b>Harvey</b>: Exit switch room, full east, south, collect treasure, south, east, north through Star door, down west stairs, east, step on button.
    </li>
    <li>
      <b>Ayara</b>: South, west, north through Star door. Turn into first doorway to collect treasure, return to hallway, east, north, up stairs, north, step on button.
    </li>
    <li>
      <b>Daniel</b>: Exit switch room, east, north, step on button.
    </li>
    <li>
      Locked doors open, proceed to goals/bosses as desired. (Jovian: North through unlocked door, full east to collect treasure before taking other path to goal/boss.)
    </li>
  </ol>
</Container>

<style>
  img {
    max-width: calc(100% - 2rem);
  }

  li {
    list-style-type: decimal-leading-zero;
  }

  li:not(:last-child) {
    margin-bottom: .5rem;
  }
</style>
