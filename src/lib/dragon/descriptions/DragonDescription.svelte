<script lang="ts">
	import type { DragonConfig } from '../dragon-config';
	import { DragonStats } from '../dragon-stats';

	import DragonLairActions from '../stat-block/lair-actions/DragonLairActions.svelte';

	import ColorDescriptionRed from './ColorDescriptionRed.svelte';
	import ColorDescriptionOrange from './ColorDescriptionOrange.svelte';
	import ColorDescriptionYellow from './ColorDescriptionYellow.svelte';
	import ColorDescriptionGreen from './ColorDescriptionGreen.svelte';
	import ColorDescriptionBlue from './ColorDescriptionBlue.svelte';
	import ColorDescriptionIndigo from './ColorDescriptionIndigo.svelte';
	import ColorDescriptionViolet from './ColorDescriptionViolet.svelte';
	import ColorDescriptionMagenta from './ColorDescriptionMagenta.svelte';
	import ColorDescriptionWhite from './ColorDescriptionWhite.svelte';
	import ColorDescriptionBlack from './ColorDescriptionBlack.svelte';

	import AgeDescriptionWyrmling from './AgeDescriptionWyrmling.svelte';
	import AgeDescriptionYoung from './AgeDescriptionYoung.svelte';
	import AgeDescriptionAdult from './AgeDescriptionAdult.svelte';
	import AgeDescriptionAncient from './AgeDescriptionAncient.svelte';
	import AgeDescriptionCosmic from './AgeDescriptionCosmic.svelte';

	export let config: DragonConfig | undefined;

	let dragon: DragonStats | undefined;

	$: dragon = config !== undefined ? new DragonStats(config) : undefined;
</script>

{#if config !== undefined}
	{#if dragon !== undefined}
		<DragonLairActions {dragon} />
	{/if}

	<div class="mb-2">
		{#if config.color === 'red'}
			<ColorDescriptionRed />
		{:else if config.color === 'orange'}
			<ColorDescriptionOrange />
		{:else if config.color === 'yellow'}
			<ColorDescriptionYellow />
		{:else if config.color === 'green'}
			<ColorDescriptionGreen />
		{:else if config.color === 'blue'}
			<ColorDescriptionBlue />
		{:else if config.color === 'indigo'}
			<ColorDescriptionIndigo />
		{:else if config.color === 'violet'}
			<ColorDescriptionViolet />
		{:else if config.color === 'magenta'}
			<ColorDescriptionMagenta />
		{:else if config.color === 'white'}
			<ColorDescriptionWhite />
		{:else if config.color === 'black'}
			<ColorDescriptionBlack />
		{/if}
	</div>

	<div>
		{#if config.age === 'wyrmling'}
			<AgeDescriptionWyrmling />
		{:else if config.age === 'young'}
			<AgeDescriptionYoung />
		{:else if config.age === 'adult'}
			<AgeDescriptionAdult />
		{:else if config.age === 'ancient'}
			<AgeDescriptionAncient />
		{:else if config.age === 'cosmic'}
			<AgeDescriptionCosmic />
		{/if}
	</div>
{/if}
