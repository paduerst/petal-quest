<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import { type DragonConfig, COLORS, AGES } from '..';

	export let currentDragonConfig: DragonConfig | undefined = undefined;

	const dispatch = createEventDispatcher<{ newDragonConfig: DragonConfig }>();

	function dispatchDragonConfig(newDragonConfig: DragonConfig) {
		dispatch('newDragonConfig', newDragonConfig);
	}

	let editedConfig: DragonConfig;
	$: if (currentDragonConfig !== undefined) {
		editedConfig = currentDragonConfig;
	}
	function updateDragon() {
		dispatchDragonConfig(editedConfig);
	}
</script>

<select bind:value={editedConfig.age}>
	{#each AGES as age}
		<option value={age}>{age}</option>
	{/each}
</select>

<select bind:value={editedConfig.color}>
	{#each COLORS as color}
		<option value={color}>{color}</option>
	{/each}
</select>

<button class="btn variant-filled-surface" on:click={updateDragon}>Update the dragon!</button>
