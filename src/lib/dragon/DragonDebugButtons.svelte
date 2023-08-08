<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function dispatchClick(debugText: string) {
		dispatch('click', {
			debugText: debugText
		});
	}

	function dispatchClickLoading() {
		dispatchClick('LOADING');
	}

	function dispatchClickWelcome() {
		dispatchClick('WELCOME');
	}

	function dispatchClickDisplay() {
		dispatchClick('DISPLAY');
	}

	function dispatchClickEdit() {
		dispatchClick('EDIT');
	}

	function dispatchClickCopy() {
		dispatchClick('COPY');
	}
</script>

<div class="btn-group variant-filled m-1 print:hidden">
	<button on:click={dispatchClickLoading}>LOADING</button>
	<button on:click={dispatchClickWelcome}>WELCOME</button>
	<button on:click={dispatchClickDisplay}>DISPLAY</button>
	<button on:click={dispatchClickEdit}>EDIT</button>
	<button on:click={dispatchClickCopy}>COPY</button>
</div>
