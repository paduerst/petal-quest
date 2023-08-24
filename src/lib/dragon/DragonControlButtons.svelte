<script lang="ts">
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher<{ click: { buttonText: string } }>();

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

<div transition:fade class="btn-group variant-filled-surface flex-wrap m-1 print:hidden">
	<button on:click={dispatchClickEdit}>Edit Dragon</button>
	<!-- <button on:click={dispatchClickShare}>Share</button> -->
</div>
