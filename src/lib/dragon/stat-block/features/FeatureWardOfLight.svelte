<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import { WARD_OF_LIGHT_TYPE } from '..';

	import AbbrButton from '../AbbrButton.svelte';

	export let dragon: DragonStats;

	const abbreviation = '1/SR';
	const definition = 'Recharges after a Short or Long Rest';
</script>

{#if WARD_OF_LIGHT_TYPE === 'feature'}
	<div class="stat-block-trait break-inside-avoid">
		<p>
			{#if dragon.color !== 'black'}
				<i>
					<b>Ward of Light (<AbbrButton {abbreviation} {definition} />).</b>
				</i>
				If {dragon.name} would drop to 0 hit points while glowing with Variable Radiance, {dragon.pronounNominative}
				can instead drop to 1 hit point and halve the radius of Variable Radiance as {dragon.pronounNominative}
				{dragon.pronounsPlural && dragon.pronounNominativeExists ? 'condense' : 'condenses'}
				light into a fleeting ward.
			{:else}
				<i>
					<b>Ward of Shadow (<AbbrButton {abbreviation} {definition} />).</b>
				</i>
				If {dragon.name} would drop to 0 hit points while Variable Shadow is active, {dragon.pronounNominative}
				can instead drop to 1 hit point and halve the radius of Variable Shadow as {dragon.pronounNominative}
				{dragon.pronounsPlural && dragon.pronounNominativeExists ? 'condense' : 'condenses'}
				shadow into a fleeting ward.
			{/if}
		</p>
	</div>
{/if}
