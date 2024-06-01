<script>
  import Container from '$lib/components/container.svelte';
  import LeaderTable from './LeaderTable.svelte';
  import UnitTable from './UnitTable.svelte';
  import UnitTypeTable from './UnitTypeTable.svelte';
  import Rank from './Rank.svelte';
  import { Leaders, Skills, Units } from '$lib/data/war.js';
</script>

<Container>
  <h2>Exit Fate: War Unit Guide</h2>
  <hr class="border">
  <p>
    <b>Exit Fate</b> has a rather large cast of characters to choose from, not only for your standard random encounters and boss battles, but for the strategic war campaigns as well. If you're looking for a quick reference, without the trek through Elysium Castle to speak with your strategist, then here you go.</p>
  <h3>Unit Types</h3>
  <section class="unit-types">
    <UnitTypeTable type="Infantry" range={1} movement={[2,2,2]} stat_change="+1 ATK, +1 DEF"/>
    <UnitTypeTable type="Cavalry" range={1} movement={[4,1,1]}/>
    <UnitTypeTable type="Scout" range={2} movement={[3,3,1]}/>
    <UnitTypeTable type="Sorcery" range={3} movement={[2,1,1]} stat_change="+1 ATK*"/>
  </section>
  <ul>
    <li>Note: Movement range is listed as normal, in forests, and then in mountains.</li>
    <li>* - The game incorrectly shows -1 in the unit formation setup page.</li>
  </ul>
  <h4>Rank Penalties</h4>
  <table>
    <tbody>
      <tr>
        <td><Rank rank={3}/></td>
        <td>-0 ATK, -0 DEF</td>
      </tr>
      <tr>
        <td><Rank rank={2}/></td>
        <td>-1 ATK, -1 DEF</td>
      </tr>
      <tr>
        <td><Rank rank={1}/></td>
        <td>-2 ATK, -2 DEF</td>
      </tr>
    </tbody>
  </table>
  <h3>Unit Leaders</h3>
  <section>
    {#each Leaders as leader}
       <LeaderTable leader={leader}/>
    {/each}
  </section>
  <h3>Unit Members</h3>
  <section class="unit-members">
    {#each Units as unit}
       <UnitTable unit={unit}/>
    {/each}
  </section>
  <h3>Skills</h3>
  <table>
    <tbody>
      {#each Object.entries(Skills) as [name, skill]}
      <tr>
        <td>{name}</td>
        <td>{skill}</td>
      </tr>
      {/each}
    </tbody>
  </table>
  <p>Some skills are glitched, you can read more about it <a href="/guides/errors#War_Battle_Glitches">here</a>.
</Container>

<style>
  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  }

  section.unit-members {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  section.unit-types {
    grid-template-columns: repeat(auto-fit, max(360px, calc(50% - 2rem)));
  }

  h3 {
    margin: 1rem 0;
  }

  ul {
    list-style: none;
  }
</style>
