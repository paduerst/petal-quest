<script lang="ts">
	import type { DragonConfig } from '..';
	import { DragonStats } from '../dragon-stats';
	import StatBlockPreamble from './preamble/StatBlockPreamble.svelte';
	import StatBlockFeatures from './features/StatBlockFeatures.svelte';
	import StatBlockActions from './actions/StatBlockActions.svelte';
	import StatBlockBonusActions from './bonus-actions/StatBlockBonusActions.svelte';
	import StatBlockLegendaryActions from './legendary-actions/StatBlockLegendaryActions.svelte';

	export let config: DragonConfig;

	const dragon: DragonStats = new DragonStats(config);
</script>

<div
	class="columns-1 sm:columns-2 text-left text-sm leading-[1.25]"
	style="--dragon-theme: {dragon.theme}"
>
	<StatBlockPreamble {dragon} />
	<StatBlockFeatures {dragon} />
	<StatBlockActions {dragon} />
	<StatBlockBonusActions {dragon} />
	<StatBlockLegendaryActions {dragon} />
</div>
