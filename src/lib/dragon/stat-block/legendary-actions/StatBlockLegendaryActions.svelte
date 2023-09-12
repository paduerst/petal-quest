<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import LActionTailAttack from './LActionTailAttack.svelte';
	import LActionWingAttack from './LActionWingAttack.svelte';
	import LActionBreathBeam from './LActionBreathBeam.svelte';

	export let dragon: DragonStats;
</script>

{#if dragon.age !== 'wyrmling' && dragon.age !== 'young'}
	<div class="break-inside-avoid break-after-avoid">
		<h5 class="dragon-heading-font text-xl" style="color: {dragon.theme};">Legendary Actions</h5>
		<hr />
	</div>

	<p>
		{dragon.nameUpper} can take 3 legendary actions, choosing from the options below. Only one legendary
		action option can be used at a time and only at the end of another creature's turn. {dragon.nameUpper}
		regains spent legendary actions at the start of {dragon.her} turn.
	</p>

	<LActionTailAttack {dragon} />

	<LActionWingAttack {dragon} />

	<LActionBreathBeam {dragon} />
{/if}
