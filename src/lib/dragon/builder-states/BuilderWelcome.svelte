<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import { DragonConfig, AGES, AGES_UPPER, COLORS, COLORS_UPPER } from '..';

	const dispatch = createEventDispatcher<{
		newDragonConfig: DragonConfig;
		click: { buttonText: string };
	}>();

	function dispatchDragonConfig(newDragonConfig: DragonConfig) {
		dispatch('newDragonConfig', newDragonConfig);
	}

	let newConfig: DragonConfig = new DragonConfig();

	function buildDragon() {
		dispatchDragonConfig(newConfig);
	}
</script>

<p class="font-bold text-xl">Welcome to the Prismatic Dragon Builder!</p>

<div class="flex flex-col items-center">
	<div class="daisy-form-control w-full max-w-xs m-1">
		<label class="daisy-label" for="age">
			<span class="daisy-label-text">Age</span>
		</label>
		<select
			bind:value={newConfig.age}
			class="daisy-select daisy-select-bordered bg-white"
			name="age"
		>
			{#each AGES as age, index}
				<option value={age}>{AGES_UPPER[index]}</option>
			{/each}
		</select>
	</div>

	<div class="daisy-form-control w-full max-w-xs m-1">
		<label class="daisy-label" for="color">
			<span class="daisy-label-text">Color</span>
		</label>
		<select
			bind:value={newConfig.color}
			class="daisy-select daisy-select-bordered bg-white"
			name="color"
		>
			{#each COLORS as color, index}
				<option value={color}>{COLORS_UPPER[index]}</option>
			{/each}
		</select>
	</div>

	<button class="daisy-btn daisy-btn-neutral m-2 mt-6" on:click={buildDragon}>
		Build Dragon
	</button>

	<button
		class="daisy-btn daisy-btn-outline m-2"
		on:click={() => {
			dispatch('click', {
				buttonText: 'EDIT'
			});
		}}
	>
		Advanced Options
	</button>
</div>
