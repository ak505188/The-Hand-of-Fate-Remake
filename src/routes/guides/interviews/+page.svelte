<script>
  import { page } from '$app/stores';
  import Container from '$lib/components/container.svelte';
  import interviews from '$lib/data/characters/interviews.js';

  const character_names = Object.keys(interviews);

  const generateImagePath = name => `/images/characters/horizontal/${name.toLowerCase().replace(' ', '')}.jpg`
  const generateInterviewPath = name => `${$page.url.pathname}/${name.replace(' ', '_')}`

</script>

<Container>
  <h2>Exit Fate: Meiko's Interviews</h2>
  <hr class="border">
  <p>
    Upon recruiting Meiko, you can find her in her room in the northeast first floor of Elysium Castle. There, you can ask her to interview other characters you have recruited. Don't feel like spending the time to unlock them all, though? If that's the case, here's a complete list of the interviews conducted.
  </p>
  <section>
    {#each character_names as name}
      <a href={generateInterviewPath(name)}>
        <img src={generateImagePath(name)} alt="{name} Interview" width=128 height=64>
        <div>{name}</div>
      </a>
    {/each}
  </section>
</Container>

<style>
  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, 128px);
    justify-content: center;
    gap: 1rem;
    text-align: center;
  }
</style>
