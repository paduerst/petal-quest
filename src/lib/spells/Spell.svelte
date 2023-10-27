<script lang="ts">
	import type { AppSpell } from '.';
	import { spellNameToURL } from '.';
	import SpellHeader from './SpellHeader.svelte';
	import SpellDescription from './SpellDescription.svelte';
	import SpellFooter from './SpellFooter.svelte';

	export let spell: AppSpell;

	export let showButtons: boolean = false;

	let spellURL = spellNameToURL(spell);
</script>

<div class="card text-token text-left relative">
	{#if showButtons}
		{#if spellURL.length > 0}
			<button on:click class="btn btn-icon-base variant-ghost-error m-2 float-right">✕</button>
		{/if}
		<a href={spellURL} target="_blank" class="p-2 aspect-square m-2 float-right">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="27"
				height="27"
				fill="currentColor"
				class="bi bi-box-arrow-up-right"
				viewBox="0 0 16 16"
			>
				<path
					fill-rule="evenodd"
					d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
				/>
				<path
					fill-rule="evenodd"
					d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
				/>
			</svg></a
		>
	{/if}

	<div class="card-header rounded-t-[--theme-rounded-container]">
		<SpellHeader {spell} />
	</div>

	<div class="p-4">
		<SpellDescription {spell} />
	</div>

	<SpellFooter {spell} />
</div>
