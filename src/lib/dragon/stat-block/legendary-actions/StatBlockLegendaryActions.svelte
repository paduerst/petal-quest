<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import LActionTailAttack from './LActionTailAttack.svelte';
	import LActionWingAttack from './LActionWingAttack.svelte';
	import LActionBreathBeam from './LActionBreathBeam.svelte';
	import StatBlockDivider from '$lib/stat-block/StatBlockDivider.svelte';
	import { dividerHeightThin } from '$lib/stat-block';

	export let dragon: DragonStats;
</script>

{#if dragon.age !== 'wyrmling' && dragon.age !== 'young' && !dragon.isShapechanged}
	<div class="break-inside-avoid break-after-avoid">
		<h5 class="dragon-heading-font text-xl">Legendary Actions</h5>
		<StatBlockDivider color={dragon.theme} height={dividerHeightThin} classes={'mt-0'} />
	</div>

	<p class="mb-2">
		{dragon.nameUpper} can take 3 legendary actions, choosing from the options below. Only one legendary
		action option can be used at a time and only at the end of another creature's turn. {dragon.nameUpper}
		regains spent legendary actions at the start of {dragon.pronounPossessiveAdjective} turn.
	</p>

	<LActionTailAttack {dragon} />

	<LActionWingAttack {dragon} />

	<LActionBreathBeam {dragon} />
{/if}
