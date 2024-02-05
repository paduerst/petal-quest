<script lang="ts">
	import {
		SHAPE_CHANGE_RETAINS_LEGENDARY_RESISTANCE,
		SHAPE_CHANGE_RETAINS_INNATE_SPELLCASTING
	} from '$lib/dragon';
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import FeatureAmphibious from './FeatureAmphibious.svelte';
	import FeatureCosmicForm from './FeatureCosmicForm.svelte';
	import FeatureInnateSpellcasting from './FeatureInnateSpellcasting.svelte';
	import FeatureLegendaryResistance from './FeatureLegendaryResistance.svelte';
	import FeatureMagicWeapons from './FeatureMagicWeapons.svelte';
	import FeatureWardOfLight from './FeatureWardOfLight.svelte';

	export let dragon: DragonStats;
	export let disableLinks = false;
</script>

{#if dragon.isShapechanged}
	{#if SHAPE_CHANGE_RETAINS_INNATE_SPELLCASTING}
		<FeatureInnateSpellcasting {dragon} {disableLinks} />
	{/if}

	{#if SHAPE_CHANGE_RETAINS_LEGENDARY_RESISTANCE}
		<FeatureLegendaryResistance {dragon} />
	{/if}
{:else}
	<FeatureAmphibious {dragon} />

	<FeatureCosmicForm {dragon} {disableLinks} />

	<FeatureInnateSpellcasting {dragon} {disableLinks} />

	<FeatureLegendaryResistance {dragon} />

	<FeatureMagicWeapons {dragon} />

	<FeatureWardOfLight {dragon} />
{/if}
