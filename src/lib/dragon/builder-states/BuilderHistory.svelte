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

	let innerClientHeight: number;
	let outerWrapperHeight: number;
	$: outerWrapperHeight = innerClientHeight;

	let heightTransitionDuration =
		typeof historyFlipParams.duration === 'number'
			? Math.round(0.75 * historyFlipParams.duration)
			: 100;
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
	<div
		class="outer-wrapper max-w-xl w-full"
		style="--outer-wrapper-height: {outerWrapperHeight}px; transition: height {heightTransitionDuration}ms ease;"
	>
		<div class="inner-wrapper w-full" bind:clientHeight={innerClientHeight}>
			<ul class="w-full">
				{#each $dragonBuilderHistory as config (config.toString())}
					<li animate:flip={historyFlipParams} class="my-4">
						<DragonConfigPreview {config} on:clickDelete={onClickDelete} />
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<button
		class="daisy-btn daisy-btn-outline hover:daisy-btn-error m-2 mt-6"
		on:click={() => {
			dragonBuilderHistory.clear();
			$currentDragonConfig = undefined;
		}}
	>
		Clear History
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
