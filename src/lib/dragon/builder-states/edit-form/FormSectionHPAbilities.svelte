<script lang="ts">
	import { type DragonConfig, maxHPMin, maxHPMax } from '$lib/dragon';

	export let config: DragonConfig;
</script>

<div class="daisy-form-control w-full max-w-sm m-1">
	<label class="daisy-label" for="maxHP">
		<span class="daisy-label-text">Maximum Hit Points</span>
	</label>
	<input
		type="number"
		bind:value={config.maxHP}
		placeholder={'Defaults to expected value from Hit Dice'}
		class="daisy-input daisy-input-bordered bg-white"
		name="maxHP"
		id="maxHP"
		data-1p-ignore
		min={maxHPMin}
		max={maxHPMax}
		step={1}
	/>
</div>
