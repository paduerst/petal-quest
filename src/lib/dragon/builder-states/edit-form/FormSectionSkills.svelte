<script lang="ts">
	import { type DragonConfig, SKILLS } from '$lib/dragon';

	export let config: DragonConfig;
</script>

{#each SKILLS as skill}
	<div class="daisy-form-control w-full max-w-sm m-1">
		<label class="daisy-label" for={skill.key}>
			<span class="daisy-label-text">{skill.name}</span>
		</label>
		<select
			bind:value={config[skill.key]}
			class="daisy-select daisy-select-bordered bg-white"
			name={skill.key}
		>
			<option value={undefined}>Default Proficiency ({skill.defaultDescription})</option>
			<option value={0.0}>Not Proficient</option>
			<option value={0.5}>Half Proficiency</option>
			<option value={1.0}>Proficient</option>
			<option value={2.0}>Expertise (Double Proficiency)</option>
		</select>
	</div>
{/each}
