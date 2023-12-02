<script lang="ts">
	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';

	import type { AbbrModalValue } from '$lib/modals';

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
		const valueForAbbrModal: AbbrModalValue = {
			abbreviation,
			definition,
			onDestroyFocusElement: thisElement
		};
		modalConfig.value = valueForAbbrModal;
		modalStore.trigger(modalConfig);
	}
</script>

<SpanButton on:click={handleClick} bind:thisElement>{abbreviation}</SpanButton>
