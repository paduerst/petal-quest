<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import type { Die } from '$lib/monsters';

	import { capitalizeFirstLetter } from '$lib/text-utils';
	import { expectedDiceResult } from '$lib/monsters';
	import { WARD_OF_LIGHT_TYPE } from '..';

	import ConditionLink from '$lib/conditions/ConditionLink.svelte';

	export let dragon: DragonStats;
	export let disableLinks = false;

	const novaDiceCount = 5;
	const novaDiceType: Die = 12;

	const novaMovementDistance = 15;
	const novaBlindingDistance = novaMovementDistance;

	const finalBlindingDistance = '1,000 feet';

	let variableTraitName = dragon.cosmicForm === 'Supernova' ? 'Radiance' : 'Shadow';
	let wardTraitName = dragon.cosmicForm === 'Supernova' ? 'Light' : 'Shadow';
	let novaTraitName = dragon.cosmicForm === 'Supernova' ? 'Exploding' : 'Imploding';
	let novaVerb = dragon.cosmicForm === 'Supernova' ? 'explodes' : 'implodes';
</script>

{#if dragon.age === 'cosmic'}
	<div class="stat-block-trait break-inside-avoid">
		<p>
			<i><b>Cosmic Form ({dragon.cosmicForm}).</b></i>
			If {dragon.name}'s current hit points drop below half of {dragon.pronounPossessiveAdjective}
			hit point maximum, {dragon.name}
			enters {dragon.pronounPossessiveAdjective} cosmic form: a {dragon.cosmicForm.toLowerCase()}.
			While in {dragon.pronounPossessiveAdjective} cosmic form, {dragon.name} is subject to the following
			effects.
		</p>
		<ul class="stat-block-unordered-list">
			<li>
				<b>Hovering.</b>
				{capitalizeFirstLetter(dragon.pronounNominative)} can hover, and {dragon.pronounPossessiveAdjective}
				speed is halved.
			</li>
			<li>
				<b>Restless.</b>
				{capitalizeFirstLetter(dragon.pronounNominative)}
				{dragon.pronounsPlural && dragon.pronounNominativeExists ? 'are' : 'is'}
				immune to the <ConditionLink condition="unconscious" disabled={disableLinks} /> condition.
			</li>
			<li>
				<b>No Spells.</b>
				{capitalizeFirstLetter(dragon.pronounNominative)} cannot cast or concentrate on spells.
			</li>
			<li>
				<b>Immutable Form.</b>
				{capitalizeFirstLetter(dragon.pronounNominative)}
				{dragon.pronounsPlural && dragon.pronounNominativeExists ? 'are' : 'is'}
				immune to any spell or effect which would alter {dragon.pronounPossessiveAdjective}
				form (except {dragon.pronounPossessiveAdjective}
				Change Cosmic Form action).
			</li>
			<li>
				<b>Maximum {variableTraitName}.</b>
				{capitalizeFirstLetter(dragon.pronounPossessiveAdjective)} Variable {variableTraitName} is maxed
				out at a radius of
				{dragon.prismaticRadianceRadius}
				feet.
				{#if dragon.cosmicForm === 'Supernova'}
					If another creature that can see {dragon.name} moves to within {novaBlindingDistance} feet
					of
					{dragon.pronounObjective} or starts its turn there, the creature must succeed on a
					<span class="whitespace-nowrap">DC {dragon.saveDCCon}</span> Constitution saving throw or
					be
					<ConditionLink condition="blinded" disabled={disableLinks} /> until the start of its next turn.
				{:else}
					The area within {novaBlindingDistance} feet of {dragon.name} is utterly devoid of light; it
					is filled with darkness that can't be illuminated by any means or seen through with darkvision.
				{/if}
			</li>
			<li>
				<b>{novaTraitName}.</b>
				At the start of each of {dragon.pronounPossessiveAdjective} turns, {dragon.name}
				{novaVerb}; each creature within {dragon.prismaticRadianceRadius}
				feet of {dragon.name} must make a
				<span class="whitespace-nowrap">DC {dragon.saveDCCon}</span>
				Dexterity or Constitution saving throw (the creature's choice). On a failed save, the creature
				takes
				<span class="whitespace-nowrap"
					>{expectedDiceResult(novaDiceCount, novaDiceType)} ({novaDiceCount}d{novaDiceType})</span
				>
				{dragon.immunity.toLowerCase()}
				damage and
				{#if dragon.cosmicForm === 'Supernova'}
					is pushed {novaMovementDistance} feet away from {dragon.name}. On a successful save, the
					creature takes half as much damage and isn't pushed.
				{:else}
					is pulled {novaMovementDistance} feet closer to {dragon.name}. On a successful save, the
					creature takes half as much damage and isn't pulled.
				{/if}
				{novaTraitName} hurts {dragon.name} as well: {dragon.pronounNominative}
				{dragon.pronounsPlural && dragon.pronounNominativeExists ? 'take' : 'takes'}
				{dragon.immunity.toLowerCase()} damage as if if {dragon.pronounNominative} had failed the save.
				This damage ignores {dragon.name}'s immunities and cannot be reduced in any way.
			</li>
			<li>
				<b>Annihilation.</b>
				If {dragon.pronounNominative}
				{dragon.pronounsPlural && dragon.pronounNominativeExists ? 'drop' : 'drops'} to 0 hit points,
				{dragon.name} immediately dies and {dragon.pronounPossessiveAdjective} body is destroyed without
				a
				{WARD_OF_LIGHT_TYPE === 'feature'
					? `trace, bypassing ${dragon.pronounPossessiveAdjective} Ward of ${wardTraitName}.`
					: 'trace.'}
				{#if dragon.cosmicForm === 'Supernova'}
					Each creature within {finalBlindingDistance} that can see {dragon.name} must succeed on a
					<span class="whitespace-nowrap">DC {dragon.saveDCCon}</span>
					Constitution saving throw or be blinded for 1 minute.
				{:else}
					All sources of light (except those created by an artifact or a deity) are extinguished
					within {finalBlindingDistance}.
				{/if}
			</li>
		</ul>
	</div>
{/if}
