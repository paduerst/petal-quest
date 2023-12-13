<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';

	export let dragon: DragonStats;
</script>

<div class="dragon-action breath-option">
	<p>
		<b>{dragon.breath1Name} Breath.</b>
		{dragon.nameUpper} exhales lightning in a {dragon.breathLineLength}-foot line that is {dragon.breathLineWidth}
		feet wide. Each creature in that area must make a DC {dragon.saveDCCon}
		Dexterity saving throw. On a failed save, the creature takes {dragon.breath1ExpectedDamage}
		({dragon.breath1DiceCount}d{dragon.breath1DiceType}) lightning damage and can't take reactions
		until the start of its next turn. On a successful save, the creature takes half as much damage
		and isn't stopped from taking reactions.
	</p>
</div>
