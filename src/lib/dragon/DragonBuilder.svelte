<script lang="ts">
	import { dev } from '$app/environment';
	import { fade } from 'svelte/transition';

	import type { DragonConfig } from '.';
	import { type BuilderState, stringToBuilderState } from './builder-states';

	import DragonContainer from './DragonContainer.svelte';
	import BuilderLoading from './builder-states/BuilderLoading.svelte';
	import BuilderWelcome from './builder-states/BuilderWelcome.svelte';
	import BuilderDisplay from './builder-states/BuilderDisplay.svelte';
	import BuilderEdit from './builder-states/BuilderEdit.svelte';
	import BuilderDebug from './builder-states/BuilderDebug.svelte';
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
		if (nextState === undefined) {
			return; // no transition to finish
		}
		currentState = nextState;
		nextState = undefined;
	}

	function handleShareClick() {
		console.log('You pressed the SHARE button!');
		// TODO
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

	let currentDragonConfig: DragonConfig | undefined = undefined;
	$: if (currentState === 'LOADING' || currentState === 'WELCOME') {
		currentDragonConfig = undefined;
	} else {
		// TODO: Replace this placeholder config.
		currentDragonConfig = {
			age: 'wyrmling',
			color: 'green'
		};
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
				<BuilderWelcome />
			</div>
		{:else if currentState === 'DISPLAY' && nextState === undefined}
			<div transition:fade on:outroend={finishStateTransition}>
				<BuilderDisplay />
			</div>
		{:else if currentState === 'EDIT' && nextState === undefined}
			<div transition:fade on:outroend={finishStateTransition}>
				<BuilderEdit />
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

	{#if currentState === 'DISPLAY'}
		<div class="w-fit">
			<DragonControlButtons on:click={handleControlClick} />
		</div>
	{/if}

	{#if debugEnabled}
		<div class="w-fit">
			<DragonDebugButtons on:click={handleDebugClick} />
		</div>
	{/if}
</div>
