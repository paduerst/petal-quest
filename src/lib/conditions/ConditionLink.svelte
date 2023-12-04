<script lang="ts">
	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';

	import type { Condition } from '.';
	import type { ConditionModalValue } from '$lib/modals';

	import SpanButton from '$lib/SpanButton.svelte';

	const modalStore = getModalStore();
	const conditionModal: ModalSettings = {
		type: 'component',
		component: 'conditionModal'
	};

	export let condition: Condition;
	export let disabled = false;

	let thisElement: HTMLElement | undefined;

	function handleClick() {
		const valueForConditionModal: ConditionModalValue = {
			condition,
			onDestroyFocusElement: thisElement
		};
		conditionModal.value = valueForConditionModal;
		modalStore.trigger(conditionModal);
	}
</script>

<SpanButton {disabled} on:click={handleClick} bind:thisElement>{condition}</SpanButton>
