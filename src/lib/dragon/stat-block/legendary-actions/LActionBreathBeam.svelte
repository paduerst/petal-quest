<script lang="ts">
	import { capitalizeFirstLetter } from '$lib/text-utils';
	import type { DragonStats } from '$lib/dragon/dragon-stats';

	export let dragon: DragonStats;
</script>

<div class="dragon-legendary-action">
	<p>
		<b>{dragon.breath2Name} Beam (Costs 3 Actions).</b>
		{capitalizeFirstLetter(dragon.aVsAnColor)}
		{dragon.color} beam of magical light flashes from {dragon.name}'s eyes, targeting a creature
		within {dragon.breathConeSize} feet that {dragon.name} can see. The creature is affected as if it
		was in the area of {dragon.name}'s {dragon.breath2Name} Breath.
	</p>
</div>
