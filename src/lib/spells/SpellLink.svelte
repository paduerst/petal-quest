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
	export let disabled = false;

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

<SpanButton {disabled} on:click={handleClick} bind:thisElement additionalClasses="italic"
	>{spellName}</SpanButton
>
