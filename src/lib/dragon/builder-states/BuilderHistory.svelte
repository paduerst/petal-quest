<script lang="ts">
	import { flip, type FlipParams } from 'svelte/animate';
	import { fade, type FadeParams, fly, type FlyParams } from 'svelte/transition';
	import { currentDragonConfig, dragonBuilderHistory, lastBuilderState, nextBuilderState } from '.';
	import { type DragonConfig, capitalizeFirstLetter } from '..';
	import DragonConfigPreview from '../DragonConfigPreview.svelte';

	const historyFlipParams: FlipParams = { duration: 150 };
	const historyFlyXDistance = 600;
	const historyFlyDuration = 200;
	const historyFlyInParams: FlyParams = { x: historyFlyXDistance, duration: historyFlyDuration };
	const historyFadeParams: FadeParams = { duration: 50 };

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

	const historyEntriesPerPage = 4;
	let historyPagesNeeded: number;
	$: historyPagesNeeded = Math.ceil($dragonBuilderHistory.length / historyEntriesPerPage);
	let currentHistoryPage = 0;

	function setHistoryPage(nextPage: number) {
		const flipFlyDirection = currentHistoryPage > nextPage;
		if (flipFlyDirection) {
			historyFlyInParams.x = -historyFlyXDistance;
		}
		currentHistoryPage = nextPage;
		if (flipFlyDirection) {
			setTimeout(() => {
				historyFlyInParams.x = historyFlyXDistance;
			}, historyFlyDuration);
		}
	}
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
				{#each $dragonBuilderHistory.slice(currentHistoryPage * historyEntriesPerPage, currentHistoryPage * historyEntriesPerPage + historyEntriesPerPage) as config (config.toString())}
					<li
						animate:flip={historyFlipParams}
						in:fly={historyFlyInParams}
						out:fade={historyFadeParams}
						class="my-4"
					>
						<DragonConfigPreview {config} on:clickDelete={onClickDelete} />
					</li>
				{/each}
			</ul>
		</div>
	</div>
	{#if historyPagesNeeded > 1}
		<div class="daisy-join m-2">
			{#each Array(historyPagesNeeded) as _, index (index)}
				<button
					class="daisy-join-item daisy-btn daisy-btn-outline"
					class:daisy-btn-active={index === currentHistoryPage}
					on:click={() => {
						setHistoryPage(index);
					}}
				>
					{index + 1}
				</button>
			{/each}
		</div>
	{/if}
	{#if $dragonBuilderHistory.length > 0}
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
