<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import ActionAttacks from './ActionAttacks.svelte';
	import ActionBreathWeapons from './breath-weapons/ActionBreathWeapons.svelte';
	import ActionChangeShape from './ActionChangeShape.svelte';
	import ActionWallOfLight from './ActionWallOfLight.svelte';

	export let dragon: DragonStats;
	export let disableLinks = false;
</script>

{#if dragon.isShapechanged}
	<ActionChangeShape {dragon} />
{:else}
	<ActionAttacks {dragon} />

	<ActionBreathWeapons {dragon} {disableLinks} />

	<ActionChangeShape {dragon} />

	<ActionWallOfLight {dragon} {disableLinks} />
{/if}
