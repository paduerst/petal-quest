<script lang="ts">
	import { capitalizeFirstLetter } from '$lib/text-utils';
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import SpellLink from '$lib/spells/SpellLink.svelte';
	import MonsterLink from '$lib/monsters/MonsterLink.svelte';

	export let dragon: DragonStats;
	export let disableLinks = false;

	const POLYMORPH_BREATH = true;

	let diceCount: number;
	$: diceCount = Math.max(1, dragon.breath2DiceCount);
	const diceType = 6;
</script>

<div class="dragon-action breath-option">
	{#if POLYMORPH_BREATH}
		<p>
			<b>{dragon.breath2Name} Breath.</b>
			{capitalizeFirstLetter(dragon.color)} rays of magical light flash from {dragon.name}'s mouth
			in a {dragon.breathConeSize}-foot cone. Each creature in that area must make a DC {dragon.saveDCCon}
			Wisdom saving throw. On a failed save, the creature is transformed into a <MonsterLink
				monster={'frog'}
				disabled={disableLinks}
			/>, as if by the
			<SpellLink spellName="polymorph" disabled={disableLinks} /> spell
			{#if dragon.breath2SpecialValue.length > 0}
				with a duration of
				<span class="whitespace-nowrap">{dragon.breath2SpecialValue}</span>
			{/if}
			(no concentration).
			{#if dragon.breath2Name === 'True Polymorph'}
				If the creature is still a <MonsterLink monster={'frog'} disabled={disableLinks} /> at the end
				of its next turn, it must make a DC {dragon.saveDCCon}
				Charisma saving throw. If it fails this second save as well, the creature's transformation becomes
				permanent, lasting until dispelled (DC 19).
			{/if}
		</p>
	{:else}
		<p>
			<b>Wild Magic Breath.</b>
			{capitalizeFirstLetter(dragon.color)} rays of magical light flash from {dragon.name}'s mouth
			in a {dragon.breathConeSize}-foot cone. Randomly select one of the following spells; each
			creature in that area is targeted by that spell (spell save DC {dragon.saveDCCon}). The
			spell's duration becomes 1 minute (no concentration), and if additional effects are specified,
			they end with the spell.
		</p>

		<ol class="list-decimal ml-8 mt-1">
			<li>
				<SpellLink spellName="Hideous Laughter" disabled={disableLinks} />, and the creature can
				choose to take {diceCount}d{diceType}
				psychic damage at the start of any of its turns.
			</li>
			<li>
				<SpellLink spellName="Faerie Fire" disabled={disableLinks} />, but the light is always blue.
			</li>
			<li>
				<SpellLink spellName="Levitate" disabled={disableLinks} />, and the creature's flying speed
				becomes 0.
			</li>
			<li>
				<SpellLink spellName="Polymorph" disabled={disableLinks} />; the creature becomes a <MonsterLink
					monster={'frog'}
					disabled={disableLinks}
				/>.
			</li>
		</ol>
	{/if}
</div>
