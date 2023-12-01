<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher<{ click: null }>();

	function dispatchClick() {
		dispatch('click');
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === ' ') {
			dispatchClick();
		}
	}

	function handleKeyup(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			dispatchClick();
		}
	}

	export let classes = 'underline print:no-underline';

	export let thisSpan: HTMLSpanElement;
</script>

<span
	role="button"
	tabindex="0"
	on:keydown={handleKeydown}
	on:keyup={handleKeyup}
	on:click={dispatchClick}
	bind:this={thisSpan}
	class={classes}><slot /></span
>
