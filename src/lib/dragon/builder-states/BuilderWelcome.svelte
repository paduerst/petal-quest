<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import { currentDragonConfig, dragonBuilderHistory } from '.';
	import { DragonConfig, AGES, AGES_UPPER, COLORS, COLORS_UPPER } from '..';

	const dispatch = createEventDispatcher<{ click: { buttonText: string } }>();

	let newConfig: DragonConfig = new DragonConfig();
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

	<button
		class="daisy-btn daisy-btn-neutral m-2 mt-6"
		on:click={() => {
			$currentDragonConfig = newConfig;
		}}
	>
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

	{#if $dragonBuilderHistory.length > 0}
		<p class="font-bold text-lg mt-6">Build from History</p>
		<button
			class="daisy-btn daisy-btn-neutral m-2"
			on:click={() => {
				$currentDragonConfig = $dragonBuilderHistory[0];
			}}
		>
			Rebuild Last Dragon
		</button>
		<button
			class="daisy-btn daisy-btn-outline m-2"
			on:click={() => {
				dispatch('click', {
					buttonText: 'HISTORY'
				});
			}}
		>
			View Builder History
		</button>
	{/if}
</div>
