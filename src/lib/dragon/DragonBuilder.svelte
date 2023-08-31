<script lang="ts">
	import { dev } from '$app/environment';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	import type { DragonConfig } from '.';
	import { type BuilderState, stringToBuilderState } from './builder-states';

	import DragonContainer from './DragonContainer.svelte';
	import BuilderLoading from './builder-states/BuilderLoading.svelte';
	import BuilderWelcome from './builder-states/BuilderWelcome.svelte';
	import BuilderDisplay from './builder-states/BuilderDisplay.svelte';
	import BuilderEdit from './builder-states/BuilderEdit.svelte';
	import BuilderDebug from './builder-states/BuilderDebug.svelte';
	import DragonShareModal, { openShareDialog } from './DragonShareModal.svelte';
	import DragonControlButtons from './DragonControlButtons.svelte';
	import DragonDebugButtons from './DragonDebugButtons.svelte';

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

	const debugEnabled: boolean = false && dev;

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

	let currentDragonConfig: DragonConfig | undefined = undefined;

	onMount(() => {
		setNextState('WELCOME');
	});

	function onNewDragonConfig(event: { detail: DragonConfig }) {
		currentDragonConfig = event.detail;
		setNextState('DISPLAY');
	}

	function onResetDragon() {
		setNextState('WELCOME');
		currentDragonConfig = undefined;
	}
</script>

<div class="flex flex-col items-center">
	<DragonContainer config={currentDragonConfig}>
		{#if currentState === 'LOADING' && nextState === undefined}
			<div transition:fade on:outroend={finishStateTransition}>
				<BuilderLoading />
			</div>
		{:else if currentState === 'WELCOME' && nextState === undefined}
			<div transition:fade on:outroend={finishStateTransition}>
				<BuilderWelcome on:newDragonConfig={onNewDragonConfig} />
			</div>
		{:else if currentState === 'DISPLAY' && nextState === undefined}
			<div transition:fade on:outroend={finishStateTransition}>
				<BuilderDisplay {currentDragonConfig} />
			</div>
		{:else if currentState === 'EDIT' && nextState === undefined}
			<div transition:fade on:outroend={finishStateTransition}>
				<BuilderEdit
					{currentDragonConfig}
					on:newDragonConfig={onNewDragonConfig}
					on:resetDragon={onResetDragon}
				/>
			</div>
		{:else if currentState === 'DEBUG' && nextState === undefined}
			<div transition:fade on:outroend={finishStateTransition}>
				<BuilderDebug {currentDragonConfig} />
			</div>
		{:else if nextState !== undefined}
			<!-- We are transitioning. Keep it empty. -->
		{:else}
			<div transition:fade on:outroend={finishStateTransition}>
				<p>The currentState of {currentState} is unhandled right now!</p>
			</div>
		{/if}
	</DragonContainer>

	<DragonShareModal {currentDragonConfig} />

	{#if currentState === 'DISPLAY'}
		<div class="w-fit">
			<DragonControlButtons on:click={handleControlClick} on:resetDragon={onResetDragon} />
		</div>
	{/if}

	{#if debugEnabled}
		<div class="w-fit">
			<DragonDebugButtons on:click={handleDebugClick} />
		</div>
	{/if}
</div>
