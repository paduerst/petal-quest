<script lang="ts">
	import type { DragonConfig } from '..';
	import { DragonStats } from '../dragon-stats';
	import StatBlockPreamble from './preamble/StatBlockPreamble.svelte';
	import StatBlockFeatures from './features/StatBlockFeatures.svelte';
	import StatBlockActions from './actions/StatBlockActions.svelte';

	export let config: DragonConfig;

	const dragon: DragonStats = new DragonStats(config);
</script>

<div class="columns-1 sm:columns-2 text-left">
	<StatBlockPreamble {dragon} />
	<StatBlockFeatures {dragon} />
	<StatBlockActions {dragon} />
</div>
