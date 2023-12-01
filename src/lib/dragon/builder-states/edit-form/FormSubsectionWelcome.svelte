<script lang="ts">
	import { COLORS, COLORS_UPPER, HIDDEN_COLORS, AGES, AGES_UPPER, HIDDEN_AGES } from '$lib/dragon';
	import type { DragonConfig } from '$lib/dragon/dragon-config';

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
		{#each AGES as age, index}
			<option value={age} hidden={HIDDEN_AGES.includes(age)}>{AGES_UPPER[index]}</option>
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
		{#each COLORS as color, index}
			<option value={color} hidden={HIDDEN_COLORS.includes(color)}>{COLORS_UPPER[index]}</option>
		{/each}
	</select>
</div>
