<script lang="ts">
	import { currentDragonConfig, dragonBuilderHistory } from '.';
	import type { DragonConfig } from '..';
	import DragonConfigPreview from '../DragonConfigPreview.svelte';

	function onClickDelete(event: { detail: DragonConfig }) {
		dragonBuilderHistory.remove(event.detail);
		if ($dragonBuilderHistory.length === 0) {
			$currentDragonConfig = undefined;
		}
	}
</script>

<p class="font-bold text-xl">Builder History</p>

<div class="flex flex-col items-center">
	{#if $dragonBuilderHistory.length > 0}
		<button
			class="daisy-btn daisy-btn-neutral m-2"
			on:click={() => {
				$currentDragonConfig = undefined;
			}}
		>
			Return to Builder Welcome
		</button>
		{#each $dragonBuilderHistory as config}
			<DragonConfigPreview {config} on:clickDelete={onClickDelete} />
		{/each}
		<button
			class="daisy-btn daisy-btn-outline hover:daisy-btn-error m-2"
			on:click={() => {
				dragonBuilderHistory.clear();
				$currentDragonConfig = undefined;
			}}
		>
			Clear History
		</button>
	{:else}
		<div>
			<p>The Builder History is empty.</p>
			<button
				class="daisy-btn daisy-btn-neutral m-2"
				on:click={() => {
					$currentDragonConfig = undefined;
				}}
			>
				Return to Builder Welcome
			</button>
		</div>
	{/if}
</div>
