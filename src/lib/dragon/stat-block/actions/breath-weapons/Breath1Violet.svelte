<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';

	export let dragon: DragonStats;
</script>

<div class="monster-action breath-option">
	<p>
		<b>{dragon.breath1Name} Breath.</b>
		{dragon.nameUpper} exhales condensed magical energy in a {dragon.breathLineLength}-foot line
		that is {dragon.breathLineWidth} feet wide. Each creature in that area must make a DC {dragon.saveDCCon}
		Dexterity saving throw, taking {dragon.breath1ExpectedDamage} ({dragon.breath1DiceCount}d{dragon.breath1DiceType})
		force damage on a failed save, or half as much damage on a successful one. A creature which is
		at 0 hit points after taking this damage must make a DC {dragon.saveDCCon} Constitution saving throw.
		If it fails this save, the creature and all nonmagical objects it is wearing or carrying are disintegrated,
		reduced to a pile of fine violet dust.
	</p>
</div>
