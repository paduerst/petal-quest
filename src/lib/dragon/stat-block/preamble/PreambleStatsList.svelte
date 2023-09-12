<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';

	export let dragon: DragonStats;
</script>

<ul class="dragon-stats">
	<li class="dragon-saves">
		<p>
			<span class="label">Saving Throws</span>
			<span>{dragon.savingThrows}</span>
		</p>
	</li>

	{#if dragon.skills.length > 0}
		<li class="dragon-skills">
			<p>
				<span class="label">Skills</span>
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
				<span class="label">Damage Vulnerabilities</span>
				<span class="lowercase">{dragon.vulnerabilities}</span>
			</p>
		</li>
	{/if}

	{#if dragon.resistances.length > 0}
		<li class="dragon-resistances">
			<p>
				<span class="label">Damage Resistances</span>
				<span class="lowercase">{dragon.resistances}</span>
			</p>
		</li>
	{/if}

	<li class="dragon-immunities">
		<p>
			<span class="label">Damage Immunities</span>
			<span class="lowercase">{dragon.immunities}</span>
		</p>
	</li>

	{#if dragon.conditionImmunities.length > 0}
		<li class="dragon-conditions">
			<p>
				<span class="label">Condition Immunities</span>
				<span class="lowercase">{dragon.conditionImmunities}</span>
			</p>
		</li>
	{/if}

	<li class="dragon-senses">
		<p>
			<span class="label">Senses</span>
			<span
				><span class="whitespace-nowrap">
					<a
						class="no-underline"
						target="_blank"
						href="https://www.dndbeyond.com/sources/basic-rules/monsters#Blindsight">blindsight</a
					>
					{dragon.blindsight} ft.,
				</span>
				<span class="whitespace-nowrap">
					<a
						class="no-underline"
						target="_blank"
						href="https://www.dndbeyond.com/sources/basic-rules/monsters#Darkvision">darkvision</a
					>
					{dragon.darkvision} ft.,
				</span>
				<span class="whitespace-nowrap">passive Perception {dragon.passivePerception}</span></span
			>
		</p>
	</li>

	<li class="dragon-languages">
		<p>
			<span class="label">Languages</span>
			<span>{dragon.languages}</span>
		</p>
	</li>

	<li class="dragon-challenge">
		<p>
			<span class="label">Challenge</span>
			<span>
				{dragon.cr} ({dragon.xp.toLocaleString()} XP)
			</span>
			<span class="label">Proficiency Bonus</span>
			<span>
				+{dragon.proficiencyBonus}
			</span>
		</p>
	</li>
</ul>
