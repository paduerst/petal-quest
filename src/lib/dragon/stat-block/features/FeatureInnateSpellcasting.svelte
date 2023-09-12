<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import { numberWithSign } from '$lib/dragon';
	import FeatureInnateSpellcastingSpell from './FeatureInnateSpellcastingSpell.svelte';

	export let dragon: DragonStats;

	let spellsDCString = '';
	if (dragon.spellcastingDisplayAttack || dragon.spellcastingDisplaySave) {
		spellsDCString = spellsDCString + ' (';
		if (dragon.spellcastingDisplaySave) {
			spellsDCString = spellsDCString + `spell save DC ${8 + dragon.proficiencyBonus + dragon.cha}`;
		}
		if (dragon.spellcastingDisplaySave && dragon.spellcastingDisplayAttack) {
			spellsDCString = spellsDCString + ', ';
		}
		if (dragon.spellcastingDisplayAttack) {
			spellsDCString =
				spellsDCString +
				`${numberWithSign(dragon.proficiencyBonus + dragon.cha)} to hit with spell attacks`;
		}
		spellsDCString = spellsDCString + ')';
	}
</script>

{#if dragon.cantrips.length > 0 || dragon.spells.length > 0}
	<div class="break-inside-avoid-column">
		<div class="monster-trait">
			<p>
				<i><b>Innate Spellcasting.</b></i>
				{dragon.nameUpper}'s innate spellcasting ability is Charisma{spellsDCString}. {dragon.nameUpper}
				can innately cast the following {dragon.cantrips.length + dragon.spells.length > 1
					? 'spells'
					: 'spell'}, requiring no material components:
			</p>
		</div>

		{#if dragon.cantrips.length > 0}
			<div class="monster-spells monster-list">
				<p>
					At will:
					{#each dragon.cantrips as cantrip, index}
						<FeatureInnateSpellcastingSpell
							spell={cantrip}
						/>{#if index < dragon.cantrips.length - 1}{', '}{/if}
					{/each}
				</p>
			</div>
		{/if}

		{#if dragon.spells.length > 0}
			<div class="monster-spells monster-list">
				<p>
					1/day{dragon.spells.length > 0 ? ' each' : ''}:
					{#each dragon.spells as spell, index}
						<FeatureInnateSpellcastingSpell
							{spell}
						/>{#if index < dragon.spells.length - 1}{', '}{/if}
					{/each}
				</p>
			</div>
		{/if}
	</div>
{/if}
