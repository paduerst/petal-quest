<script lang="ts">
	import { dev } from '$app/environment';

	import { COLORS, HIDDEN_COLORS, AGES, HIDDEN_AGES } from '$lib/dragon';
	import type { DragonConfig } from '$lib/dragon/dragon-config';
	import { capitalizeFirstLetter } from '$lib/text-utils';

	export let config: DragonConfig;
	export let firstElement: HTMLElement | undefined = undefined;
</script>

<div class="daisy-form-control w-full max-w-sm m-1">
	<label class="daisy-label" for="age">
		<span class="daisy-label-text">Age</span>
	</label>
	<select
		bind:this={firstElement}
		bind:value={config.age}
		class="daisy-select daisy-select-bordered bg-white"
		name="age"
		id="age"
	>
		{#each AGES as age}
			<option value={age} hidden={HIDDEN_AGES.includes(age) && !dev}
				>{capitalizeFirstLetter(age)}{HIDDEN_AGES.includes(age) ? ' (In Development)' : ''}</option
			>
		{/each}
	</select>
</div>

<div class="daisy-form-control w-full max-w-sm m-1">
	<label class="daisy-label" for="color">
		<span class="daisy-label-text">Color</span>
	</label>
	<select
		bind:value={config.color}
		class="daisy-select daisy-select-bordered bg-white"
		name="color"
		id="color"
	>
		{#each COLORS as color}
			<option value={color} hidden={HIDDEN_COLORS.includes(color) && !dev}
				>{capitalizeFirstLetter(color)}{HIDDEN_COLORS.includes(color)
					? ' (In Development)'
					: ''}</option
			>
		{/each}
	</select>
</div>
