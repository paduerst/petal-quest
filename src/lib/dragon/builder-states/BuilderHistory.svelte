<script lang="ts">
	import { flip, type FlipParams } from 'svelte/animate';
	import { currentDragonConfig, dragonBuilderHistory, lastBuilderState, nextBuilderState } from '.';
	import { type DragonConfig, capitalizeFirstLetter } from '..';
	import DragonConfigPreview from '../DragonConfigPreview.svelte';

	const historyFlipParams: FlipParams = { duration: 500 };

	function onClickDelete(event: { detail: DragonConfig }) {
		dragonBuilderHistory.remove(event.detail);
		if ($dragonBuilderHistory.length === 0) {
			$currentDragonConfig = undefined;
		}
	}

	let returnState =
		$lastBuilderState !== undefined && $lastBuilderState !== 'LOADING'
			? $lastBuilderState
			: 'WELCOME';
</script>

<p class="font-bold text-xl">Builder History</p>

<div class="flex flex-col items-center">
	<button
		class="daisy-btn daisy-btn-neutral m-2"
		on:click={() => {
			$nextBuilderState = returnState;
		}}
	>
		Return to Builder {capitalizeFirstLetter(returnState.toLowerCase())}
	</button>
	<div class="max-w-xl w-full">
		{#each $dragonBuilderHistory as config, index (config.toString())}
			<div animate:flip={historyFlipParams} class="my-4">
				<DragonConfigPreview {config} on:clickDelete={onClickDelete} />
				{#if index === $dragonBuilderHistory.length - 1}
					<button
						class="daisy-btn daisy-btn-outline hover:daisy-btn-error m-2 mt-6"
						on:click={() => {
							dragonBuilderHistory.clear();
							$currentDragonConfig = undefined;
						}}
					>
						Clear History
					</button>
				{/if}
			</div>
		{/each}
	</div>
</div>
