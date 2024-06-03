<script>
  export let label;
  export let name = label;
</script>

<div style="grid-area:{name.toLowerCase()}">
  <header>{label}</header>
  <span><slot/></span>
</div>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
    padding: .5rem;
    outline: 1px solid var(--color-border-alt);
  }

  div header {
    padding-right: .5rem;
    text-decoration: underline;
  }
</style>
