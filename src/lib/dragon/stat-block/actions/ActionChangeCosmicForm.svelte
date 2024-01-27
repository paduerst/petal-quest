<script lang="ts">
	import { capitalizeFirstLetter } from '$lib/text-utils';
	import type { DragonStats } from '$lib/dragon/dragon-stats';

	export let dragon: DragonStats;
</script>

{#if dragon.age === 'cosmic'}
	<div class="dragon-action">
		<p>
			<i><b>Change Cosmic Form.</b></i>
			{dragon.nameUpper} enters
			{dragon.pronounPossessiveAdjective} cosmic form, or {dragon.pronounNominative}
			{dragon.pronounsPlural && dragon.pronounNominativeExists ? 'attempt' : 'attempts'} to exit it.
			To exit {dragon.pronounPossessiveAdjective} cosmic form, {dragon.name} must succeed on a DC 30
			Constitution saving throw. {capitalizeFirstLetter(dragon.pronounNominative)}
			{dragon.pronounsPlural && dragon.pronounNominativeExists ? 'make' : 'makes'} this save with disadvantage
			if {dragon.pronounNominative}
			{dragon.pronounsPlural && dragon.pronounNominativeExists ? 'have' : 'has'} half of {dragon.pronounPossessiveAdjective}
			hit points remaining or fewer.
		</p>
	</div>
{/if}
