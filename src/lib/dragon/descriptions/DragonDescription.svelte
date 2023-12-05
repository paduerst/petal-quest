<script lang="ts">
	import type { Age, Color } from '..';

	import ColorDescriptionRed from './ColorDescriptionRed.svelte';

	import AgeDescriptionWyrmling from './AgeDescriptionWyrmling.svelte';

	export let age: Age;
	export let color: Color;
</script>

{#if color === 'red'}
	<ColorDescriptionRed />
{/if}

{#if age === 'wyrmling'}
	<AgeDescriptionWyrmling />
{/if}
