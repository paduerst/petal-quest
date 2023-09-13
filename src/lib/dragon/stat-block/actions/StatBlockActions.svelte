<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import ActionAttacks from './ActionAttacks.svelte';
	import ActionBreathWeapons from './breath-weapons/ActionBreathWeapons.svelte';
	import ActionWallOfLight from './ActionWallOfLight.svelte';
	import StatBlockDivider from '../StatBlockDivider.svelte';
	import { dividerHeightThin } from '..';

	export let dragon: DragonStats;
</script>

<div class="break-inside-avoid break-after-avoid">
	<h5 class="dragon-heading-font text-xl">Actions</h5>
	<StatBlockDivider color={dragon.theme} height={dividerHeightThin} classes={'mt-0'} />
</div>

<ActionAttacks {dragon} />

<ActionBreathWeapons {dragon} />

<ActionWallOfLight {dragon} />
