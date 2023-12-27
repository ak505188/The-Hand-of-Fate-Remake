<script>
  import Container from '$lib/components/container.svelte';
</script>

<Container>
  <h2>Exit Fate: Johnny's Blackjack Table</h2>
  <hr class="border">
  <img src="/images/guides/misc/johnny_bjack.jpg" alt="">
  <p>
    After recruiting Johnny, he can be found in your castle's tavern (2F), where he can be challenged to a game of Blackjack. The amount of money you can place as a bet will be limited. However, he'll allow larger bets later in the game.
  </p>
  <h4>
    Here's the breakdown:
  </h4>
  <ul>
    <li>
      <b>Start:</b> 1000 Arn (100 min)
    </li>
    <li>
      <b>Ch.7:</b> 10000 Arn (100 min)
    </li>
    <li>
      <b>Ch.8:</b> 100000 Arn (1000 min)*
    </li>
  </ul>
  <aside>
    * = After the Battle at Vanaheim.
  </aside>
</Container>

<style>
  img {
    max-width: calc(100% - 2rem);
  }

  h4 {
    font-weight: 400;
  }

  li {
    list-style-type: none;
  }

  li:not(:last-child) {
    margin-bottom: .5rem;
  }
</style>
