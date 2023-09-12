<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';

	export let dragon: DragonStats;
</script>

<ul class="dragon-stats">
	<li class="dragon-saves">
		<p>
			<span class="dragon-label">Saving Throws</span>
			<span>{dragon.savingThrows}</span>
		</p>
	</li>

	{#if dragon.skills.length > 0}
		<li class="dragon-skills">
			<p>
				<span class="dragon-label">Skills</span>
				<span>
					{#each dragon.skills as skill, index}
						<span class="whitespace-nowrap">{skill}</span
						>{#if index < dragon.skills.length - 1}{', '}{/if}
					{/each}
				</span>
			</p>
		</li>
	{/if}

	{#if dragon.vulnerabilities.length > 0}
		<li class="dragon-vulnerabilities">
			<p>
				<span class="dragon-label">Damage Vulnerabilities</span>
				<span class="lowercase">{dragon.vulnerabilities}</span>
			</p>
		</li>
	{/if}

	{#if dragon.resistances.length > 0}
		<li class="dragon-resistances">
			<p>
				<span class="dragon-label">Damage Resistances</span>
				<span class="lowercase">{dragon.resistances}</span>
			</p>
		</li>
	{/if}

	<li class="dragon-immunities">
		<p>
			<span class="dragon-label">Damage Immunities</span>
			<span class="lowercase">{dragon.immunities}</span>
		</p>
	</li>

	{#if dragon.conditionImmunities.length > 0}
		<li class="dragon-conditions">
			<p>
				<span class="dragon-label">Condition Immunities</span>
				<span class="lowercase">{dragon.conditionImmunities}</span>
			</p>
		</li>
	{/if}

	<li class="dragon-senses">
		<p>
			<span class="dragon-label">Senses</span>
			<span
				><span class="whitespace-nowrap">
					blindsight
					{dragon.blindsight} ft.,
				</span>
				<span class="whitespace-nowrap">
					darkvision
					{dragon.darkvision} ft.,
				</span>
				<span class="whitespace-nowrap">passive Perception {dragon.passivePerception}</span></span
			>
		</p>
	</li>

	<li class="dragon-languages">
		<p>
			<span class="dragon-label">Languages</span>
			<span>{dragon.languages}</span>
		</p>
	</li>

	<li class="dragon-challenge">
		<p>
			<span class="dragon-label">Challenge</span>
			<span>
				{dragon.cr} ({dragon.xp.toLocaleString()} XP)
			</span>
			<span class="dragon-label">Proficiency Bonus</span>
			<span>
				+{dragon.proficiencyBonus}
			</span>
		</p>
	</li>
</ul>
