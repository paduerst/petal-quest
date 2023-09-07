<script lang="ts">
	import { dev } from '$app/environment';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';

	import { DragonConfig } from '.';
	import {
		stringToBuilderState,
		currentBuilderState,
		nextBuilderState,
		currentDragonConfig,
		builderFadeParams
	} from './builder-states';

	import DragonContainer from './DragonContainer.svelte';
	import BuilderLoading from './builder-states/BuilderLoading.svelte';
	import BuilderWelcome from './builder-states/BuilderWelcome.svelte';
	import BuilderDisplay from './builder-states/BuilderDisplay.svelte';
	import BuilderEdit from './builder-states/BuilderEdit.svelte';
	import BuilderHistory from './builder-states/BuilderHistory.svelte';
	import BuilderDebug from './builder-states/BuilderDebug.svelte';
	import DragonShareModal, { openShareDialog } from './DragonShareModal.svelte';
	import DragonControlButtons from './DragonControlButtons.svelte';
	import DragonDebugButtons from './DragonDebugButtons.svelte';

	// Builder State Management
	function transition(): void {
		currentDragonConfig.transition();
		if ($nextBuilderState !== undefined) {
			$currentBuilderState = $nextBuilderState;
			$nextBuilderState = undefined;
		}
	}

	// Click Handling
	function handleShareClick() {
		openShareDialog();
	}

	function handleControlClick(event: { detail: { buttonText: string } }): void {
		if (event.detail.buttonText === 'SHARE') {
			handleShareClick();
		} else {
			console.log(`Unhandled buttonText of ${event.detail.buttonText}`);
		}
	}

	const debugEnabled: boolean = false && dev;

	function handleDebugClick(event: { detail: { debugText: string } }): void {
		if (debugEnabled) {
			const inputState = stringToBuilderState(event.detail.debugText);
			if (inputState !== undefined) {
				$nextBuilderState = inputState;
			} else if (event.detail.debugText === 'SHARE') {
				handleShareClick();
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
</script>

<div class="flex flex-col items-center">
	<DragonContainer config={$currentDragonConfig}>
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

	<DragonShareModal config={$currentDragonConfig} />

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
