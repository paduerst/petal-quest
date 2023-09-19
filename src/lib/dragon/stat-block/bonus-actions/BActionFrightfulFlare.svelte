<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';

	export let dragon: DragonStats;
</script>

{#if dragon.age !== 'wyrmling' && dragon.age !== 'young'}
	<div class="dragon-action">
		<p>
			<i><b>Frightful Flare (1/Day).</b></i>
			{dragon.nameUpper} unleashes {dragon.pronounPossessiveAdjective} inner light, maxing out {dragon.pronounPossessiveAdjective}
			Variable Radiance to a radius of {dragon.prismaticRadianceRadius} feet. Each creature of {dragon.name}'s
			choice within {2 * dragon.prismaticRadianceRadius} feet of {dragon.pronounObjective} must make
			a
			<span class="whitespace-nowrap">DC {dragon.saveDCCha}</span>
			Wisdom saving throw if it can see {dragon.name}. Creatures within {dragon.prismaticRadianceRadius}
			feet of {dragon.pronounObjective}
			have disadvantage on this save. On a failed save, a creature is frightened until the end of {dragon.name}'s
			next turn.
		</p>
	</div>
{/if}
