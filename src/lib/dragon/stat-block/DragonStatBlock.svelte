<script lang="ts">
	import type { DragonConfig } from '../dragon-config';
	import { DragonStats } from '../dragon-stats';
	import StatBlockPreamble from '$lib/stat-block/preamble/StatBlockPreamble.svelte';
	import StatBlockFeatures from './features/StatBlockFeatures.svelte';
	import StatBlockActions from './actions/StatBlockActions.svelte';
	import StatBlockBonusActions from './bonus-actions/StatBlockBonusActions.svelte';
	import StatBlockLegendaryActions from './legendary-actions/StatBlockLegendaryActions.svelte';

	export let config: DragonConfig;

	const dragon: DragonStats = new DragonStats(config);
</script>

<div
	class="columns-1 md:columns-2 print:min-[480px]:columns-2 text-left text-sm leading-[1.2]"
	style="--stat-block-theme: {dragon.theme}"
>
	<StatBlockPreamble stats={dragon} />
	<StatBlockFeatures {dragon} />
	<StatBlockActions {dragon} />
	<StatBlockBonusActions {dragon} />
	<StatBlockLegendaryActions {dragon} />
</div>
