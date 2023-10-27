<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import { SUPERNOVA_ENABLED } from '.';

	export let dragon: DragonStats;
</script>

{#if dragon.age === 'cosmic' && SUPERNOVA_ENABLED}
	<div class="dragon-action">
		<p>
			<i>
				<b>Supernova (Costs 1 Legendary Resistance or 6d12 HP). </b>
			</i>
			An explosion of {dragon.immunity.toLowerCase()} erupts from {dragon.name} in all directions. Each
			creature within
			{dragon.prismaticRadianceRadius} feet of {dragon.name} must make a
			<span class="whitespace-nowrap">DC {dragon.saveDCCon}</span>
			Dexterity or Constitution saving throw (the creature's choice), taking
			<span class="whitespace-nowrap">39 (6d12)</span>
			{dragon.immunity.toLowerCase()} damage on a failed save, or half as much damage on a successful
			one.
		</p>
	</div>
{/if}
