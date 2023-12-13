<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';

	export let dragon: DragonStats;
</script>

{#if dragon.prismaticRadianceRadius >= 20}
	<div class="dragon-action">
		<p>
			{#if dragon.color !== 'black'}
				<i>
					<b>Ward of Light.</b>
				</i>
				If {dragon.name}'s Variable Radiance radius is at least 15 feet, {dragon.pronounNominative} condenses
				that light, reducing its radius by 10 feet and gaining 5 temporary hit points.
			{:else}
				<i>
					<b>Ward of Shadow.</b>
				</i>
				If {dragon.name}'s Variable Shadow radius is at least 15 feet, {dragon.pronounNominative} condenses
				that shadow, reducing its radius by 10 feet and gaining 5 temporary hit points.
			{/if}
		</p>
	</div>
{/if}
