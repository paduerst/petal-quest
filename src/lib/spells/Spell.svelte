<script lang="ts">
	import type { AppSpell } from '.';
	import { spellNameToURL } from '.';
	import SpellCornerButtons from './SpellCornerButtons.svelte';
	import SpellHeader from './SpellHeader.svelte';
	import SpellDescription from './SpellDescription.svelte';
	import SpellFooter from './SpellFooter.svelte';

	export let spell: AppSpell;

	export let showButtons: boolean = false;

	let spellURL = spellNameToURL(spell);
</script>

<div class="card text-token text-left relative">
	{#if showButtons}
		<SpellCornerButtons {spellURL} on:click />
	{/if}

	<div class="card-header rounded-t-[--theme-rounded-container]">
		<SpellHeader {spell} />
	</div>

	<div class="p-4">
		<SpellDescription {spell} />
	</div>

	<SpellFooter {spell} />
</div>
