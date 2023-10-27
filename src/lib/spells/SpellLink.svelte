<script lang="ts">
	import { spellNameToID } from '.';

	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();
	const spellModal: ModalSettings = {
		type: 'component',
		component: 'spellModal'
	};

	export let spellName: string;

	let spellID = spellNameToID(spellName);

	function handleClick() {
		spellModal.value = spellID;
		modalStore.trigger(spellModal);
	}
</script>

<button on:click={handleClick} class="italic underline">{spellName}</button>
