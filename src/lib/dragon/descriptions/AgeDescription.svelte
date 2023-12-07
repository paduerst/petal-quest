<script lang="ts">
	import type { Age } from '..';

	import AgeDescriptionWyrmling from './AgeDescriptionWyrmling.svelte';
	import AgeDescriptionYoung from './AgeDescriptionYoung.svelte';
	import AgeDescriptionAdult from './AgeDescriptionAdult.svelte';
	import AgeDescriptionAncient from './AgeDescriptionAncient.svelte';
	import AgeDescriptionCosmic from './AgeDescriptionCosmic.svelte';

	export let age: Age;
</script>

{#if age === 'wyrmling'}
	<AgeDescriptionWyrmling />
{:else if age === 'young'}
	<AgeDescriptionYoung />
{:else if age === 'adult'}
	<AgeDescriptionAdult />
{:else if age === 'ancient'}
	<AgeDescriptionAncient />
{:else if age === 'cosmic'}
	<AgeDescriptionCosmic />
{/if}
