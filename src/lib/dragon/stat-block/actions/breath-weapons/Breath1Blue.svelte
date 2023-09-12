<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';

	export let dragon: DragonStats;
</script>

<div class="monster-action breath-option">
	<p>
		<b>{dragon.breath1Name} Breath.</b>
		{dragon.nameUpper} exhales an icy blast in a {dragon.breathConeSize}-foot cone. Each creature in
		that area must make a DC {dragon.saveDCCon} Constitution saving throw. On a failed save, the creature
		takes {dragon.breath1ExpectedDamage} ({dragon.breath1DiceCount}d{dragon.breath1DiceType}) cold
		damage and has its speed halved until the end of its next turn. On a successful save, the
		creature takes half as much damage and doesn't have its speed halved.
	</p>
</div>
