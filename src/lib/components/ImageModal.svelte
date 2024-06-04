<script>
  // https://svelte.dev/examples/modal
  import { setContext } from 'svelte';

  setContext('IMAGE_DIALOG', {
    openImageModal: (new_src) => {
      src = new_src;
      showModal = true;
    }
  })

  export let src;
	let dialog; // HTMLDialogElement
  export let showModal = false;

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
  bind:this={dialog}
  on:close={() => {
    src = ''
    showModal = false
  }}
  on:click|self={() => dialog.close()}
>
  {#if src}
    <img src={src} alt=""/>
  {/if}
</dialog>

<style>
  dialog {
    margin: auto;
    padding: 0;
    border: none;
    outline: none;
		background: rgba(0, 0, 0, 0.5);
  }

  img {
    display: block;
    margin: auto;
    width: 100%;
    max-width: 100vw;
		background: rgba(0, 0, 0, 0.5);
  }

	dialog::backdrop {
		background: rgba(0, 0, 0, 0.5);
	}
</style>
