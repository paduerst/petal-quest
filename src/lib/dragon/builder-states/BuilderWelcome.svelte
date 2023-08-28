<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import { DragonConfig, AGES, COLORS } from '..';

	const dispatch = createEventDispatcher<{ newDragonConfig: DragonConfig }>();

	function dispatchDragonConfig(newDragonConfig: DragonConfig) {
		dispatch('newDragonConfig', newDragonConfig);
	}

	let newConfig: DragonConfig = new DragonConfig();

	function buildDragon() {
		dispatchDragonConfig(newConfig);
	}
</script>

<p>This is the Welcome page.</p>

<div class="flex flex-col items-center">
	<select bind:value={newConfig.age} class="m-1">
		{#each AGES as age}
			<option value={age}>{age}</option>
		{/each}
	</select>

	<select bind:value={newConfig.color} class="m-1">
		{#each COLORS as color}
			<option value={color}>{color}</option>
		{/each}
	</select>

	<button class="btn variant-filled-surface m-1" on:click={buildDragon}>Build the dragon!</button>
</div>
