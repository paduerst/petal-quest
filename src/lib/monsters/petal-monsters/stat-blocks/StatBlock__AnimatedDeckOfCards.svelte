<script lang="ts">
	import { OTHER_PETAL_MONSTER_VALS } from '../petal-monster-vals';
	import { statsFromMonsterVals } from '../../monster-vals';

	import MonsterHeading from '$lib/monsters/MonsterHeading.svelte';
	import StatBlockContainer from '$lib/stat-block/StatBlockContainer.svelte';
	import StatBlockContents from '$lib/stat-block/StatBlockContents.svelte';
	import SpellLink from '$lib/spells/SpellLink.svelte';
	import ConditionLink from '$lib/conditions/ConditionLink.svelte';

	const stats = statsFromMonsterVals(OTHER_PETAL_MONSTER_VALS['animated-deck-of-cards']);
</script>

<div class="max-w-xl mx-auto">
	<MonsterHeading source="Petal Quest">{stats.title}</MonsterHeading>

	<StatBlockContainer theme={stats.theme}>
		<StatBlockContents {stats}>
			<svelte:fragment slot="features">
				<div class="stat-block-trait break-inside-avoid">
					<p>
						<i><b>Antimagic Susceptibility.</b></i>
						The swarm is <ConditionLink condition="incapacitated" /> while in the area of an <SpellLink
							spellName="antimagic field"
						/>. If targeted by <SpellLink spellName="dispel magic" />, the swarm must succeed on a
						Constitution saving throw against the caster’s spell save DC or fall <ConditionLink
							condition="unconscious"
						/> for 1 minute.
					</p>
				</div>
				<div class="stat-block-trait break-inside-avoid">
					<p>
						<i><b>False Appearance.</b></i>
						While the swarm remains motionless and isn’t flying, it is indistinguishable from a normal
						deck of playing cards.
					</p>
				</div>
			</svelte:fragment>
		</StatBlockContents>
	</StatBlockContainer>

	<p class="mt-4">This is an animated deck of playing cards.</p>
</div>
