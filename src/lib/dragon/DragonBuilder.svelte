<script lang="ts">
	import { dev } from '$app/environment';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';

	import { DragonConfig } from '.';
	import {
		type BuilderState,
		stringToBuilderState,
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
	let currentState: BuilderState = 'LOADING';
	let nextState: BuilderState | undefined = undefined;

	function setNextState(nextStateIn: BuilderState): void {
		if (nextStateIn !== currentState) {
			nextState = nextStateIn;
		}
	}

	function finishStateTransition(): void {
		if (nextState !== undefined) {
			currentState = nextState;
			nextState = undefined;
		}
	}

	// Click Handling
	function handleShareClick() {
		openShareDialog();
	}

	function handleControlClick(event: { detail: { buttonText: string } }): void {
		if (event.detail.buttonText === 'EDIT') {
			setNextState('EDIT');
		} else if (event.detail.buttonText === 'SHARE') {
			handleShareClick();
		} else {
			console.log(`Unhandled buttonText of ${event.detail.buttonText}`);
		}
	}

	const debugEnabled: boolean = true && dev;

	function handleDebugClick(event: { detail: { debugText: string } }): void {
		if (debugEnabled) {
			const inputState = stringToBuilderState(event.detail.debugText);
			if (inputState !== undefined) {
				setNextState(inputState);
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
			setNextState('DISPLAY');
		} else {
			setNextState('WELCOME');
			currentDragonConfig.set(undefined, true);
		}
	});
</script>

<div class="flex flex-col items-center">
	<DragonContainer config={$currentDragonConfig}>
		{#if currentState === 'LOADING' && nextState === undefined}
			<div transition:fade={builderFadeParams} on:outroend={finishStateTransition}>
				<BuilderLoading />
			</div>
		{:else if currentState === 'WELCOME' && nextState === undefined}
			<div transition:fade={builderFadeParams} on:outroend={finishStateTransition}>
				<BuilderWelcome on:click={handleControlClick} />
			</div>
		{:else if currentState === 'DISPLAY' && nextState === undefined}
			<div transition:fade={builderFadeParams} on:outroend={finishStateTransition}>
				<BuilderDisplay />
			</div>
		{:else if currentState === 'EDIT' && nextState === undefined}
			<div transition:fade={builderFadeParams} on:outroend={finishStateTransition}>
				<BuilderEdit />
			</div>
		{:else if currentState === 'HISTORY' && nextState === undefined}
			<div transition:fade={builderFadeParams} on:outroend={finishStateTransition}>
				<BuilderHistory />
			</div>
		{:else if currentState === 'DEBUG' && nextState === undefined}
			<div transition:fade={builderFadeParams} on:outroend={finishStateTransition}>
				<BuilderDebug />
			</div>
		{:else if nextState !== undefined}
			<!-- We are transitioning. Keep it empty. -->
		{:else}
			<div transition:fade={builderFadeParams} on:outroend={finishStateTransition}>
				<p>The currentState of {currentState} is unhandled right now!</p>
			</div>
		{/if}
	</DragonContainer>

	<DragonShareModal config={$currentDragonConfig} />

	{#if currentState === 'DISPLAY' && nextState === undefined}
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
