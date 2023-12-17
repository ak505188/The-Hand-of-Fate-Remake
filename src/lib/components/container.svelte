<div>
  <slot/>
</div>

<style>
  div {
    border: 2px solid yellow;
    border-radius: 5px;
    margin: 1rem auto;
    background-color: #400000;
    max-width: 1200px;
  }

  div :global(a) {
    color: #a2b9d3;
  }

  div > :global(*) {
    padding: 0.25rem 1rem;
  }

  div > :global(hr) {
    height: 2px;
    background: yellow;
    width: calc(100% - 2px * 2);
    margin: 0;
    padding: 0;
  }
</style>
