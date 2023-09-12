<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import BreathRed1 from './BreathRed1.svelte';
	import BreathRed2 from './BreathRed2.svelte';

	export let dragon: DragonStats;

	const breathsByColor = {
		red: [BreathRed1, BreathRed2],
		orange: [BreathRed1, BreathRed2],
		yellow: [BreathRed1, BreathRed2],
		green: [BreathRed1, BreathRed2],
		blue: [BreathRed1, BreathRed2],
		indigo: [BreathRed1, BreathRed2],
		violet: [BreathRed1, BreathRed2]
	} as const;
</script>

<p>
	<i><b>Breath Weapons (Recharge 5–6).</b></i>
	{dragon.nameUpper} uses one of the following breath weapons.
</p>

<svelte:component this={breathsByColor[dragon.color][0]} {dragon} />

<svelte:component this={breathsByColor[dragon.color][1]} {dragon} />
