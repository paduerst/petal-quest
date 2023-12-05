<script lang="ts">
	import { dev } from '$app/environment';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';

	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';

	import { DragonConfig } from './dragon-config';
	import {
		lastBuilderState,
		currentBuilderState,
		nextBuilderState,
		currentDragonConfig,
		builderFadeParams
	} from './builder-states';
	import type { DragonShareModalValue } from '$lib/modals';

	import DragonContainer from './DragonContainer.svelte';
	import BuilderLoading from './builder-states/BuilderLoading.svelte';
	import BuilderWelcome from './builder-states/BuilderWelcome.svelte';
	import BuilderDisplay from './builder-states/BuilderDisplay.svelte';
	import BuilderEdit from './builder-states/BuilderEdit.svelte';
	import BuilderHistory from './builder-states/BuilderHistory.svelte';
	import BuilderDebug from './builder-states/BuilderDebug.svelte';
	import DragonControlButtons from './DragonControlButtons.svelte';
	import DragonDebugButtons from './DragonDebugButtons.svelte';

	const modalStore = getModalStore();
	const shareModal: ModalSettings = {
		type: 'component',
		component: 'dragonShare'
	};

	// Builder State Management
	function scrollToTop() {
		const elemPage = document.querySelector('#page');
		if (elemPage !== null) {
			elemPage.scrollTop = 0;
		}
	}

	function transition(): void {
		currentDragonConfig.transition();
		if ($nextBuilderState !== undefined) {
			scrollToTop();
			$lastBuilderState = $currentBuilderState;
			$currentBuilderState = $nextBuilderState;
			$nextBuilderState = undefined;
		}
	}

	// Click Handling
	function handleShareClick(clickedButton?: HTMLElement) {
		const valueForDragonShareModal: DragonShareModalValue = {
			dragon: $currentDragonConfig,
			onDestroyFocusElement: clickedButton
		};
		shareModal.value = valueForDragonShareModal;
		modalStore.trigger(shareModal);
	}

	function handleControlClick(event: {
		detail: { buttonText: string; clickedButton?: HTMLElement };
	}): void {
		if (event.detail.buttonText === 'SHARE') {
			handleShareClick(event.detail.clickedButton);
		} else {
			console.log(`Unhandled buttonText of ${event.detail.buttonText}`);
		}
	}

	const debugEnabled: boolean = false && dev;

	function handleDebugClick(event: {
		detail: { debugText: string; clickedButton?: HTMLElement };
	}): void {
		if (debugEnabled) {
			if (event.detail.debugText === 'SHARE') {
				handleShareClick(event.detail.clickedButton);
			} else {
				console.log(`Unhandled debugText of ${event.detail.debugText}`);
			}
		} else {
			console.log('Warning: Debug events not currently handled!');
		}
	}

	// Initialization / Dragon Config Management
	afterNavigate(() => {
		const URLDragonConfig = new DragonConfig();
		if (URLDragonConfig.fromURLSearchParams($page.url.searchParams)) {
			currentDragonConfig.set(URLDragonConfig, true);
		} else {
			currentDragonConfig.set(undefined, true);
		}
	});

	// Reset the Builder States and Dragon Config when we leave the Dragon Builder
	onDestroy(() => {
		currentDragonConfig.set(undefined, true);
		lastBuilderState.set(undefined);
		currentBuilderState.set('LOADING');
		nextBuilderState.set(undefined, true);
	});
</script>

<div class="flex flex-col items-center">
	<DragonContainer
		config={$currentDragonConfig}
		standardizeColumnsAndText={$currentBuilderState === 'DISPLAY'}
	>
		{#if $currentBuilderState === 'LOADING' && $nextBuilderState === undefined}
			<div transition:fade={builderFadeParams} on:outroend={transition}>
				<BuilderLoading />
			</div>
		{:else if $currentBuilderState === 'WELCOME' && $nextBuilderState === undefined}
			<div transition:fade={builderFadeParams} on:outroend={transition}>
				<BuilderWelcome />
			</div>
		{:else if $currentBuilderState === 'DISPLAY' && $nextBuilderState === undefined}
			<div transition:fade={builderFadeParams} on:outroend={transition}>
				<BuilderDisplay />
			</div>
		{:else if $currentBuilderState === 'EDIT' && $nextBuilderState === undefined}
			<div transition:fade={builderFadeParams} on:outroend={transition}>
				<BuilderEdit />
			</div>
		{:else if $currentBuilderState === 'HISTORY' && $nextBuilderState === undefined}
			<div transition:fade={builderFadeParams} on:outroend={transition}>
				<BuilderHistory />
			</div>
		{:else if $currentBuilderState === 'DEBUG' && $nextBuilderState === undefined}
			<div transition:fade={builderFadeParams} on:outroend={transition}>
				<BuilderDebug />
			</div>
		{:else if $nextBuilderState !== undefined}
			<!-- We are transitioning. Keep it empty. -->
		{:else}
			<div transition:fade={builderFadeParams} on:outroend={transition}>
				<p>The $currentBuilderState of {$currentBuilderState} is unhandled right now!</p>
			</div>
		{/if}
	</DragonContainer>

	{#if $currentBuilderState === 'DISPLAY' && $nextBuilderState === undefined}
		<div transition:fade={builderFadeParams} class="w-fit">
			<DragonControlButtons on:click={handleControlClick} />
		</div>
	{/if}

	{#if debugEnabled}
		<div class="w-fit">
			<DragonDebugButtons on:click={handleDebugClick} />
		</div>
	{/if}
</div>
