<script>
  import Container from '$lib/components/container.svelte';
  import Table from './Table.svelte';
</script>

<Container>
  <h2>Exit Fate: Relations List</h2>
  <hr class="border">
  <p>
    Character relations are special effects triggered by having certain characters active in battle together, which can grant stat boosts (or deductions, in some cases). These stat changes affect all stats except HP and MP regeneration, and will double if a related character is KO'd. (In the case of deductions, the effect will become positive and then doubled.) The following table will explain the specific values that each relation rank factors into their stat changes.
  </p>
  <table>
    <thead>
      <tr>
        <th>Rank</th>
        <th>Effect</th>
        <th>KO Effect</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>A</td>
        <td>+6%</td>
        <td>+12%</td>
      </tr>
      <tr>
        <td>B</td>
        <td>+4%</td>
        <td>+8%</td>
      </tr>
      <tr>
        <td>C</td>
        <td>+2%</td>
        <td>+4%</td>
      </tr>
      <tr>
        <td>F</td>
        <td>-5%</td>
        <td>+10%</td>
      </tr>
    </tbody>
  </table>
  <p>
    Note: While many of these numbers may not seem very significant, take into account they will stack for each additional related character present in battle. For example, having two characters with A-rank relations accompanying their related character will provide a total of +12% to all stats (except HP and MP+, of course), which will then increase to +18% when one of the A-rank characters is KO'd, and then to +24% if both are KO'd. The best combination of relations available in the game is AAB, which would mean a total of +16%, and +32% if all three related characters are KO'd.
  </p>
  <Table/>
</Container>

<style>
</style>
