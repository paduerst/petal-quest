<script lang="ts">
	import { onMount } from 'svelte';

	import { nextBuilderState, currentDragonConfig, dragonBuilderHistory } from '.';
	import { DragonConfig } from '../dragon-config';
	import DragonConfigPreview from '../DragonConfigPreview.svelte';
	import FormSubsectionWelcome from './edit-form/FormSubsectionWelcome.svelte';

	let newConfig: DragonConfig = new DragonConfig();

	let firstElement: HTMLElement | undefined;
	onMount(() => {
		if (firstElement !== undefined) {
			firstElement.focus();
		}
	});
</script>

<h4 class="font-bold text-xl">Welcome to the Prismatic Dragon Builder!</h4>

<div class="flex flex-col items-center">
	<FormSubsectionWelcome bind:firstElement config={newConfig} />

	<button
		class="daisy-btn daisy-btn-neutral m-2 mt-6"
		on:click={() => {
			$currentDragonConfig = newConfig;
		}}
	>
		Build Dragon
	</button>

	<button
		class="daisy-btn daisy-btn-outline m-2"
		on:click={() => {
			$nextBuilderState = 'EDIT';
		}}
	>
		Advanced Options
	</button>

	{#if $dragonBuilderHistory.length > 0}
		<div class="daisy-divider my-2" />

		<p class="font-bold text-lg">Rebuild Last Dragon</p>
		<div class="w-full max-w-xl m-2">
			<DragonConfigPreview config={$dragonBuilderHistory[0]} showDeleteButton={false} />
		</div>
		<button
			class="daisy-btn daisy-btn-outline m-2"
			on:click={() => {
				$nextBuilderState = 'HISTORY';
			}}
		>
			View Builder History
		</button>
	{/if}
</div>
