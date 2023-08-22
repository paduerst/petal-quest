<script lang="ts">
	import { dev } from '$app/environment';

	import { type BuilderState, stringToBuilderState, DragonConfig } from '.';

	import DragonContainer from './DragonContainer.svelte';
	import DragonLoadingAnimation from './DragonLoadingAnimation.svelte';
	import DragonWelcomeContents from './DragonWelcomeContents.svelte';
	import DragonDebugContents from './DragonDebugContents.svelte';
	import DragonControlButtons from './DragonControlButtons.svelte';
	import DragonDebugButtons from './DragonDebugButtons.svelte';

	let currentState: BuilderState = 'LOADING';

	function handleShareClick() {
		console.log('You pressed the SHARE button!');
		// TODO
	}

	function handleControlClick(event: { detail: { buttonText: string } }): void {
		if (event.detail.buttonText === 'EDIT') {
			currentState = 'EDIT';
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
				currentState = inputState;
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
		{#if currentState === 'LOADING'}
			<DragonLoadingAnimation />
		{:else if currentState === 'WELCOME'}
			<DragonWelcomeContents />
		{:else if currentState === 'DEBUG'}
			<DragonDebugContents {currentDragonConfig} />
		{:else}
			<p>The currentState of {currentState} is unhandled right now!</p>
		{/if}
	</DragonContainer>

	{#if currentState !== 'LOADING' && currentState !== 'WELCOME'}
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