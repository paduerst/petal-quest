<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { onMount } from 'svelte';

	import { DragonConfig, COLORS, AGES } from '..';

	export let currentDragonConfig: DragonConfig | undefined = undefined;

	const dispatch = createEventDispatcher<{ newDragonConfig: DragonConfig; resetDragon: null }>();

	function dispatchDragonConfig(newDragonConfig: DragonConfig) {
		dispatch('newDragonConfig', newDragonConfig);
	}

	let editedConfig: DragonConfig = new DragonConfig();
	onMount(() => {
		if (currentDragonConfig !== undefined) {
			editedConfig = currentDragonConfig;
		}
	});
	function updateDragon() {
		dispatchDragonConfig(editedConfig);
	}
</script>

<div class="flex flex-col items-center">
	<select bind:value={editedConfig.age} class="m-1">
		{#each AGES as age}
			<option value={age}>{age}</option>
		{/each}
	</select>

	<select bind:value={editedConfig.color} class="m-1">
		{#each COLORS as color}
			<option value={color}>{color}</option>
		{/each}
	</select>

	<button class="btn variant-filled-surface m-1" on:click={updateDragon}>Update the dragon!</button>

	<button
		class="btn variant-filled-surface m-1"
		on:click={() => {
			dispatch('resetDragon');
		}}
	>
		Reset the dragon.
	</button>
</div>
