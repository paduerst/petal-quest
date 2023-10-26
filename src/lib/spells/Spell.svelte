<script lang="ts">
	import type { AppSpell } from '.';
	import SpellHeader from './SpellHeader.svelte';
	import SpellDescription from './SpellDescription.svelte';
	import SpellFooter from './SpellFooter.svelte';

	export let spell: AppSpell;

	export let showButton: boolean = false;
</script>

<div class="card text-token text-left relative">
	{#if showButton}
		<button on:click class="btn btn-icon-base variant-ghost-error m-2 float-right">✕</button>
	{/if}

	<div class="card-header rounded-t-[--theme-rounded-container]">
		<SpellHeader {spell} />
	</div>

	<div class="p-4">
		<SpellDescription {spell} />
	</div>

	<SpellFooter {spell} />
</div>
