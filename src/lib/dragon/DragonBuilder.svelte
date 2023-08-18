<script lang="ts">
	import { dev } from '$app/environment';

	import { type State, toState } from '.';

	import DragonContainer from './DragonContainer.svelte';
	import DragonLoadingAnimation from './DragonLoadingAnimation.svelte';
	import DragonControlButtons from './DragonControlButtons.svelte';
	import DragonDebugButtons from './DragonDebugButtons.svelte';

	let currentState: State = 'LOADING';

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
			const inputState = toState(event.detail.debugText);
			if (inputState) {
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
</script>

<DragonContainer>
	{#if currentState === 'LOADING'}
		<DragonLoadingAnimation />
	{:else}
		<p>The currentState of {currentState} is unhandled right now!</p>
	{/if}
</DragonContainer>

{#if currentState !== 'LOADING' && currentState !== 'WELCOME'}
	<DragonControlButtons on:click={handleControlClick} />
{/if}

{#if debugEnabled}
	<DragonDebugButtons on:click={handleDebugClick} />
{/if}
