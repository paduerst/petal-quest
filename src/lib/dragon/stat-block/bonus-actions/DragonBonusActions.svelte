<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import BActionFlare from './BActionFlare.svelte';
	import BActionSupernova from './BActionSupernova.svelte';
	import BActionVariableRadiance from './BActionVariableRadiance.svelte';
	import BActionWardOfLight from './BActionWardOfLight.svelte';

	export let dragon: DragonStats;
	export let disableLinks = false;
</script>

{#if !dragon.isShapechanged}
	<BActionFlare {dragon} {disableLinks} />

	<BActionSupernova {dragon} />

	<BActionVariableRadiance {dragon} {disableLinks} />

	<BActionWardOfLight {dragon} />
{/if}
