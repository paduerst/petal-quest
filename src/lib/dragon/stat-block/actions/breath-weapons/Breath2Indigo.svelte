<script lang="ts">
	import { capitalizeFirstLetter } from '$lib/dragon';
	import type { DragonStats } from '$lib/dragon/dragon-stats';

	export let dragon: DragonStats;
</script>

<div class="monster-action breath-option">
	<p>
		<b>{dragon.breath2Name} Breath.</b>
		{capitalizeFirstLetter(dragon.color)} rays of magical light flash from {dragon.name}'s mouth in
		a {dragon.breathConeSize}-foot cone. Each creature in that area must make a DC {dragon.saveDCCon}
		Constitution saving throw. On a failed save, the creature is restrained until the end of its next
		turn, at which time it must repeat the saving throw. If it fails this second save as well, the creature
		turns to stone and is petrified {dragon.breath2SpecialValue}until freed by the
		<i>greater restoration</i> spell or other magic.
	</p>
</div>
