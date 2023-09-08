<script lang="ts">
	import { flip, type FlipParams } from 'svelte/animate';
	import { currentDragonConfig, dragonBuilderHistory } from '.';
	import type { DragonConfig } from '..';
	import DragonConfigPreview from '../DragonConfigPreview.svelte';

	const historyFlipParams: FlipParams = { duration: 200 };

	function onClickDelete(event: { detail: DragonConfig }) {
		dragonBuilderHistory.remove(event.detail);
		if ($dragonBuilderHistory.length === 0) {
			$currentDragonConfig = undefined;
		}
	}
</script>

<p class="font-bold text-xl">Builder History</p>

<div class="flex flex-col items-center">
	<button
		class="daisy-btn daisy-btn-neutral m-2"
		on:click={() => {
			$currentDragonConfig = undefined;
		}}
	>
		Return to Builder Welcome
	</button>
	{#each $dragonBuilderHistory as config (config.toString())}
		<div animate:flip={historyFlipParams}>
			<DragonConfigPreview {config} on:clickDelete={onClickDelete} />
		</div>
	{/each}
	{#if $dragonBuilderHistory.length > 0}
		<button
			class="daisy-btn daisy-btn-outline hover:daisy-btn-error m-2"
			on:click={() => {
				dragonBuilderHistory.clear();
				$currentDragonConfig = undefined;
			}}
		>
			Clear History
		</button>
	{/if}
</div>
