<script lang="ts">
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function dispatchClick(buttonText: string) {
		dispatch('click', {
			buttonText: buttonText
		});
	}

	function dispatchClickEdit() {
		dispatchClick('EDIT');
	}

	function dispatchClickShare() {
		dispatchClick('SHARE');
	}
</script>

<div transition:fade class="btn-group variant-filled m-1 print:hidden">
	<button on:click={dispatchClickEdit}>Edit</button>
	<button on:click={dispatchClickShare}>Share</button>
</div>
