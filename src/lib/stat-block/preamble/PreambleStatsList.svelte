<script lang="ts">
	import type { StatsForPreambleStatsList } from '.';

	export let stats: StatsForPreambleStatsList;

	let truesightText: string = '';
	let blindsightText: string = '';
	let darkvisionText: string = '';

	$: if (stats.truesight > 0) {
		let truesightDescription =
			stats.truesightDescription !== undefined && stats.truesightDescription.length > 0
				? ` (${stats.truesightDescription})`
				: '';
		truesightText = `truesight ${stats.truesight} ft.${truesightDescription},`;
	} else {
		truesightText = '';
	}

	$: if (stats.blindsight > 0) {
		let blindsightDescription =
			stats.blindsightDescription !== undefined && stats.blindsightDescription.length > 0
				? ` (${stats.blindsightDescription})`
				: '';
		blindsightText = `blindsight ${stats.blindsight} ft.${blindsightDescription},`;
	} else {
		blindsightText = '';
	}

	$: if (stats.darkvision > 0) {
		let darkvisionDescription =
			stats.darkvisionDescription !== undefined && stats.darkvisionDescription.length > 0
				? ` (${stats.darkvisionDescription})`
				: '';
		darkvisionText = `darkvision ${stats.darkvision} ft.${darkvisionDescription},`;
	} else {
		darkvisionText = '';
	}
</script>

<ul class="dragon-stats">
	{#if stats.savingThrows.length > 0}
		<li class="dragon-saves my-1">
			<p class="-indent-4 pl-4">
				<span class="stat-block-label">Saving Throws</span>
				<span>
					{#each stats.savingThrows as save, index}
						<span class="whitespace-nowrap">{save}</span
						>{#if index < stats.savingThrows.length - 1}{', '}{/if}
					{/each}
				</span>
			</p>
		</li>
	{/if}

	{#if stats.skills.length > 0}
		<li class="dragon-skills my-1">
			<p class="-indent-4 pl-4">
				<span class="stat-block-label">Skills</span>
				<span>
					{#each stats.skills as skill, index}
						<span class="whitespace-nowrap">{skill}</span
						>{#if index < stats.skills.length - 1}{', '}{/if}
					{/each}
				</span>
			</p>
		</li>
	{/if}

	{#if stats.vulnerabilities.length > 0}
		<li class="dragon-vulnerabilities my-1">
			<p class="-indent-4 pl-4">
				<span class="stat-block-label">Damage Vulnerabilities</span>
				<span class="lowercase">{stats.vulnerabilities}</span>
			</p>
		</li>
	{/if}

	{#if stats.resistances.length > 0}
		<li class="dragon-resistances my-1">
			<p class="-indent-4 pl-4">
				<span class="stat-block-label">Damage Resistances</span>
				<span class="lowercase">{stats.resistances}</span>
			</p>
		</li>
	{/if}

	{#if stats.immunities.length > 0}
		<li class="dragon-immunities my-1">
			<p class="-indent-4 pl-4">
				<span class="stat-block-label">Damage Immunities</span>
				<span class="lowercase">{stats.immunities}</span>
			</p>
		</li>
	{/if}

	{#if stats.conditionImmunities.length > 0}
		<li class="dragon-conditions my-1">
			<p class="-indent-4 pl-4">
				<span class="stat-block-label">Condition Immunities</span>
				<span class="lowercase">{stats.conditionImmunities}</span>
			</p>
		</li>
	{/if}

	<li class="dragon-senses my-1">
		<p class="-indent-4 pl-4">
			<span class="stat-block-label">Senses</span>
			<span>
				{#if truesightText.length > 0}
					<span class="whitespace-nowrap">{truesightText}</span>
				{/if}
				{#if blindsightText.length > 0}
					<span class="whitespace-nowrap">{blindsightText}</span>
				{/if}
				{#if darkvisionText.length > 0}
					<span class="whitespace-nowrap">{darkvisionText}</span>
				{/if}
				<span class="whitespace-nowrap">passive Perception {stats.passivePerception}</span>
			</span>
		</p>
	</li>

	<li class="dragon-languages my-1">
		<p class="-indent-4 pl-4">
			<span class="stat-block-label">Languages</span>
			<span>{stats.languages}</span>
		</p>
	</li>

	<li class="dragon-challenge">
		<div class="flex flex-wrap justify-between">
			<div class="pr-2 my-1">
				<span class="stat-block-label">Challenge</span>
				<span>
					{stats.cr} ({stats.xp.toLocaleString()} XP)
				</span>
			</div>
			<div class="pr-2 my-1">
				<span class="stat-block-label">Proficiency Bonus</span>
				<span>
					+{stats.proficiencyBonus}
				</span>
			</div>
		</div>
	</li>
</ul>
