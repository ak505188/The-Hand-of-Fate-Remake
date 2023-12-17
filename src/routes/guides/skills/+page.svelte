<script>
  import Container from '$lib/components/container.svelte';
</script>

<Container>
  <h2>Exit Fate: Character Skills</h2>
  <p>
    Among the 75 playable characters, a select few have special abilities they can use in battle to increase their attack power or range, recover HP or MP, or assist the party in other ways. Below is a list of these skills, including their effects and the characters with those skills. For the skills that are stat-dependent, there are also ranks assigned to the characters who are able to use their skills most effectively.
  </p>
  <ul>
    <li>
      <h3>Aura</h3>
      <ul>
        <li><b>Effect</b>: Heal adjacent allies. Recovery: 1/6 user's max HP.</li>
        <li><b>Characters</b>: Avelion, Deus, Luther</li>
        <li><b>Rank</b>: 1. Avelion, 2. Deus, 3. Luther</li>
      </ul>
    </li>
    <li>
      <h3>Column Strike</h3>
      <ul>
        <li><b>Effect</b>: Attack a column of enemies. 80% damage.</li>
        <li><b>Characters</b>: Angel, Griever, Keyser, Shin</li>
        <li><b>Rank</b>: 1. Shin, 2. Griever, 3. Keyser, 4.Angel</li>
      </ul>
    </li>
    <li>
      <h3>Focus</h3>
      <ul>
        <li><b>Effect</b>: Recover user's MP. Recovery: 80% MP+ value.</li>
        <li><b>Characters</b>: Deke, Myst, Orlando</li>
        <li><b>Rank</b>: 1. Myst, 2. Deke/Orlando</li>
      </ul>
    </li>
    <li>
      <h3>Row Strike</h3>
      <ul>
        <li><b>Effect</b>: Attack a row of enemies. 80% damage.</li>
        <li><b>Characters</b>: Derek, Nomad, Outsider, Tarlia</li>
        <li><b>Rank</b>: 1. Derek, 2. Outsider, 3. Nomad, 4. Tarlia</li>
      </ul>
    </li>

    <li>
      <h3>Scan</h3>
      <ul>
        <li><b>Effect</b>: View an enemy's stats and rewards.</li>
        <li><b>Characters</b>: Col, Darwin, Wilona</li>
      </ul>
    </li>
    <li>
      <h3>Smokescreen</h3>
      <ul>
        <li><b>Effect</b>: Escape battle. Random encounters only.</li>
        <li><b>Characters</b>: Harvey, Mandala, Yomiko</li>
      </ul>
    </li>
    <li>
      <h3>Steal</h3>
      <ul>
        <li><b>Effect</b>: Attempt to steal an item from an enemy.</li>
        <li><b>Characters</b>: Joe, Marcello, Reod, Rorschach</li>
      </ul>
    </li>
    <li>
      <h3>Wild Attack</h3>
      <ul>
        <li><b>Effect</b>: Attack one enemy. 120% damage, stunned next turn.</li>
        <li><b>Characters</b>: Ayara, Bruce, Petra, Shadfork</li>
        <li><b>Rank</b>: 1. Bruce, 2. Ayara, 3. Petra, 4. Shadfork</li>
        <li>Tip: Use Lock status on them so they will not get stunned.</li>
      </ul>
    </li>
  </ul>
</Container>

<style>
  ul {
    list-style-type: none;
  }

  ul ul {
    padding: 0;
  }
</style>
