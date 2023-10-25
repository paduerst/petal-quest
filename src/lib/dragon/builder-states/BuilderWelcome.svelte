<script lang="ts">
	import { nextBuilderState, currentDragonConfig, dragonBuilderHistory } from '.';
	import { DragonConfig } from '../dragon-config';
	import FormSubsectionWelcome from './edit-form/FormSubsectionWelcome.svelte';

	let newConfig: DragonConfig = new DragonConfig();
</script>

<p class="font-bold text-xl">Welcome to the Prismatic Dragon Builder!</p>

<div class="flex flex-col items-center">
	<FormSubsectionWelcome config={newConfig} />

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
		<p class="font-bold text-lg mt-6">Build from History</p>
		<button
			class="daisy-btn daisy-btn-neutral m-2"
			on:click={() => {
				$currentDragonConfig = $dragonBuilderHistory[0];
			}}
		>
			Rebuild Last Dragon
		</button>
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
