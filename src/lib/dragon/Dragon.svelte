<script lang="ts">
	import DragonContainer from './DragonContainer.svelte';
	import DragonLoadingAnimation from './DragonLoadingAnimation.svelte';
	import DragonDebugButtons from './DragonDebugButtons.svelte';

	const DragonStates = ['LOADING', 'WELCOME', 'DISPLAY', 'EDIT'] as const;
	type DragonState = (typeof DragonStates)[number];
	let currentState: DragonState = 'LOADING';

	const debugEnabled: boolean = true;
	function handleDebugClick(event: { detail: { debugText: string } }): void {
		const inputState = DragonStates.find((validState) => validState === event.detail.debugText);
		if (inputState) {
			currentState = inputState;
		} else if (event.detail.debugText === 'COPY') {
			console.log('You pressed the COPY button!');
			// TODO
		} else {
			console.log(`Unhandled debugText of ${event.detail.debugText}`);
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

{#if debugEnabled}
	<DragonDebugButtons on:click={handleDebugClick} />
{/if}
