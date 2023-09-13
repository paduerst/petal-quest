<script lang="ts">
	import { capitalizeFirstLetter } from '$lib/dragon';
	import type { DragonStats } from '$lib/dragon/dragon-stats';

	export let dragon: DragonStats;
</script>

<div class="dragon-action breath-option">
	<p>
		<b>{dragon.breath2Name} Breath.</b>
		{capitalizeFirstLetter(dragon.color)} rays of magical light flash from {dragon.name}'s mouth in
		a {dragon.breathConeSize}-foot cone. Each creature in that area must make a DC {dragon.saveDCCon}
		Wisdom saving throw. On a failed save, the creature is charmed by {dragon.name}
		for 1 minute. On each of its turns while charmed in this way, the creature must move towards the
		nearest creature it can see (excluding itself and {dragon.name}) and make a melee attack against
		it, ending its turn after doing so or if unable to. The creature can repeat the saving throw at
		the end of each of its turns, ending the effect on itself with a success.
	</p>
</div>
