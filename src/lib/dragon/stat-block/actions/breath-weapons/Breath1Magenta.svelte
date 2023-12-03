<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';

	export let dragon: DragonStats;
</script>

<div class="dragon-action breath-option">
	<p>
		<b>{dragon.breath1Name} Breath.</b>
		Psychic static surges from {dragon.name}'s in a {dragon.breathConeSize}-foot cone. Each creature
		in that area must make a DC {dragon.saveDCCon} Intelligence saving throw. On a failed save, the creature
		takes {dragon.breath1ExpectedDamage}
		({dragon.breath1DiceCount}d{dragon.breath1DiceType}) psychic damage and can't take reactions
		until the start of its next turn. On a successful save, the creature just takes half as much
		damage.
	</p>
</div>
