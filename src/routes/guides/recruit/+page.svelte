<script>
  import Container from '$lib/components/container.svelte';
  import Spoiler from '$lib/components/Spoiler.svelte';
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
  <section>
    <h3>All Recruits Reward</h3>
    <p>
      After obtaining all 75 characters, open the chest on the basement of Elysium Castle.
    </p>
    <p>
      The first Shadow Boss will now be unlocked (with its location clued from the dialogues), and Battle Plan #23 is also obtained to unlock the hardest bonus war battle.
    </p>
    <h4>Shadow Boss Locations</h4>
    <ol>
      <li>
        <Spoiler title="Location">
          Levier - Inside Daniel’s bedroom in the orphanage second floor
        </Spoiler>
      </li>
      <li>
        <Spoiler title="Location">
          Matrech State Capital - Inside Erin’s office in the city hall
        </Spoiler>
      </li>
      <li>
        <Spoiler title="Location">
          St. Reinard - Inside the central meeting hall in the castle
        </Spoiler>
      </li>
      <li>
        <Spoiler title="Location">
          Muspelheim - Inside the basement room in the inn
        </Spoiler>
      </li>
      <li>
        <Spoiler title="Location">
          Alfheim - Inside the bedroom in the inn
        </Spoiler>
      </li>
      <li>
        <Spoiler title="Location">
          Nifl Woods
        </Spoiler>
      </li>
    </ol>
  </section>
</Container>

<style>
  section {
    margin: 1rem 0;
  }

  section ol {
    margin: 0;
    padding: 0;
  }
</style>
