<script lang="ts">
	import { onMount } from 'svelte';

	import { currentDragonConfig, lastBuilderState, nextBuilderState } from '.';
	import { DEFAULT_PRONOUNS, DragonConfig } from '..';
	import FormSectionBasics from './edit-form/FormSectionBasics.svelte';
	import FormSectionSkills from './edit-form/FormSectionSkills.svelte';
	import FormSectionSpells from './edit-form/FormSectionSpells.svelte';

	let editedConfig: DragonConfig = new DragonConfig();
	onMount(() => {
		if ($currentDragonConfig !== undefined) {
			editedConfig = DragonConfig.newFromDragonConfig($currentDragonConfig);
			if (editedConfig.pronouns === undefined) {
				editedConfig.pronouns = DEFAULT_PRONOUNS;
			}
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

	let innerClientHeight: number;
	let outerWrapperHeight: number;
	$: outerWrapperHeight = innerClientHeight;

	let heightTransitionDuration = 100;
</script>

<div class="flex flex-col items-center">
	<div class="daisy-tabs daisy-tabs-boxed font-semibold border border-black gap-1">
		{#each FORM_SECTION_NAMES as name}
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

	<div class="daisy-divider my-2" />

	<div
		class="outer-wrapper w-full"
		style="--outer-wrapper-height: {outerWrapperHeight}px; transition: height {heightTransitionDuration}ms ease;"
	>
		<div class="inner-wrapper w-full" bind:clientHeight={innerClientHeight}>
			<svelte:component this={formSections[currentSectionName]} config={editedConfig} />
		</div>
	</div>

	<div class="daisy-divider my-2" />

	<button
		class="daisy-btn daisy-btn-neutral"
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

<style>
	.outer-wrapper {
		@apply overflow-hidden;
		height: var(--outer-wrapper-height);
	}

	@media print {
		.outer-wrapper {
			height: fit-content;
		}
	}

	.inner-wrapper {
		@apply h-fit inline-block;
	}
</style>
