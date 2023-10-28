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
		spellModal.value = { name: spellName, id: spellID };
		modalStore.trigger(spellModal);
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === ' ') {
			handleClick();
		}
	}

	function handleKeyup(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			handleClick();
		}
	}
</script>

<span
	role="button"
	tabindex="0"
	on:click={handleClick}
	on:keydown={handleKeydown}
	on:keyup={handleKeyup}
	class="italic underline">{spellName}</span
>
