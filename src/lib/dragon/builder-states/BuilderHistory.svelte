<script lang="ts">
	import { flip, type FlipParams } from 'svelte/animate';
	import { fade, type FadeParams, fly, type FlyParams } from 'svelte/transition';
	import {
		currentDragonConfig,
		dragonBuilderHistory,
		lastBuilderState,
		nextBuilderState,
		dragonBuilderHistoryMaxLength
	} from '.';
	import { type DragonConfig, capitalizeFirstLetter } from '..';
	import DragonConfigPreview from '../DragonConfigPreview.svelte';
	import { getToastStore, type ToastSettings } from '@skeletonlabs/skeleton';

	const toastStore = getToastStore();

	const historyFlipParams: FlipParams = { duration: 150 };
	const historyFlyXDistance = 600;
	const historyFlyDuration = 300;
	const historyFlyInParams: FlyParams = { x: historyFlyXDistance, duration: historyFlyDuration };
	const historyFadeParams: FadeParams = { duration: 50 };

	function onClickDelete(event: { detail: DragonConfig }) {
		const previousIndex = dragonBuilderHistory.remove(event.detail);
		if ($dragonBuilderHistory.length === 0) {
			$currentDragonConfig = undefined;
		} else if (
			currentHistoryPage >= Math.ceil($dragonBuilderHistory.length / historyEntriesPerPage)
		) {
			setHistoryPage(currentHistoryPage - 1);
		} else {
			// no extra action needed
		}

		if (previousIndex >= 0) {
			// show a toast to the user which allows them to undo this action
			const t: ToastSettings = {
				message: 'Dragon deleted.',
				action: {
					label: 'Undo',
					response: () => dragonBuilderHistory.add(event.detail, previousIndex)
				},
				timeout: 10000,
				hoverable: true
			};
			toastStore.clear();
			toastStore.trigger(t);
		}
	}

	function onClickClearHistory() {
		const previousHistory = dragonBuilderHistory.clear();
		$currentDragonConfig = undefined;

		if (previousHistory.length > 0) {
			// show a toast to the user which allows them to undo this action
			const t: ToastSettings = {
				message: 'History cleared.',
				action: {
					label: 'Undo',
					response: () => dragonBuilderHistory.set(previousHistory)
				},
				timeout: 10000,
				hoverable: true
			};
			toastStore.clear();
			toastStore.trigger(t);
		}
	}

	let returnState =
		$lastBuilderState !== undefined &&
		$lastBuilderState !== 'LOADING' &&
		$lastBuilderState !== 'HISTORY'
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

<p class="font-bold text-xl mb-2">Builder History</p>

<p class="m-2">
	Dragons are saved in this browser's local storage, up to a maximum of {dragonBuilderHistoryMaxLength}
	dragons.
</p>

<div class="flex flex-col items-center">
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

	<div class="daisy-divider my-2" />

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

	<div class="daisy-divider my-2" />

	<button
		class="daisy-btn daisy-btn-neutral m-2"
		on:click={() => {
			$nextBuilderState = returnState;
		}}
	>
		Return to Builder {capitalizeFirstLetter(returnState.toLowerCase())}
	</button>

	{#if $dragonBuilderHistory.length > 0}
		<button
			class="daisy-btn daisy-btn-outline hover:daisy-btn-error m-2"
			on:click={onClickClearHistory}
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
