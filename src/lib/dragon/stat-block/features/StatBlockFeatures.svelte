<script lang="ts">
	import {
		SHAPE_CHANGE_RETAINS_LEGENDARY_RESISTANCE,
		SHAPE_CHANGE_RETAINS_INNATE_SPELLCASTING
	} from '$lib/dragon';
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import FeatureAmphibious from './FeatureAmphibious.svelte';
	import FeatureInnateSpellcasting from './FeatureInnateSpellcasting.svelte';
	import FeatureLegendaryResistance from './FeatureLegendaryResistance.svelte';
	import FeatureMagicWeapons from './FeatureMagicWeapons.svelte';

	export let dragon: DragonStats;
</script>

{#if dragon.isShapechanged}
	{#if SHAPE_CHANGE_RETAINS_INNATE_SPELLCASTING}
		<FeatureInnateSpellcasting {dragon} />
	{/if}

	{#if SHAPE_CHANGE_RETAINS_LEGENDARY_RESISTANCE}
		<FeatureLegendaryResistance {dragon} />
	{/if}
{:else}
	<FeatureAmphibious {dragon} />

	<FeatureInnateSpellcasting {dragon} />

	<FeatureLegendaryResistance {dragon} />

	<FeatureMagicWeapons {dragon} />
{/if}
