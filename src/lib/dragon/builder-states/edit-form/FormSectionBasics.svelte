<script lang="ts">
	import type { DragonConfig } from '$lib/dragon';
	import FormSubsectionWelcome from './FormSubsectionWelcome.svelte';

	export let config: DragonConfig;
</script>

<div class="flex flex-col items-center w-full">
	<FormSubsectionWelcome {config} />

	<div class="daisy-form-control w-full max-w-sm m-1">
		<label class="daisy-label" for="name">
			<span class="daisy-label-text">Name</span>
		</label>
		<input
			type="text"
			bind:value={config.name}
			placeholder={'Referred to as "the dragon" by default'}
			class="daisy-input daisy-input-bordered bg-white"
			name="name"
			id="name"
			data-1p-ignore
		/>
	</div>

	<div class="daisy-form-control flex-row gap-2 items-center m-1 w-full max-w-sm">
		<input
			type="checkbox"
			bind:checked={config.disableNameCapitalization}
			class="daisy-checkbox cursor-pointer"
			name="disableNameCapitalization"
			id="disableNameCapitalization"
		/>
		<label class="daisy-label daisy-label-text" for="disableNameCapitalization">
			Disable name capitalization at starts of sentences
		</label>
	</div>

	<div class="daisy-form-control w-full max-w-sm m-1">
		<label class="daisy-label" for="statBlockTitle">
			<span class="daisy-label-text">Stat Block Title</span>
		</label>
		<input
			type="text"
			bind:value={config.statBlockTitle}
			placeholder={'Defaults to name and a descriptive title'}
			class="daisy-input daisy-input-bordered bg-white"
			name="statBlockTitle"
			id="statBlockTitle"
			data-1p-ignore
		/>
	</div>

	<div class="daisy-form-control w-full max-w-sm m-1">
		<label class="daisy-label" for="alignment">
			<span class="daisy-label-text">Alignment</span>
		</label>
		<input
			type="text"
			bind:value={config.alignment}
			placeholder="Defaults to typical alignment for this color"
			class="daisy-input daisy-input-bordered bg-white"
			name="alignment"
			id="alignment"
			data-1p-ignore
		/>
	</div>

	<div class="daisy-form-control w-full max-w-sm m-1">
		<label class="daisy-label" for="languages">
			<span class="daisy-label-text">Languages</span>
		</label>
		<input
			type="text"
			bind:value={config.languages}
			placeholder="Defaults to typical languages for this age"
			class="daisy-input daisy-input-bordered bg-white"
			name="languages"
			id="languages"
			data-1p-ignore
		/>
	</div>

	<!-- Pronouns -->
</div>
