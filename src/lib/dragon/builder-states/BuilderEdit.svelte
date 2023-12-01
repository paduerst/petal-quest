<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	import { currentDragonConfig, nextBuilderState } from '.';
	import { DEFAULT_PRONOUNS } from '..';
	import { DragonConfig } from '../dragon-config';
	import FormSectionBasics from './edit-form/FormSectionBasics.svelte';
	import FormSectionHpAbilities from './edit-form/FormSectionHPAbilities.svelte';
	import FormSectionSkills from './edit-form/FormSectionSkills.svelte';
	import FormSectionSpells from './edit-form/FormSectionSpells.svelte';
	import { getToastStore, type ToastSettings } from '@skeletonlabs/skeleton';

	const toastStore = getToastStore();

	let editedConfig: DragonConfig = new DragonConfig();

	function setEditedConfig(newConfig: DragonConfig | undefined) {
		if (newConfig !== undefined) {
			editedConfig = DragonConfig.newFromDragonConfig(newConfig);
		} else {
			editedConfig = new DragonConfig();
		}

		if (editedConfig.pronouns === undefined) {
			editedConfig.pronouns = DEFAULT_PRONOUNS;
		}
	}

	function onDiscardEdits() {
		editedConfig.cleanup();
		const discardedConfig = DragonConfig.newFromDragonConfig(editedConfig);
		setEditedConfig($currentDragonConfig);

		// let the user know what we did
		const t: ToastSettings = {
			message: 'No edits to discard.',
			timeout: 10000,
			hoverable: true
		};
		if (discardedConfig.toString() !== editedConfig.toString()) {
			// we discarded actual changes, so let's offer to undo that
			t.message = 'Edits discarded.';
			t.action = {
				label: 'Undo',
				response: () => setEditedConfig(discardedConfig)
			};
		}
		toastStore.clear();
		toastStore.trigger(t);
	}

	const FORM_SECTION_NAMES = ['Basics', 'HP & Abilities', 'Skills', 'Spells'] as const;
	type FormSectionName = (typeof FORM_SECTION_NAMES)[number];
	const formSections = {
		Basics: FormSectionBasics,
		'HP & Abilities': FormSectionHpAbilities,
		Skills: FormSectionSkills,
		Spells: FormSectionSpells
	} as const;
	let currentSectionName: FormSectionName = 'Basics';

	let innerClientHeight: number;
	let outerWrapperHeight: number;
	$: outerWrapperHeight = innerClientHeight;

	let heightTransitionDuration = 100;

	let sectionControlElements: (HTMLElement | undefined)[] = Array(FORM_SECTION_NAMES.length).fill(
		undefined
	);
	onMount(() => {
		setEditedConfig($currentDragonConfig);
		if (sectionControlElements[0] !== undefined) {
			sectionControlElements[0].focus();
		}
	});
</script>

<div class="flex flex-col items-center">
	<div class="daisy-tabs daisy-tabs-boxed font-semibold border border-black gap-1">
		{#each FORM_SECTION_NAMES as name, i}
			<button
				bind:this={sectionControlElements[i]}
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
			<div class="flex flex-col items-center w-full">
				<svelte:component this={formSections[currentSectionName]} config={editedConfig} />
			</div>
		</div>
	</div>

	<div class="daisy-divider my-2" />

	<button
		class="daisy-btn daisy-btn-neutral m-2"
		on:click={() => {
			editedConfig.cleanup();
			if (`?${editedConfig.toString()}` === $page.url.search) {
				// no change is being made, so let's just go to DISPLAY
				$nextBuilderState = 'DISPLAY';
			} else {
				$currentDragonConfig = editedConfig;
			}
		}}
	>
		{$currentDragonConfig === undefined ? 'Build' : 'Update'} Dragon
	</button>

	{#if $currentDragonConfig !== undefined}
		<button class="daisy-btn daisy-btn-outline hover:daisy-btn-error m-2" on:click={onDiscardEdits}>
			Discard Edits
		</button>
	{:else}
		<button
			class="daisy-btn daisy-btn-outline hover:daisy-btn-neutral m-2"
			on:click={() => {
				$nextBuilderState = 'WELCOME';
			}}
		>
			Return to Builder Welcome
		</button>
	{/if}
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
