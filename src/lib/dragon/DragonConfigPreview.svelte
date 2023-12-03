<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { page } from '$app/stores';
	import { RGBToRGBA } from '.';
	import type { DragonConfig } from './dragon-config';
	import { currentDragonConfig, nextBuilderState } from './builder-states';

	const dispatch = createEventDispatcher<{ clickDelete: DragonConfig }>();

	export let config: DragonConfig;
	export let showDeleteButton: boolean = true;
</script>

<div class="daisy-card daisy-card-compact w-full bg-white border border-black">
	<div
		class="daisy-card-body rounded-[inherit]"
		style="background: {RGBToRGBA(config.theme, 0.35)};"
	>
		<h2 class="daisy-card-title">{config.title}</h2>
		<p>{config.toString()}</p>
		<div class="daisy-card-actions justify-end">
			{#if showDeleteButton}
				<button
					class="daisy-btn daisy-btn-outline hover:daisy-btn-error"
					on:click={() => {
						dispatch('clickDelete', config);
					}}
				>
					Delete Dragon
				</button>
			{/if}
			<button
				class="daisy-btn daisy-btn-neutral text-white"
				on:click={() => {
					if (`?${config.toString()}` === $page.url.search) {
						// no change is being made, so let's just go to DISPLAY
						$nextBuilderState = 'DISPLAY';
					} else {
						$currentDragonConfig = config;
					}
				}}
			>
				Rebuild Dragon
			</button>
		</div>
	</div>
</div>
