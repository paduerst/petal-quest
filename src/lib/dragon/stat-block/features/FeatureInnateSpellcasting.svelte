<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import { numberWithSign } from '$lib/text-utils';
	import FeatureInnateSpellcastingSpell from './FeatureInnateSpellcastingSpell.svelte';
	import UpcastAbbr from '../UpcastAbbr.svelte';

	export let dragon: DragonStats;

	let spellsDCString = '';
	$: if (dragon.spellcastingDisplayAttack || dragon.spellcastingDisplaySave) {
		spellsDCString = spellsDCString + ' (';
		if (dragon.spellcastingDisplaySave) {
			spellsDCString = spellsDCString + `spell save DC ${dragon.saveDCCha}`;
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
	<div class="break-inside-avoid">
		<div class="dragon-trait">
			<p>
				<i>
					<b>
						Innate Spellcasting<UpcastAbbr level={dragon.spellcastingMaxLevel} />.
					</b>
				</i>
				{dragon.nameUpper}'s innate spellcasting ability is Charisma{spellsDCString}. {dragon.nameUpper}
				can innately cast the following {dragon.cantrips.length + dragon.spells.length > 1
					? 'spells'
					: 'spell'}, requiring no material components:
			</p>
		</div>

		{#if dragon.cantrips.length > 0}
			<div class="dragon-spells dragon-list">
				<p class="-indent-4 pl-4">
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
			<div class="dragon-spells dragon-list">
				<p class="-indent-4 pl-4">
					1/day{dragon.spells.length > 1 ? ' each' : ''}:
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
