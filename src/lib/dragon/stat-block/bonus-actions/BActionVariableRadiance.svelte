<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import {
		RADIANCE_PENALTY,
		RADIANCE_PENALIZES_SECONDARY_BREATH_SAVES,
		RADIANCE_PENALIZES_FRIGHTFUL_FLARE_SAVES
	} from '.';

	export let dragon: DragonStats;

	let penalties: string;
	$: {
		penalties = '';
		if (RADIANCE_PENALIZES_SECONDARY_BREATH_SAVES) {
			penalties += `${dragon.breath2Name} Breath`;
		}
		if (RADIANCE_PENALIZES_SECONDARY_BREATH_SAVES && RADIANCE_PENALIZES_FRIGHTFUL_FLARE_SAVES) {
			penalties += ' and ';
		}
		if (RADIANCE_PENALIZES_FRIGHTFUL_FLARE_SAVES) {
			penalties += 'Frightful Flare';
		}
	}
</script>

<div class="dragon-action">
	<p>
		<i><b>Variable Radiance.</b></i>
		{dragon.nameUpper} chooses a radius up to {dragon.prismaticRadianceRadius}
		feet and glows {dragon.color}, shedding bright light in the chosen radius and dim light for an
		additional distance equal to the chosen radius.
		{#if RADIANCE_PENALIZES_SECONDARY_BREATH_SAVES || RADIANCE_PENALIZES_FRIGHTFUL_FLARE_SAVES}
			Creatures within this bright light have a −{RADIANCE_PENALTY} penalty to their saving throws against
			{dragon.name}'s
			{penalties}.
		{/if}
		{dragon.nameUpper} stops glowing if {dragon.pronounNominative}
		{dragon.pronounsPlural ? 'die' : 'dies'} or
		{dragon.pronounsPlural ? 'choose' : 'chooses'} to stop as a bonus action.
	</p>
</div>
