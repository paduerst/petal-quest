<script lang="ts">
	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';

	import { spellNameToID } from '.';
	import type { SpellModalValue } from '$lib/modals';

	import SpanButton from '$lib/SpanButton.svelte';

	const modalStore = getModalStore();
	const spellModal: ModalSettings = {
		type: 'component',
		component: 'spellModal'
	};

	export let spellName: string;

	let spellID = spellNameToID(spellName);
	let thisElement: HTMLElement | undefined;

	function handleClick() {
		const valueForSpellModal: SpellModalValue = {
			name: spellName,
			id: spellID,
			onDestroyFocusElement: thisElement
		};
		spellModal.value = valueForSpellModal;
		modalStore.trigger(spellModal);
	}
</script>

<SpanButton on:click={handleClick} bind:thisElement classes="italic underline print:no-underline"
	>{spellName}</SpanButton
>
