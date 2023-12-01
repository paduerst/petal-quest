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

	function handleClick() {
		spellModal.value = { name: spellName, id: spellID };
		modalStore.trigger(spellModal);
	}
</script>

<SpanButton on:click={handleClick} classes="italic underline print:no-underline"
	>{spellName}</SpanButton
>
