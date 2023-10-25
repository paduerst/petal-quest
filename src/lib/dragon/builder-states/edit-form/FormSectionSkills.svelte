<script lang="ts">
	import { SKILLS } from '$lib/dragon';
	import type { DragonConfig } from '$lib/dragon/dragon-config';

	export let config: DragonConfig;
</script>

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
			<option value={0.0}>Not Proficient (0x proficiency)</option>
			<option value={0.5}>Half Proficiency (0.5x proficiency)</option>
			<option value={1.0}>Proficient (1x proficiency)</option>
			<option value={2.0}>Expertise (2x proficiency)</option>
		</select>
	</div>
{/each}
