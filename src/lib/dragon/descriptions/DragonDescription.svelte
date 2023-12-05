<script lang="ts">
	import type { DragonConfig } from '../dragon-config';

	import ColorDescriptionRed from './ColorDescriptionRed.svelte';

	import AgeDescriptionWyrmling from './AgeDescriptionWyrmling.svelte';

	export let config: DragonConfig | undefined;
</script>

{#if config !== undefined}
	<div>
		{#if config?.color === 'red'}
			<ColorDescriptionRed />
		{/if}
	</div>

	<div class="mt-2">
		{#if config?.age === 'wyrmling'}
			<AgeDescriptionWyrmling />
		{/if}
	</div>
{/if}
