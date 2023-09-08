<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { type DragonConfig, RGBToRGBA } from '.';
	import { currentDragonConfig } from './builder-states';

	const dispatch = createEventDispatcher<{ clickDelete: DragonConfig }>();

	export let config: DragonConfig;
</script>

<div
	class="daisy-card daisy-card-compact w-full shadow-xl"
	style="background: {RGBToRGBA(config.getTheme(), 0.1)};"
>
	<div class="daisy-card-body">
		<h2 class="daisy-card-title">{config.getTitle()}</h2>
		<p>{config.toString()}</p>
		<div class="daisy-card-actions justify-end">
			<button
				class="daisy-btn daisy-btn-outline hover:daisy-btn-error"
				on:click={() => {
					dispatch('clickDelete', config);
				}}
			>
				Delete Dragon
			</button>
			<button
				class="daisy-btn daisy-btn-neutral text-white"
				on:click={() => {
					$currentDragonConfig = config;
				}}
			>
				Rebuild Dragon
			</button>
		</div>
	</div>
</div>
