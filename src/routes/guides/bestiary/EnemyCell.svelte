<script>
  export let name;

  const cls = `cell ${name.toLowerCase()}`
</script>

<div class={cls}>
  <header>{name}</header>
  <slot/>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    padding: .5rem;
  }

  div header {
    text-decoration: underline;
  }
</style>
