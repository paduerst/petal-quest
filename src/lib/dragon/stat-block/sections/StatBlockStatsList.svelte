<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';

	export let dragon: DragonStats;
</script>

<ul class="dragon-stats">
	<li class="dragon-saves">
		<p>
			<span class="label">Saving Throws</span>
			<span>${'Saving Throws'}</span>
		</p>
	</li>

	<li class="dragon-skills">
		<p>
			<span class="label">Skills</span>
			<span>${'Skills'}</span>
		</p>
	</li>

	<li class="dragon-vulnerabilities">
		<p>
			<span class="label">Damage Vulnerabilities</span>
			<span>${'vulnerability lower'}</span>
		</p>
	</li>

	<li class="dragon-resistances">
		<p>
			<span class="label">Damage Resistances</span>
			<span>${'resistances lower'}</span>
		</p>
	</li>

	<li class="dragon-immunities">
		<p>
			<span class="label">Damage Immunities</span>
			<span>${'immunities lower'}</span>
		</p>
	</li>

	<li class="dragon-conditions">
		<p>
			<span class="label">Condition Immunities</span>
			<span>${'Condition Immunities'}</span>
		</p>
	</li>

	<li class="dragon-senses">
		<p>
			<span class="label">Senses</span>
			<span
				><span class="whitespace-nowrap">
					<a
						target="_blank"
						href="https://www.dndbeyond.com/sources/basic-rules/monsters#Blindsight">blindsight</a
					>
					${'Blindsight'} ft.,
				</span>
				<span class="whitespace-nowrap">
					<a
						target="_blank"
						href="https://www.dndbeyond.com/sources/basic-rules/monsters#Darkvision">darkvision</a
					>
					${'Darkvision'} ft.,
				</span>
				<span class="whitespace-nowrap">passive Perception ${'Passive Perception'}</span></span
			>
		</p>
	</li>

	<li class="dragon-languages">
		<p>
			<span class="label">Languages</span>
			<span>${'Languages'}</span>
		</p>
	</li>

	<li class="dragon-challenge">
		<p>
			<span class="label">Challenge</span>
			<span>
				{dragon.cr} ({dragon.xp} XP)
			</span>
			<span class="label">Proficiency Bonus</span>
			<span>
				+{dragon.proficiencyBonus}
			</span>
		</p>
	</li>
</ul>
