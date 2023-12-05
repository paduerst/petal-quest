<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import BActionFrightfulFlare from './BActionFrightfulFlare.svelte';
	import BActionSupernova from './BActionSupernova.svelte';
	import BActionVariableRadiance from './BActionVariableRadiance.svelte';

	export let dragon: DragonStats;
</script>

{#if !dragon.isShapechanged}
	<BActionFrightfulFlare {dragon} />

	<BActionSupernova {dragon} />

	<BActionVariableRadiance {dragon} />
{/if}
