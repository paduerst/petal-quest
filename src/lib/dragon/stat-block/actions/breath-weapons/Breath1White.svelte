<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';

	export let dragon: DragonStats;
</script>

<div class="dragon-action breath-option">
	<p>
		<b>{dragon.breath1Name} Breath.</b>
		{dragon.nameUpper} exhales multicolored flames in a {dragon.breathConeSize}-foot cone. Each
		creature in that area must make a DC {dragon.saveDCCon} Dexterity saving throw and roll a d8. On
		a failed save, the creature takes {dragon.breath1ExpectedDamage}
		({dragon.breath1DiceCount}d{dragon.breath1DiceType}) damage of a type determined by the d8 roll:
		fire (1), acid (2), lightning (3), poison (4), cold (5), thunder (6), force (7), radiant (8). On
		a successful save, the creature takes half as much damage.
	</p>
</div>
