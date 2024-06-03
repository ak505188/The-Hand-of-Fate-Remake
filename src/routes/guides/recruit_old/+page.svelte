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

  <h2>
    Optional Recruits
  </h2>
  <h3>Chapter 2</h3>
  {#each Recruits.filter(recruit => recruit.available == 2) as recruit}
     <Recruit recruit={recruit}/>
  {/each}
  <h3>Chapter 3</h3>
  {#each Recruits.filter(recruit => recruit.available == 3) as recruit}
     <Recruit recruit={recruit}/>
  {/each}
  <h3>Chapter 4</h3>
  {#each Recruits.filter(recruit => recruit.available == 4) as recruit}
     <Recruit recruit={recruit}/>
  {/each}
  <h3>Chapter 5</h3>
  {#each Recruits.filter(recruit => recruit.available == 5) as recruit}
     <Recruit recruit={recruit}/>
  {/each}
  <h3>Chapter 6</h3>
  {#each Recruits.filter(recruit => recruit.available == 6) as recruit}
     <Recruit recruit={recruit}/>
  {/each}
  <h3>Chapter 7</h3>
  {#each Recruits.filter(recruit => recruit.available == 7) as recruit}
     <Recruit recruit={recruit}/>
  {/each}
  <h3>Chapter 8</h3>
  {#each Recruits.filter(recruit => recruit.available == 8) as recruit}
     <Recruit recruit={recruit}/>
  {/each}

  <h2>Story Recruits (SPOILER WARNING)</h2>
  {#each Recruits.filter(recruit => recruit.automatic) as recruit}
     <Recruit recruit={recruit}/>
  {/each}
</Container>

<style>
</style>
