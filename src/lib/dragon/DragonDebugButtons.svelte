<script lang="ts">
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import { DragonConfig } from './dragon-config';
	import {
		BUILDER_STATES,
		nextBuilderState,
		dragonBuilderHistory,
		currentDragonConfig
	} from './builder-states';

	const dispatch = createEventDispatcher<{
		click: { debugText: string; clickedButton?: HTMLElement };
	}>();

	function dispatchClick(debugText: string, clickedButton?: HTMLElement) {
		dispatch('click', {
			debugText,
			clickedButton
		});
	}

	const debugConfigStrings = [
		'age=wyrmling&color=red',
		'age=adult&color=red&name=Val&alignment=Chaotic+Good',
		'age=adult&color=orange&name=Cornelia&alignment=Lawful+Neutral',
		'age=young&color=yellow&name=Fortuna&alignment=Lawful+Neutral',
		'age=adult&color=green&name=Brondelyn&alignment=Neutral+Evil',
		'age=adult&color=blue&name=Calliope&alignment=Chaotic+Evil',
		'age=ancient&color=indigo&name=Tonitra&alignment=Chaotic+Good',
		'age=ancient&color=violet&name=Imperator+Emeritus+Magna&alignment=Lawful+Evil',
		'age=wyrmling&color=blue&name=The+Dragon+with+the+Obnoxiously+Long+Name&alignment=A+Lengthy+Alignment+Description'
	];
	const debugConfigs: DragonConfig[] = [];
	for (const configString of debugConfigStrings) {
		let newConfig = new DragonConfig();
		newConfig.fromString(configString);
		debugConfigs.push(newConfig);
	}

	let shareButton: HTMLElement;
</script>

<div transition:fade class="flex flex-wrap justify-center print:hidden">
	{#each BUILDER_STATES as state}
		<button
			class="btn variant-filled-surface m-1"
			on:click={() => {
				$nextBuilderState = state;
			}}
		>
			{state}
		</button>
	{/each}
	<button
		class="btn variant-filled-surface m-1"
		bind:this={shareButton}
		on:click={() => {
			dispatchClick('SHARE', shareButton);
		}}
	>
		{'SHARE'}
	</button>
	<button
		class="btn variant-filled-surface m-1"
		on:click={() => {
			for (const debugConfig of debugConfigs) {
				dragonBuilderHistory.add(debugConfig);
			}
		}}
	>
		Fill History
	</button>
	<button
		class="btn variant-filled-surface m-1"
		on:click={() => {
			$currentDragonConfig = undefined;
		}}
	>
		Reset Dragon
	</button>
</div>
