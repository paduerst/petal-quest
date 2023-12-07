<script lang="ts">
	import { OTHER_PETAL_MONSTER_VALS } from '../petal-monster-vals';
	import { statsFromMonsterVals } from '../../monster-vals';
	import { numberWithSign } from '$lib/text-utils';

	import MonsterHeading from '$lib/monsters/MonsterHeading.svelte';
	import StatBlockContainer from '$lib/stat-block/StatBlockContainer.svelte';
	import StatBlockContents from '$lib/stat-block/StatBlockContents.svelte';
	import SpellLink from '$lib/spells/SpellLink.svelte';
	import ConditionLink from '$lib/conditions/ConditionLink.svelte';

	const stats = statsFromMonsterVals(OTHER_PETAL_MONSTER_VALS['animated-card']);
</script>

<div class="max-w-xl mx-auto">
	<MonsterHeading source="Petal Quest">{stats.title}</MonsterHeading>

	<StatBlockContainer theme={stats.theme}>
		<StatBlockContents {stats}>
			<svelte:fragment slot="features">
				<div class="stat-block-trait break-inside-avoid">
					<p>
						<i><b>Severe Antimagic Susceptibility.</b></i>
						The card is <ConditionLink condition="incapacitated" /> while in the area of an <SpellLink
							spellName="antimagic field"
						/>. If targeted by <SpellLink spellName="dispel magic" />, the card dies.
					</p>
				</div>
				<div class="stat-block-trait break-inside-avoid">
					<p>
						<i><b>False Appearance.</b></i>
						While the card remains motionless and isn’t flying, it is indistinguishable from a normal
						playing card.
					</p>
				</div>
			</svelte:fragment>

			<svelte:fragment slot="actions">
				<div class="dragon-action break-inside-avoid">
					<p>
						<i><b>Paper Cut.</b> Melee Weapon Attack:</i>
						{numberWithSign(stats.proficiencyBonus + stats.dex)} to hit, reach 5 ft., one target.
						<span class="whitespace-nowrap"><i>Hit:</i> 1</span>
						slashing damage.
					</p>
				</div>
			</svelte:fragment>
		</StatBlockContents>
	</StatBlockContainer>
</div>
