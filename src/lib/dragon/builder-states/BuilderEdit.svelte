<script lang="ts">
	import { onMount } from 'svelte';

	import { currentDragonConfig, lastBuilderState, nextBuilderState } from '.';
	import { DragonConfig } from '..';
	import FormSectionBasics from './edit-form/FormSectionBasics.svelte';
	import FormSectionSkills from './edit-form/FormSectionSkills.svelte';
	import FormSectionSpells from './edit-form/FormSectionSpells.svelte';

	let editedConfig: DragonConfig = new DragonConfig();
	onMount(() => {
		if ($currentDragonConfig !== undefined) {
			editedConfig = DragonConfig.newFromDragonConfig($currentDragonConfig);
		}
	});

	const FORM_SECTION_NAMES = ['Basics', 'Skills', 'Spells'] as const;
	type FormSectionName = (typeof FORM_SECTION_NAMES)[number];
	const formSections = {
		Basics: FormSectionBasics,
		Skills: FormSectionSkills,
		Spells: FormSectionSpells
	} as const;
	let currentSectionName: FormSectionName = 'Basics';
</script>

<div class="flex flex-col items-center">
	<div class="daisy-tabs daisy-tabs-boxed font-semibold border border-black gap-1">
		{#each FORM_SECTION_NAMES as name, index}
			<button
				class="daisy-tab"
				class:daisy-btn-ghost={currentSectionName !== name}
				class:daisy-btn-neutral={currentSectionName === name}
				on:click={() => {
					currentSectionName = name;
				}}
			>
				{name}
			</button>
		{/each}
	</div>

	<svelte:component this={formSections[currentSectionName]} config={editedConfig} />

	<button
		class="daisy-btn daisy-btn-neutral m-2 mt-6"
		on:click={() => {
			editedConfig.cleanup();
			if (
				$currentDragonConfig !== undefined &&
				$currentDragonConfig.toString() === editedConfig.toString() &&
				$lastBuilderState !== undefined &&
				$lastBuilderState !== 'LOADING' &&
				$lastBuilderState !== 'EDIT'
			) {
				// no change is being made, so let's just return to the last state
				$nextBuilderState = $lastBuilderState;
			} else {
				$currentDragonConfig = editedConfig;
			}
		}}
	>
		{$currentDragonConfig === undefined ? 'Build' : 'Update'} Dragon
	</button>
</div>
