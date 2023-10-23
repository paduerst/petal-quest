<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';

	export let dragon: DragonStats;

	const ADDED_RIDER_EFFECT = true;
</script>

<div class="dragon-action">
	<p>
		<i><b>Variable Radiance.</b></i>
		{dragon.nameUpper} chooses a radius up to {dragon.prismaticRadianceRadius}
		feet and glows {dragon.color}, shedding bright light in the chosen radius and dim light for an
		additional distance equal to the chosen radius.
		{#if ADDED_RIDER_EFFECT}
			Creatures within this bright light have a −1 penalty to their saving throws against {dragon.name}'s
			{dragon.breath2Name} Breath.
		{/if}
		{dragon.nameUpper} stops glowing if {dragon.pronounNominative}
		{dragon.pronounsPlural ? 'die' : 'dies'} or
		{dragon.pronounsPlural ? 'choose' : 'chooses'} to stop as a bonus action.
	</p>
</div>
