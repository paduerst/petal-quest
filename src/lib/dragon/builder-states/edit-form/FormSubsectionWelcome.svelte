<script lang="ts">
	import { type DragonConfig, COLORS, COLORS_UPPER, AGES, AGES_UPPER } from '$lib/dragon';

	export let config: DragonConfig;
</script>

<div class="daisy-form-control w-full max-w-sm m-1">
	<label class="daisy-label" for="age">
		<span class="daisy-label-text">Age</span>
	</label>
	<select bind:value={config.age} class="daisy-select daisy-select-bordered bg-white" name="age">
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
		bind:value={config.color}
		class="daisy-select daisy-select-bordered bg-white"
		name="color"
	>
		{#each COLORS as color, index}
			<option value={color}>{COLORS_UPPER[index]}</option>
		{/each}
	</select>
</div>
