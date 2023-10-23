<script lang="ts">
	import { capitalizeFirstLetter } from '$lib/dragon';
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import SpellLink from '$lib/spells/SpellLink.svelte';
	import UpcastAbbr from '../../UpcastAbbr.svelte';

	export let dragon: DragonStats;

	const OLD_VERSION = false;
</script>

<div class="dragon-action breath-option">
	{#if OLD_VERSION}
		<p>
			<b>{dragon.breath2Name} Breath.</b>
			{capitalizeFirstLetter(dragon.color)} rays of magical light flash from {dragon.name}'s mouth
			in a {dragon.breathConeSize}-foot cone. Each creature in that area must make a DC {dragon.saveDCCon}
			Wisdom saving throw. On a failed save, the creature is subject to {dragon.breath2SpecialValue}.
		</p>

		<p class="blue-breath-option">
			<i>1. Floating Feeling.</i> The creature levitates (as if affected by the
			<SpellLink spellName="levitate" /> spell), and its flying speed (if any) becomes 0.
		</p>

		<p class="blue-breath-option">
			<i>2. Blue Glow.</i> The creature is outlined in blue light, shedding dim light in a 10-foot radius.
			Any attack roll against the creature has advantage if the attacker can see it, and the creature
			can't benefit from being invisible.
		</p>

		<p class="blue-breath-option">
			<i>3. Violent Hiccups.</i> The creature violently hiccups. It has disadvantage on attack rolls,
			ability checks, and Constitution saving throws to maintain concentration.
		</p>

		<p class="blue-breath-option">
			<i>4. Froggy Jinx.</i> The creature is transformed into a frog, as if by the
			<SpellLink spellName="polymorph" /> spell.
		</p>
	{:else}
		<p>
			<b>{dragon.breath2Name} Breath<UpcastAbbr level={dragon.spellcastingMaxLevel} />.</b>
			{capitalizeFirstLetter(dragon.color)} rays of magical light flash from {dragon.name}'s mouth
			in a {dragon.breathConeSize}-foot cone. Randomly select one of the following spells; each
			creature in that area is targeted by that spell as if {dragon.name} cast it using Constitution
			as the spellcasting ability (spell save DC {dragon.saveDCCon}). <SpellLink
				spellName="Counterspell"
			/> can only prevent 1 target from being effected. The spell's duration becomes 1 minute (no concentration),
			and it may have additional effects on a failed save which last for the duration.
		</p>

		<ol class="list-decimal ml-8 mt-1">
			<li>
				<SpellLink spellName="Hideous Laughter" /> (target cannot speak).
			</li>
			<li>
				<SpellLink spellName="Faerie Fire" /> (always blue light).
			</li>
			<li>
				<SpellLink spellName="Levitate" /> (target's flying speed becomes 0).
			</li>
			<li>
				<SpellLink spellName="Polymorph" /> (target becomes a frog).
			</li>
		</ol>
	{/if}
</div>

<style>
	.blue-breath-option {
		margin: 0.25rem 0;
		padding-left: 1rem;
	}
</style>
