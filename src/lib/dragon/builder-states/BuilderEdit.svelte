<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { onMount } from 'svelte';

	import { DragonConfig, COLORS, COLORS_UPPER, AGES, AGES_UPPER } from '..';
	import { currentDragonConfig } from '.';

	const dispatch = createEventDispatcher<{ newDragonConfig: DragonConfig; resetDragon: null }>();

	function dispatchDragonConfig(newDragonConfig: DragonConfig) {
		dispatch('newDragonConfig', newDragonConfig);
	}

	let editedConfig: DragonConfig = new DragonConfig();
	onMount(() => {
		if ($currentDragonConfig !== undefined) {
			editedConfig = $currentDragonConfig;
		}
	});
	function updateDragon() {
		editedConfig.cleanup();
		dispatchDragonConfig(editedConfig);
	}
</script>

<div class="flex flex-col items-center">
	<div class="daisy-form-control w-full max-w-sm m-1">
		<label class="daisy-label" for="age">
			<span class="daisy-label-text">Age</span>
		</label>
		<select
			bind:value={editedConfig.age}
			class="daisy-select daisy-select-bordered bg-white"
			name="age"
		>
			{#each AGES as age, index}
				<option value={age}>{AGES_UPPER[index]}</option>
			{/each}
		</select>
	</div>

	<div class="daisy-form-control w-full max-w-sm m-1">
		<label class="daisy-label" for="color">
			<span class="daisy-label-text">Color</span>
		</label>
		<select
			bind:value={editedConfig.color}
			class="daisy-select daisy-select-bordered bg-white"
			name="color"
		>
			{#each COLORS as color, index}
				<option value={color}>{COLORS_UPPER[index]}</option>
			{/each}
		</select>
	</div>

	<div class="daisy-form-control w-full max-w-sm m-1">
		<label class="daisy-label" for="name">
			<span class="daisy-label-text">Name</span>
		</label>
		<input
			type="text"
			bind:value={editedConfig.name}
			placeholder={'Referred to as "the dragon" by default'}
			class="daisy-input daisy-input-bordered bg-white"
			name="name"
			data-1p-ignore
		/>
	</div>

	<div class="daisy-form-control w-full max-w-sm m-1">
		<label class="daisy-label" for="alignment">
			<span class="daisy-label-text">Alignment</span>
		</label>
		<input
			type="text"
			bind:value={editedConfig.alignment}
			placeholder="Defaults to typical alignment for this color"
			class="daisy-input daisy-input-bordered bg-white"
			name="alignment"
			data-1p-ignore
		/>
	</div>

	<button class="daisy-btn daisy-btn-neutral m-2 mt-6" on:click={updateDragon}>
		{$currentDragonConfig === undefined ? 'Build' : 'Update'} Dragon
	</button>
</div>
