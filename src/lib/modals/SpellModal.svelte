<script lang="ts">
	// Props
	/** Exposes parent props to this component. */
	export let parent: {
		position: string;
		// ---
		background: string;
		width: string;
		height: string;
		padding: string;
		spacing: string;
		rounded: string;
		shadow: string;
		// ---
		buttonNeutral: string;
		buttonPositive: string;
		buttonTextCancel: string;
		buttonTextConfirm: string;
		buttonTextSubmit: string;
		// ---
		regionBackdrop: string;
		regionHeader: string;
		regionBody: string;
		regionFooter: string;
		// ---
		onClose: () => void;
	};

	import { onMount } from 'svelte';

	import { getModalStore } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();

	import { stringToAppSpell, spellNameToURL } from '$lib/spells';
	import { stringToDDBSpell } from '$lib/spells/ddb-spells';
	import Spell from '$lib/spells/Spell.svelte';
	import SpellCornerButtons from '$lib/spells/SpellCornerButtons.svelte';

	let spellInfo: { name: string; id: string } = $modalStore[0].value;
	let asAppSpell = stringToAppSpell(spellInfo.id);
	let asDDBSpell = stringToDDBSpell(spellInfo.id);
	let spellURL = spellNameToURL(spellInfo.name);

	let divElement: HTMLDivElement;
	onMount(() => {
		divElement.scrollTo(0, 0);
	});

	const baseClasses = 'card max-w-4xl shadow-xl space-y-4 max-h-[80vh] overflow-y-auto';
	let modalClasses = `${baseClasses} ${asAppSpell !== undefined ? 'w-11/12' : ''}`;
</script>

{#if $modalStore[0]}
	<div class={modalClasses} bind:this={divElement}>
		{#if asAppSpell !== undefined}
			<Spell spell={asAppSpell} showButtons on:click={parent.onClose} />
		{:else if spellURL.length > 0}
			<div class="card text-token text-left relative">
				<SpellCornerButtons {spellURL} on:click={parent.onClose} />
				<div class="p-4">
					<h1 class="spell-name mb-2">{spellInfo.name}</h1>
					{#if asDDBSpell !== undefined}
						<p>This spell's description is on D&D Beyond:</p>
					{:else}
						<p>
							This spell isn't on this website, but this browser's local storage has the following
							URL for it:
						</p>
					{/if}
					<p><a href={spellURL} target="_blank">{spellURL}</a></p>
				</div>
			</div>
		{:else}
			<div class="card text-token text-left relative">
				<SpellCornerButtons on:click={parent.onClose} />
				<div class="p-4">
					<h1 class="spell-name mb-2">{spellInfo.name}</h1>
					<p>This spell is not recognized.</p>
				</div>
			</div>
		{/if}
	</div>
{/if}
