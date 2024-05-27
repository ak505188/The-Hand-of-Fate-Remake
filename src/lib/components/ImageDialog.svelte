<script>
  import { setContext } from 'svelte';

  setContext('IMAGE_DIALOG', {
    openImageModal: (new_src) => {
      src = new_src;
      showModal = true;
    }
  })

  let src;
	let dialog; // HTMLDialogElement
  let showModal = false;

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
  bind:this={dialog}
  on:close={() => showModal = false}
  on:click|self={() => dialog.close()}
>
  <h2>Modal Open</h2>
  {#if src}
    <img src={src}/ alt="">
  {/if}
</dialog>
