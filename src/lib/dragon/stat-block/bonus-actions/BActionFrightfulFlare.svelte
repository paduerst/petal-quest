<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import { FLARE_DISADVANTAGE_FOR_CLOSE_CREATURES } from '.';
	import AbbrButton from '../AbbrButton.svelte';
	import ConditionLink from '$lib/conditions/ConditionLink.svelte';

	export let dragon: DragonStats;
	export let disableLinks = false;

	let abbreviation = '1/SR';
	let definition = 'Recharges after a Short or Long Rest';
</script>

{#if dragon.hasFrightfulFlare}
	<div class="dragon-action">
		<p>
			{#if dragon.color !== 'black'}
				<i>
					<b>Frightful Flare (<AbbrButton {abbreviation} {definition} />). </b>
				</i>
				{dragon.nameUpper} unleashes {dragon.pronounPossessiveAdjective} inner light, maxing out {dragon.pronounPossessiveAdjective}
				Variable Radiance to a radius of {dragon.prismaticRadianceRadius} feet. Each creature of {dragon.name}'s
				choice within {2 * dragon.prismaticRadianceRadius} feet of {dragon.pronounObjective} must make
				a <span class="whitespace-nowrap">DC {dragon.saveDCCha}</span> Wisdom saving throw if it can
				see {dragon.name}.
				{#if FLARE_DISADVANTAGE_FOR_CLOSE_CREATURES}
					Creatures within {dragon.prismaticRadianceRadius} feet of
					{dragon.pronounObjective} have disadvantage on this save.
				{/if}
				On a failed save, a creature is <ConditionLink
					condition="frightened"
					disabled={disableLinks}
				/> until the end of {dragon.name}'s next turn.
			{:else}
				<i>
					<b>Frightful Shadow (<AbbrButton {abbreviation} {definition} />). </b>
				</i>
				{dragon.nameUpper} becomes darkness incarnate, maxing out {dragon.pronounPossessiveAdjective}
				Variable Shadow to a radius of {dragon.prismaticRadianceRadius} feet. Each creature of {dragon.name}'s
				choice within {2 * dragon.prismaticRadianceRadius} feet of {dragon.pronounObjective} must make
				a <span class="whitespace-nowrap">DC {dragon.saveDCCha}</span> Wisdom saving throw if it can
				see {dragon.name}.
				{#if FLARE_DISADVANTAGE_FOR_CLOSE_CREATURES}
					Creatures within {dragon.prismaticRadianceRadius} feet of
					{dragon.pronounObjective} have disadvantage on this save.
				{/if}
				On a failed save, a creature is <ConditionLink
					condition="frightened"
					disabled={disableLinks}
				/> until the end of {dragon.name}'s next turn.
			{/if}
		</p>
	</div>
{/if}
