<script lang="ts">
	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';

	import SpanButton from '$lib/SpanButton.svelte';
	import { spellNameToID } from '.';

	const modalStore = getModalStore();
	const spellModal: ModalSettings = {
		type: 'component',
		component: 'spellModal'
	};

	export let spellName: string;

	let spellID = spellNameToID(spellName);
	let thisElement: HTMLElement | undefined;

	function handleClick() {
		spellModal.value = { name: spellName, id: spellID, onDestroyFocusElement: thisElement };
		modalStore.trigger(spellModal);
	}
</script>

<SpanButton on:click={handleClick} bind:thisElement classes="italic underline print:no-underline"
	>{spellName}</SpanButton
>
