<script lang="ts">
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import { BUILDER_STATES } from '.';

	const dispatch = createEventDispatcher();

	function dispatchClick(debugText: string) {
		dispatch('click', {
			debugText: debugText
		});
	}

	const DEBUG_TEXTS = [...BUILDER_STATES, 'SHARE'] as const;
</script>

<div transition:fade class="btn-group variant-filled-surface flex-wrap m-1 print:hidden">
	{#each DEBUG_TEXTS as debugText}
		<button
			on:click={() => {
				dispatchClick(debugText);
			}}
		>
			{debugText}
		</button>
	{/each}
</div>
