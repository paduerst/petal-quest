<script lang="ts">
	import DragonContainer from './DragonContainer.svelte';
	import DragonLoadingAnimation from './DragonLoadingAnimation.svelte';
	import DragonDebugButtons from './DragonDebugButtons.svelte';

	const DragonStates = ['LOADING', 'WELCOME', 'DISPLAY', 'EDIT'] as const;
	type DragonState = (typeof DragonStates)[number];
	let currentState: DragonState = 'LOADING';

	const debugEnabled: boolean = true;
	function handleDebugClick(event: { detail: { debugText: string } }): void {
		console.log(event.detail.debugText);
		const inputState = DragonStates.find((validState) => validState === event.detail.debugText);
		if (inputState) {
			currentState = inputState;
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
