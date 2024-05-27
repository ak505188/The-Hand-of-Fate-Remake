<script>
	/** @type {import('./$types').PageData} */
  import Container from '$lib/components/container.svelte';
	export let data;

  const interview = data.interview;
  const character = data.character;
  const img_path = `/images/characters/horizontal/${character.replace(' ', '').toLowerCase()}.jpg`;
</script>

<Container>
  <h2>Exit Fate: Meiko's Interviews</h2>
  <hr class="border">
  <div class="img-container">
    <img src={img_path} alt={character}>
  </div>
  <h3>{character}</h3>
  {#each interview as interview_lines}
    <p class:meiko={interview_lines.character == 'Meiko'}><b>{interview_lines.character}</b>: {interview_lines.lines}</p>
  {/each}
</Container>

<style>
  div.img-container, h3 {
    text-align: center;
    margin: 1rem;
  }

  p.meiko {
    color: rgb(162, 185, 211);
  }
</style>
