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

<div transition:fade class="flex flex-wrap print:hidden">
	<button class="btn variant-filled-surface m-1" on:click={dispatchClickEdit}>Edit Dragon</button>
	<!-- <button class="btn variant-filled-surface m-1" on:click={dispatchClickShare}>Share</button> -->
</div>
