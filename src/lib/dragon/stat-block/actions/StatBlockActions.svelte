<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import ActionAttacks from './ActionAttacks.svelte';
	import ActionBreathWeapons from './breath-weapons/ActionBreathWeapons.svelte';
	import ActionChangeShape from './ActionChangeShape.svelte';
	import ActionWallOfLight from './ActionWallOfLight.svelte';
	import StatBlockDivider from '$lib/stat-block/StatBlockDivider.svelte';
	import { dividerHeightThin } from '$lib/stat-block';

	export let dragon: DragonStats;
</script>

<div class="break-inside-avoid break-after-avoid">
	<h5 class="dragon-heading-font text-xl">Actions</h5>
	<StatBlockDivider color={dragon.theme} height={dividerHeightThin} classes={'mt-0'} />
</div>

{#if dragon.isShapechanged}
	<ActionChangeShape {dragon} />
{:else}
	<ActionAttacks {dragon} />

	<ActionBreathWeapons {dragon} />

	<ActionChangeShape {dragon} />

	<ActionWallOfLight {dragon} />
{/if}
