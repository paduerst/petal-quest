<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import type { Die } from '$lib/monsters';

	import { expectedDiceResult } from '$lib/monsters';

	export let dragon: DragonStats;
	// export let disableLinks = false;

	const novaDiceCount = 5;
	const novaDiceType: Die = 12;

	const novaMovementDistance = 15;

	let variableTraitName = dragon.cosmicForm === 'Supernova' ? 'Radiance' : 'Shadow';

	let novaVerb = dragon.cosmicForm === 'Supernova' ? 'explodes' : 'implodes';
</script>

{#if dragon.age === 'cosmic'}
	<div class="stat-block-trait break-inside-avoid">
		<p>
			<i><b>Cosmic Form ({dragon.cosmicForm}).</b></i>
			If {dragon.name}'s current hit points drop below half of {dragon.pronounPossessiveAdjective}
			hit point maximum, {dragon.name}
			enters {dragon.pronounPossessiveAdjective} cosmic form: a {dragon.cosmicForm.toLowerCase()}.
			While in {dragon.pronounPossessiveAdjective} cosmic form, {dragon.name} can hover, {dragon.pronounPossessiveAdjective}
			speed is halved, and {dragon.pronounPossessiveAdjective} Variable {variableTraitName} is maxed
			out at a radius of {dragon.prismaticRadianceRadius} feet.
		</p>
		<p>
			At the start of each of {dragon.name}'s turns while in {dragon.pronounPossessiveAdjective} cosmic
			form, {dragon.name}
			{novaVerb}; each creature within {dragon.prismaticRadianceRadius}
			feet of {dragon.name} must make a <span class="whitespace-nowrap">DC {dragon.saveDCCon}</span>
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

			Simultaneously, {dragon.name}
			loses hit points equal to the damage roll.
		</p>
		<p>
			If {dragon.name} drops to 0 hit points while in {dragon.pronounPossessiveAdjective} cosmic form,
			{dragon.name} immediately dies and {dragon.pronounPossessiveAdjective} body is destroyed without
			a trace.
		</p>
	</div>
{/if}
