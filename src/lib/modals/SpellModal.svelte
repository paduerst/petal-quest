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

	import { stringToAppSpell } from '$lib/spells';
	import Spell from '$lib/spells/Spell.svelte';

	let spell = stringToAppSpell($modalStore[0].value);

	let divElement: HTMLDivElement;
	onMount(() => {
		divElement.scrollTo(0, 0);
	});
</script>

{#if $modalStore[0]}
	<div
		class="card w-11/12 max-w-4xl shadow-xl space-y-4 max-h-[80vh] overflow-y-auto"
		bind:this={divElement}
	>
		{#if spell !== undefined}
			<Spell {spell} showButton on:click={parent.onClose} />
		{:else}
			<p>This ({$modalStore[0].value}) is not an app spell.</p>
		{/if}
	</div>
{/if}
