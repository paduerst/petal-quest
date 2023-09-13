<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';

	export let dragon: DragonStats;
</script>

<div class="dragon-action breath-option">
	<p>
		<b>{dragon.breath1Name} Breath.</b>
		{dragon.nameUpper} exhales fire in a {dragon.breathConeSize}-foot cone. Each creature in that
		area must make a DC {dragon.saveDCCon} Dexterity saving throw, taking {dragon.breath1ExpectedDamage}
		({dragon.breath1DiceCount}d{dragon.breath1DiceType}) fire damage on a failed save, or half as
		much damage on a successful one.
	</p>
</div>
