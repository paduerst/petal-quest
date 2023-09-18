<script lang="ts">
	import { onMount } from 'svelte';

	import { currentDragonConfig, lastBuilderState, nextBuilderState } from '.';
	import { DragonConfig } from '..';
	import FormSectionBasics from './edit-form/FormSectionBasics.svelte';

	let editedConfig: DragonConfig = new DragonConfig();
	onMount(() => {
		if ($currentDragonConfig !== undefined) {
			editedConfig = DragonConfig.newFromDragonConfig($currentDragonConfig);
		}
	});
</script>

<div class="flex flex-col items-center">
	<FormSectionBasics config={editedConfig} />

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
