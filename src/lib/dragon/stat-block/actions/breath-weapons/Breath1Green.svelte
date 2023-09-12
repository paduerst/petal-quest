<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';

	export let dragon: DragonStats;
</script>

<div class="monster-action breath-option">
	<p>
		<b>{dragon.breath1Name} Breath.</b>
		{dragon.nameUpper} exhales poisonous gas in a {dragon.breathConeSize}-foot cone. Each creature
		in that area must make a DC {dragon.saveDCCon} Constitution saving throw. On a failed save, the creature
		takes {dragon.breath1ExpectedDamage} ({dragon.breath1DiceCount}d{dragon.breath1DiceType}) poison
		damage and is poisoned until the end of its next turn. On a successful save, the creature takes
		half as much damage and isn't poisoned.
	</p>
</div>
