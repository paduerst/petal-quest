<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import FeatureAmphibious from './FeatureAmphibious.svelte';
	import FeatureInnateSpellcasting from './FeatureInnateSpellcasting.svelte';
	import FeatureLegendaryResistance from './FeatureLegendaryResistance.svelte';
	import FeatureMagicWeapons from './FeatureMagicWeapons.svelte';

	export let dragon: DragonStats;
</script>

<FeatureAmphibious {dragon} />

<FeatureInnateSpellcasting {dragon} />

<FeatureLegendaryResistance {dragon} />

<FeatureMagicWeapons {dragon} />
