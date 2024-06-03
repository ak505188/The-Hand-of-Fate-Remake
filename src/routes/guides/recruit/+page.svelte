<script>
import Container from '$lib/components/container.svelte';
import Recruits from '$lib/data/recruitment.js';
import Recruit from './Recruit.svelte';
</script>

<Container>
  <h2>Exit Fate: Recruitment Guide</h2>
  <hr class="border">
  <ul>Notes
    <li>All recruits are never missable, feel free to recruit them at your pace.</li>
    <li>All 75 characters are playable in combat and in war battles.</li>
    <li>On the start of Chapter 3, you need to recruit 3 optional characters (out of 6 available recruits) to progress the story.</li>
  </ul>
  <section>
    <h3>
      Optional Recruits
    </h3>
    {#each Recruits.filter(recruit => recruit.available) as recruit}
      <Recruit recruit={recruit}/>
    {/each}

    <h3>Story Recruits (SPOILER WARNING)</h3>
    {#each Recruits.filter(recruit => recruit.automatic) as recruit}
      <Recruit recruit={recruit}/>
    {/each}
  </section>
</Container>

<style>
  section {
    margin: 1rem 0;
  }
</style>
