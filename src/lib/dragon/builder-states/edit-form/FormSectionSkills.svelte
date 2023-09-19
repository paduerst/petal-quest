<script lang="ts">
	import { type DragonConfig, SKILLS } from '$lib/dragon';

	export let config: DragonConfig;
</script>

<div class="flex flex-col items-center">
	{#each SKILLS as skill}
		<div class="daisy-form-control w-full max-w-xl m-1 flex-row flex-wrap items-center">
			<label class="daisy-label w-1/3 sm:w-1/4 text-left" for={skill.key}>
				<span class="daisy-label-text">{skill.name}</span>
			</label>
			<select
				bind:value={config[skill.key]}
				class="daisy-select daisy-select-bordered bg-white w-2/3 sm:w-3/4"
				name={skill.key}
				id={skill.key}
			>
				<option value={undefined}>Default Proficiency ({skill.defaultDescription})</option>
				<option value={0.0}>Not Proficient</option>
				<option value={0.5}>Half Proficiency</option>
				<option value={1.0}>Proficient</option>
				<option value={2.0}>Expertise (Double Proficiency)</option>
			</select>
		</div>
	{/each}
</div>
