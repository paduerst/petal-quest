<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';

	export let dragon: DragonStats;
</script>

<ul class="dragon-stats">
	<li class="dragon-saves my-1">
		<p class="-indent-4 pl-4">
			<span class="stat-block-label">Saving Throws</span>
			<span>
				{#each dragon.savingThrows as save, index}
					<span class="whitespace-nowrap">{save}</span
					>{#if index < dragon.savingThrows.length - 1}{', '}{/if}
				{/each}
			</span>
		</p>
	</li>

	{#if dragon.skills.length > 0}
		<li class="dragon-skills my-1">
			<p class="-indent-4 pl-4">
				<span class="stat-block-label">Skills</span>
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
		<li class="dragon-vulnerabilities my-1">
			<p class="-indent-4 pl-4">
				<span class="stat-block-label">Damage Vulnerabilities</span>
				<span class="lowercase">{dragon.vulnerabilities}</span>
			</p>
		</li>
	{/if}

	{#if dragon.resistances.length > 0}
		<li class="dragon-resistances my-1">
			<p class="-indent-4 pl-4">
				<span class="stat-block-label">Damage Resistances</span>
				<span class="lowercase">{dragon.resistances}</span>
			</p>
		</li>
	{/if}

	{#if dragon.immunities.length > 0}
		<li class="dragon-immunities my-1">
			<p class="-indent-4 pl-4">
				<span class="stat-block-label">Damage Immunities</span>
				<span class="lowercase">{dragon.immunities}</span>
			</p>
		</li>
	{/if}

	{#if dragon.conditionImmunities.length > 0}
		<li class="dragon-conditions my-1">
			<p class="-indent-4 pl-4">
				<span class="stat-block-label">Condition Immunities</span>
				<span class="lowercase">{dragon.conditionImmunities}</span>
			</p>
		</li>
	{/if}

	<li class="dragon-senses my-1">
		<p class="-indent-4 pl-4">
			<span class="stat-block-label">Senses</span>
			<span>
				{#if dragon.age === 'cosmic'}
					{#if dragon.blindsight > 0}
						<span class="whitespace-nowrap">
							truesight
							{dragon.blindsight} ft.,
						</span>
					{/if}
				{:else}
					{#if dragon.blindsight > 0}
						<span class="whitespace-nowrap">
							blindsight
							{dragon.blindsight} ft.,
						</span>
					{/if}
					{#if dragon.darkvision > 0}
						<span class="whitespace-nowrap">
							darkvision
							{dragon.darkvision} ft.,
						</span>
					{/if}
				{/if}
				<span class="whitespace-nowrap">passive Perception {dragon.passivePerception}</span>
			</span>
		</p>
	</li>

	<li class="dragon-languages my-1">
		<p class="-indent-4 pl-4">
			<span class="stat-block-label">Languages</span>
			<span>{dragon.languages}</span>
		</p>
	</li>

	<li class="dragon-challenge">
		<div class="flex flex-wrap justify-between">
			<div class="pr-2 my-1">
				<span class="stat-block-label">Challenge</span>
				<span>
					{dragon.cr} ({dragon.xp.toLocaleString()} XP)
				</span>
			</div>
			<div class="pr-2 my-1">
				<span class="stat-block-label">Proficiency Bonus</span>
				<span>
					+{dragon.proficiencyBonus}
				</span>
			</div>
		</div>
	</li>
</ul>
