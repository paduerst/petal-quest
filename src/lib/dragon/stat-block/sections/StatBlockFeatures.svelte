<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import FeatureAmphibious from '../features/FeatureAmphibious.svelte';
	import FeatureInnateSpellcasting from '../features/FeatureInnateSpellcasting.svelte';
	import FeatureLegendaryResistance from '../features/FeatureLegendaryResistance.svelte';
	import FeatureMagicWeapons from '../features/FeatureMagicWeapons.svelte';

	export let dragon: DragonStats;
</script>

<FeatureAmphibious {dragon} />

<FeatureInnateSpellcasting {dragon} />

<FeatureLegendaryResistance {dragon} />

<FeatureMagicWeapons {dragon} />
