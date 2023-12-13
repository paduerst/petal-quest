<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import { WARD_OF_LIGHT_TYPE } from '..';

	export let dragon: DragonStats;
</script>

{#if WARD_OF_LIGHT_TYPE === 'feature'}
	<div class="stat-block-trait break-inside-avoid">
		<p>
			{#if dragon.color !== 'black'}
				<i>
					<b>Ward of Light (1/Day).</b>
				</i>
				If {dragon.name} would drop to 0 hit points while glowing with {dragon.pronounPossessiveAdjective}
				Variable Radiance, {dragon.pronounNominative} can instead drop to 1 hit point and halve the radius
				of {dragon.pronounPossessiveAdjective}
				Variable Radiance as {dragon.pronounNominative}
				{dragon.pronounsPlural && dragon.pronounNominativeExists ? 'condense' : 'condenses'}
				light into a fleeting ward.
			{:else}
				<i>
					<b>Ward of Shadow (1/Day).</b>
				</i>
				If {dragon.name} would drop to 0 hit points while {dragon.pronounPossessiveAdjective}
				Variable Shadow is active, {dragon.pronounNominative} can instead drop to 1 hit point and halve
				the radius of {dragon.pronounPossessiveAdjective}
				Variable Shadow as {dragon.pronounNominative}
				{dragon.pronounsPlural && dragon.pronounNominativeExists ? 'condense' : 'condenses'}
				shadow into a fleeting ward.
			{/if}
		</p>
	</div>
{/if}
