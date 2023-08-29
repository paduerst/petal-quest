<script lang="ts">
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import { BUILDER_STATES } from './builder-states';

	const dispatch = createEventDispatcher<{ click: { debugText: string } }>();

	function dispatchClick(debugText: string) {
		dispatch('click', {
			debugText: debugText
		});
	}

	const DEBUG_TEXTS = [...BUILDER_STATES, 'SHARE'] as const;
</script>

<div transition:fade class="flex flex-wrap justify-center print:hidden">
	{#each DEBUG_TEXTS as debugText}
		<button
			class="btn variant-filled-surface m-1"
			on:click={() => {
				dispatchClick(debugText);
			}}
		>
			{debugText}
		</button>
	{/each}
</div>
