<script lang="ts">
	import { onDestroy } from 'svelte';

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

	// Stores
	import { getModalStore } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();

	let abbrInfo: {
		abbreviation: string;
		definition: string;
		onDestroyFocusElement?: HTMLElement;
	} = $modalStore[0].value;

	onDestroy(() => {
		if (abbrInfo.onDestroyFocusElement !== undefined) {
			abbrInfo.onDestroyFocusElement.focus();
		}
	});
</script>

{#if $modalStore[0]}
	<div class="card p-4 w-modal shadow-xl space-y-4 overflow-x-clip">
		<header class="text-2xl font-bold">Abbreviation: {abbrInfo.abbreviation}</header>
		<div>Definition: {abbrInfo.definition}</div>
		<footer class="modal-footer {parent.regionFooter}">
			<button class="btn {parent.buttonNeutral}" on:click={parent.onClose}> Close </button>
		</footer>
	</div>
{/if}
