<script lang="ts">
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import { STATES } from '.';

	const dispatch = createEventDispatcher();

	function dispatchClick(debugText: string) {
		dispatch('click', {
			debugText: debugText
		});
	}

	const debugTexts = [...STATES, 'SHARE'];
</script>

<div transition:fade class="btn-group variant-filled m-1 print:hidden">
	{#each debugTexts as debugText}
		<button
			on:click={() => {
				dispatchClick(debugText);
			}}
		>
			{debugText}
		</button>
	{/each}
</div>
