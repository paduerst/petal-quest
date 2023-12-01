<script lang="ts">
	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';

	import SpanButton from '$lib/SpanButton.svelte';

	const modalStore = getModalStore();
	const modalConfig: ModalSettings = {
		type: 'component',
		component: 'abbrModal'
	};

	export let abbreviation: string;
	export let definition: string;

	let thisElement: HTMLElement | undefined;

	function handleClick() {
		modalConfig.value = { abbreviation, definition, onDestroyFocusElement: thisElement };
		modalStore.trigger(modalConfig);
	}
</script>

<SpanButton on:click={handleClick} bind:thisElement>{abbreviation}</SpanButton>
