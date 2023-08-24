<script lang="ts">
	import { dev } from '$app/environment';
	import { fade } from 'svelte/transition';

	import { type BuilderState, stringToBuilderState, DragonConfig } from '.';

	import DragonContainer from './DragonContainer.svelte';
	import DragonLoadingAnimation from './DragonLoadingAnimation.svelte';
	import DragonWelcomeContents from './DragonWelcomeContents.svelte';
	import DragonDisplayContents from './DragonDisplayContents.svelte';
	import DragonEditContents from './DragonEditContents.svelte';
	import DragonDebugContents from './DragonDebugContents.svelte';
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
				<DragonLoadingAnimation />
			</div>
		{:else if currentState === 'WELCOME' && nextState === undefined}
			<div transition:fade on:outroend={finishStateTransition}>
				<DragonWelcomeContents />
			</div>
		{:else if currentState === 'DISPLAY' && nextState === undefined}
			<div transition:fade on:outroend={finishStateTransition}>
				<DragonDisplayContents />
			</div>
		{:else if currentState === 'EDIT' && nextState === undefined}
			<div transition:fade on:outroend={finishStateTransition}>
				<DragonEditContents />
			</div>
		{:else if currentState === 'DEBUG' && nextState === undefined}
			<div transition:fade on:outroend={finishStateTransition}>
				<DragonDebugContents {currentDragonConfig} />
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
