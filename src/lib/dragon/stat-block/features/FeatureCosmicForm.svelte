<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import type { Die } from '$lib/monsters';

	import { expectedDiceResult } from '$lib/monsters';

	export let dragon: DragonStats;

	const novaDiceCount = 5;
	const novaDiceType: Die = 12;
</script>

{#if dragon.age === 'cosmic'}
	<div class="stat-block-trait break-inside-avoid">
		<p>
			<i><b>Cosmic Form ({dragon.cosmicForm}).</b></i>
			If {dragon.name}'s current hit points drop below half of {dragon.pronounPossessiveAdjective}
			hit point maximum, {dragon.name}
			enters {dragon.pronounPossessiveAdjective} cosmic form: a {dragon.cosmicForm.toLowerCase()}.
			At the start of each of {dragon.name}'s turns while in {dragon.pronounPossessiveAdjective} cosmic
			form, {dragon.name} explodes; each creature within {dragon.prismaticRadianceRadius}
			feet of {dragon.name} must make a <span class="whitespace-nowrap">DC {dragon.saveDCCon}</span>
			Dexterity or Constitution saving throw (the creature's choice), taking
			<span class="whitespace-nowrap"
				>{expectedDiceResult(novaDiceCount, novaDiceType)} ({novaDiceCount}d{novaDiceType})</span
			>
			{dragon.immunity.toLowerCase()}
			damage on a failed save, or half as much damage on a success. As part of this explosion, {dragon.name}
			loses hit points equal to the damage roll.
		</p>
		<p>
			If {dragon.name} drops to 0 hit points while in {dragon.pronounPossessiveAdjective} cosmic form,
			{dragon.name} explodes one last time as {dragon.pronounPossessiveAdjective} body is destroyed without
			a trace.
		</p>
	</div>
{/if}
