<script lang="ts">
	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();
	const abbrModal: ModalSettings = {
		type: 'component',
		component: 'abbrModal'
	};

	export let title: string;

	function handleClick() {
		abbrModal.value = title;
		modalStore.trigger(abbrModal);
	}
</script>

<button on:click={handleClick} class="underline decoration-dotted"><slot /></button>
