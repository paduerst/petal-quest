<script lang="ts">
	import { dev } from '$app/environment';
	import { goto, afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { fade, type FadeParams } from 'svelte/transition';

	import { DragonConfig } from '.';
	import { type BuilderState, stringToBuilderState } from './builder-states';
	import { dragonBuilderHistory } from './builder-history';

	import DragonContainer from './DragonContainer.svelte';
	import BuilderLoading from './builder-states/BuilderLoading.svelte';
	import BuilderWelcome from './builder-states/BuilderWelcome.svelte';
	import BuilderDisplay from './builder-states/BuilderDisplay.svelte';
	import BuilderEdit from './builder-states/BuilderEdit.svelte';
	import BuilderDebug from './builder-states/BuilderDebug.svelte';
	import DragonShareModal, { openShareDialog } from './DragonShareModal.svelte';
	import DragonControlButtons from './DragonControlButtons.svelte';
	import DragonDebugButtons from './DragonDebugButtons.svelte';

	// Builder State Management
	let currentState: BuilderState = 'LOADING';
	let nextState: BuilderState | undefined = undefined;

	const fadeConfig: FadeParams = {
		duration: 200
	};

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

	// Dragon Config Management
	let currentDragonConfig: DragonConfig | undefined = undefined;
	let pastConfigStrings: string[] = [];

	dragonBuilderHistory.subscribe((value) => {
		pastConfigStrings = value;
	});

	function setCurrentDragonConfig(currentDragonConfigIn: DragonConfig | undefined): void {
		currentDragonConfig = currentDragonConfigIn;

		if (currentDragonConfig !== undefined) {
			const currentConfigString = currentDragonConfig.toString();

			// check to see if this config is the latest config in builder history
			const configIndexInHistory = pastConfigStrings.findIndex((configString: string) => {
				return configString === currentConfigString;
			});
			if (configIndexInHistory !== 0) {
				if (configIndexInHistory > 0) {
					pastConfigStrings.splice(configIndexInHistory, 1);
				}
				pastConfigStrings.unshift(currentConfigString);
				dragonBuilderHistory.set(pastConfigStrings);
			}

			// update the current URL search params to match this config
			const configSearchString = `?${currentConfigString}`;
			if (configSearchString !== $page.url.search) {
				goto(configSearchString);
			}
		}
	}

	function onNewDragonConfig(event: { detail: DragonConfig }) {
		setCurrentDragonConfig(event.detail);
		setNextState('DISPLAY');
	}

	function onResetDragon() {
		setNextState('WELCOME');
		setCurrentDragonConfig(undefined);
	}

	// Initialization
	afterNavigate(() => {
		const URLDragonConfig = new DragonConfig();
		if (URLDragonConfig.fromURLSearchParams($page.url.searchParams)) {
			setCurrentDragonConfig(URLDragonConfig);
			setNextState('DISPLAY');
		} else {
			setNextState('WELCOME');
			setCurrentDragonConfig(undefined);
		}
	});
</script>

<div class="flex flex-col items-center">
	<DragonContainer config={currentDragonConfig}>
		{#if currentState === 'LOADING' && nextState === undefined}
			<div transition:fade={fadeConfig} on:outroend={finishStateTransition}>
				<BuilderLoading />
			</div>
		{:else if currentState === 'WELCOME' && nextState === undefined}
			<div transition:fade={fadeConfig} on:outroend={finishStateTransition}>
				<BuilderWelcome on:newDragonConfig={onNewDragonConfig} on:click={handleControlClick} />
			</div>
		{:else if currentState === 'DISPLAY' && nextState === undefined}
			<div transition:fade={fadeConfig} on:outroend={finishStateTransition}>
				<BuilderDisplay {currentDragonConfig} />
			</div>
		{:else if currentState === 'EDIT' && nextState === undefined}
			<div transition:fade={fadeConfig} on:outroend={finishStateTransition}>
				<BuilderEdit
					{currentDragonConfig}
					on:newDragonConfig={onNewDragonConfig}
					on:resetDragon={onResetDragon}
				/>
			</div>
		{:else if currentState === 'DEBUG' && nextState === undefined}
			<div transition:fade={fadeConfig} on:outroend={finishStateTransition}>
				<BuilderDebug {currentDragonConfig} />
			</div>
		{:else if nextState !== undefined}
			<!-- We are transitioning. Keep it empty. -->
		{:else}
			<div transition:fade={fadeConfig} on:outroend={finishStateTransition}>
				<p>The currentState of {currentState} is unhandled right now!</p>
			</div>
		{/if}
	</DragonContainer>

	<DragonShareModal {currentDragonConfig} />

	{#if currentState === 'DISPLAY' && nextState === undefined}
		<div transition:fade={fadeConfig} class="w-fit">
			<DragonControlButtons on:click={handleControlClick} on:resetDragon={onResetDragon} />
		</div>
	{/if}

	{#if debugEnabled}
		<div class="w-fit">
			<DragonDebugButtons on:click={handleDebugClick} />
		</div>
	{/if}
</div>
