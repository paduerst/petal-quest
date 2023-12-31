<script lang="ts">
	import { OTHER_PETAL_MONSTER_VALS } from '../petal-monster-vals';
	import { statsFromMonsterVals } from '../../monster-vals';
	import { numberWithSign } from '$lib/text-utils';

	import MonsterHeading from '$lib/monsters/MonsterHeading.svelte';
	import StatBlockContainer from '$lib/stat-block/StatBlockContainer.svelte';
	import StatBlockContents from '$lib/stat-block/StatBlockContents.svelte';
	import SpellLink from '$lib/spells/SpellLink.svelte';
	import ConditionLink from '$lib/conditions/ConditionLink.svelte';
	import MonsterLink from '$lib/monsters/MonsterLink.svelte';

	export let disableLinks = false;

	const stats = statsFromMonsterVals(OTHER_PETAL_MONSTER_VALS['animated-card']);
</script>

<div class="max-w-xl mx-auto">
	<MonsterHeading source="Petal Quest">{stats.title}</MonsterHeading>

	<StatBlockContainer theme={stats.theme}>
		<StatBlockContents {stats}>
			<svelte:fragment slot="features">
				<div class="stat-block-trait break-inside-avoid">
					<p>
						<i><b>False Appearance.</b></i>
						While the card remains motionless and isn’t flying, it is indistinguishable from a normal
						playing card.
					</p>
				</div>

				<div class="stat-block-trait break-inside-avoid">
					<p>
						<i><b>Severe Antimagic Susceptibility.</b></i>
						The card is <ConditionLink disabled={disableLinks} condition="incapacitated" /> while in
						the area of an <SpellLink disabled={disableLinks} spellName="antimagic field" />. If
						targeted by <SpellLink disabled={disableLinks} spellName="dispel magic" />, the card
						dies as the magic which animates it is permanently dispelled.
					</p>
				</div>

				<div class="stat-block-trait break-inside-avoid">
					<p>
						<i><b>Take a Card.</b></i>
						If a creature attempts to grapple the card, it must make a Dexterity (Sleight of Hand) check
						instead of a Strength (Athletics) check. If the card attempts to escape from a grapple, the
						grappling creature can choose to contest with a Strength (Athletics) or Dexterity (Sleight
						of Hand) check.
					</p>
				</div>
			</svelte:fragment>

			<svelte:fragment slot="actions">
				<div class="dragon-action break-inside-avoid">
					<p>
						<i><b>Paper Cut.</b> Melee Weapon Attack:</i>
						{numberWithSign(stats.proficiencyBonus + stats.dex)} to hit, reach 5 ft., one target.
						<span class="whitespace-nowrap"
							><i>Hit:</i> {2 + stats.dex} (1d4 {numberWithSign(stats.dex, ' ')})</span
						>
						slashing damage.
					</p>
				</div>
			</svelte:fragment>
		</StatBlockContents>
	</StatBlockContainer>

	<p class="mt-4">
		This is an animated playing card. For a whole deck of animated cards, use the <i>
			<MonsterLink
				disabled={disableLinks}
				monster="animated-deck-of-cards"
				monsterText="animated deck of cards"
			/>
		</i> stat block.
	</p>
</div>
