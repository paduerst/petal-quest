<script lang="ts">
	import { BREATH_BEAM_ENABLED } from '.';
	import type { DragonStats } from '$lib/dragon/dragon-stats';

	import LActionTailAttack from './LActionTailAttack.svelte';
	import LActionWingAttack from './LActionWingAttack.svelte';
	import LActionBreathBeam from './LActionBreathBeam.svelte';

	export let dragon: DragonStats;
	export let disableLinks = false;
</script>

{#if dragon.age !== 'wyrmling' && dragon.age !== 'young' && !dragon.isShapechanged}
	<p class="mb-2">
		{dragon.nameUpper} can take 3 legendary actions, choosing from the options below. Only one legendary
		action option can be used at a time and only at the end of another creature's turn. {dragon.nameUpper}
		regains spent legendary actions at the start of {dragon.pronounPossessiveAdjective} turn.
	</p>

	<LActionTailAttack {dragon} />

	<LActionWingAttack {dragon} {disableLinks} />

	{#if BREATH_BEAM_ENABLED}
		<LActionBreathBeam {dragon} />
	{/if}
{/if}
