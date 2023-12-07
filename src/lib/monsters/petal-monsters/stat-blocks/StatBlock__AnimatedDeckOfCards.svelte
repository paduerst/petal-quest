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

	const stats = statsFromMonsterVals(OTHER_PETAL_MONSTER_VALS['animated-deck-of-cards']);
</script>

<div class="mx-auto">
	<MonsterHeading source="Petal Quest">{stats.title}</MonsterHeading>

	<StatBlockContainer theme={stats.theme}>
		<StatBlockContents {stats}>
			<svelte:fragment slot="features">
				<div class="stat-block-trait break-inside-avoid">
					<p>
						<i><b>False Appearance.</b></i>
						While the swarm remains motionless and isn’t flying, it is indistinguishable from a normal
						deck of playing cards.
					</p>
				</div>

				<div class="stat-block-trait break-inside-avoid">
					<p>
						<i><b>Severe Antimagic Susceptibility (Swarm).</b></i>
						The swarm is <ConditionLink disabled={disableLinks} condition="incapacitated" /> while in
						the area of an <SpellLink disabled={disableLinks} spellName="antimagic field" />. If
						targeted by <SpellLink disabled={disableLinks} spellName="dispel magic" />, the swarm
						must succeed on a Constitution saving throw against the caster’s spell save DC, taking
						21 (6d6) force damage on a failed save, or half as much damage on a successful one.
					</p>
				</div>

				<div class="stat-block-trait break-inside-avoid">
					<p>
						<i><b>Swarm.</b></i>
						The swarm can occupy another creature’s space and vice versa, and the swarm can move through
						any opening large enough for a Tiny playing card. The swarm can’t regain hit points or gain
						temporary hit points.
					</p>
				</div>

				<div class="stat-block-trait break-inside-avoid">
					<p>
						<i><b>Take a Card (Swarm).</b></i>
						As a special grapple, a creature can attempt to grab a single card from the swarm, choosing
						one of the following options. If the creature successfully grabs a card from the swarm, the
						swarm loses 1 hit point. The grabbed card uses the
						<i>
							<MonsterLink
								disabled={disableLinks}
								monster="animated-card"
								monsterText="animated card"
							/>
						</i>
						stat block and is <ConditionLink disabled={disableLinks} condition="grappled" /> by the creature.
					</p>
				</div>

				<div class="stat-block-trait break-inside-avoid breath-option">
					<p>
						<b>Any Card.</b>
						The creature targets a random card. It makes a DC 15 Dexterity (Sleight of Hand) check, grabbing
						a card on a success. The creature makes the check with advantage if the swarm has more than
						half of its hit points remaining.
					</p>
				</div>

				<div class="stat-block-trait break-inside-avoid breath-option">
					<p>
						<b>This Card.</b>
						The creature targets a specific card. It makes a DC 15 Dexterity (Sleight of Hand) check.
						On a success, the creature grabs a card and must make a DC 15 Wisdom (Perception) check.
						On a failure, the creature has grabbed a random card instead of the targeted card. The creature
						makes both checks with disadvantage if the swarm has more than half of its hit points remaining.
					</p>
				</div>
			</svelte:fragment>

			<svelte:fragment slot="actions">
				<div class="dragon-action break-inside-avoid">
					<p>
						<i><b>Paper Cuts.</b> Melee Weapon Attack:</i>
						{numberWithSign(stats.proficiencyBonus + stats.dex)} to hit, reach 0 ft., one creature in
						the swarm’s space.
						<span class="whitespace-nowrap"><i>Hit:</i> 20 (8d4)</span>
						slashing damage, or
						<span class="whitespace-nowrap">10 (4d4)</span> slashing damage if the swarm has half its
						hit points or fewer.
					</p>
				</div>
			</svelte:fragment>
		</StatBlockContents>
	</StatBlockContainer>

	<p class="mt-4">
		This is an animated deck of playing cards. An individual card uses the <i>
			<MonsterLink disabled={disableLinks} monster="animated-card" monsterText="animated card" />
		</i> stat block.
	</p>
</div>
