<script lang="ts">
	import { capitalizeFirstLetter } from '$lib/text-utils';
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import SpellLink from '$lib/spells/SpellLink.svelte';

	export let dragon: DragonStats;

	const OLD_VERSION = false;

	let diceCount: number;
	$: diceCount = Math.max(1, dragon.breath2DiceCount);
	const diceType = 6;
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
			<b>{dragon.breath2Name} Breath.</b>
			{capitalizeFirstLetter(dragon.color)} rays of magical light flash from {dragon.name}'s mouth
			in a {dragon.breathConeSize}-foot cone. Randomly select one of the following spells; each
			creature in that area is targeted by that spell (spell save DC {dragon.saveDCCon}). The
			spell's duration becomes 1 minute (no concentration), and if additional effects are specified,
			they end with the spell.
		</p>

		<ol class="list-decimal ml-8 mt-1">
			<li>
				<SpellLink spellName="Hideous Laughter" />, and the creature can choose to take {diceCount}d{diceType}
				psychic damage at the start of any of its turns.
			</li>
			<li>
				<SpellLink spellName="Faerie Fire" />, but the light is always blue.
			</li>
			<li>
				<SpellLink spellName="Levitate" />, and the creature's flying speed becomes 0.
			</li>
			<li>
				<SpellLink spellName="Polymorph" />; the creature becomes a frog.
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
