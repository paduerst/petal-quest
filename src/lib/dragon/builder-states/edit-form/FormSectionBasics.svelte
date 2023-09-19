<script lang="ts">
	import type { DragonConfig, PronounsConfig } from '$lib/dragon';
	import FormSubsectionWelcome from './FormSubsectionWelcome.svelte';

	export let config: DragonConfig;

	let customPronounsConfig: PronounsConfig = {
		plural: false,
		nominative: '',
		objective: '',
		possessiveAdjective: ''
	};

	$: if (config.pronouns !== 'custom') {
		config.pronounsConfig = undefined;
	} else if (config.pronounsConfig !== undefined) {
		customPronounsConfig = config.pronounsConfig;
	} else {
		config.pronounsConfig = customPronounsConfig;
	}
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

	<div class="daisy-form-control w-full max-w-sm m-1">
		<label class="daisy-label" for="pronouns">
			<span class="daisy-label-text">Pronouns</span>
		</label>
		<select
			bind:value={config.pronouns}
			class="daisy-select daisy-select-bordered bg-white"
			name="pronouns"
			id="pronouns"
		>
			<option value="it-its">It/Its</option>
			<option value="she-her">She/Her</option>
			<option value="he-him">He/Him</option>
			<option value="they-them">They/Them</option>
			<option value="none">None</option>
			<option value="custom">Custom</option>
		</select>
	</div>

	{#if config.pronouns === 'custom'}
		<div class="daisy-form-control flex-row gap-2 items-center m-1 w-full max-w-sm">
			<input
				type="checkbox"
				bind:checked={customPronounsConfig.plural}
				class="daisy-checkbox cursor-pointer"
				name="pronounsPlural"
				id="pronounsPlural"
			/>
			<label class="daisy-label daisy-label-text" for="pronounsPlural">
				Pronouns are grammatically plural (like they/them)
			</label>
		</div>

		<div class="daisy-form-control w-full max-w-sm m-1">
			<label class="daisy-label" for="nominativePronoun">
				<span class="daisy-label-text">Nominative Pronoun</span>
			</label>
			<input
				type="text"
				bind:value={customPronounsConfig.nominative}
				placeholder="e.g. he, she, they, ey"
				class="daisy-input daisy-input-bordered bg-white"
				name="nominativePronoun"
				id="nominativePronoun"
				data-1p-ignore
			/>
		</div>

		<div class="daisy-form-control w-full max-w-sm m-1">
			<label class="daisy-label" for="objectivePronoun">
				<span class="daisy-label-text">Objective Pronoun</span>
			</label>
			<input
				type="text"
				bind:value={customPronounsConfig.objective}
				placeholder="e.g. him, her, them, em"
				class="daisy-input daisy-input-bordered bg-white"
				name="objectivePronoun"
				id="objectivePronoun"
				data-1p-ignore
			/>
		</div>

		<div class="daisy-form-control w-full max-w-sm m-1">
			<label class="daisy-label" for="possessiveAdjectivePronoun">
				<span class="daisy-label-text">Possessive Adjective</span>
			</label>
			<input
				type="text"
				bind:value={customPronounsConfig.possessiveAdjective}
				placeholder="e.g. his, her, their, eir"
				class="daisy-input daisy-input-bordered bg-white"
				name="possessiveAdjectivePronoun"
				id="possessiveAdjectivePronoun"
				data-1p-ignore
			/>
		</div>
	{/if}
</div>
