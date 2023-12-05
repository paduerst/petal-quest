<script lang="ts">
	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';

	import type { AppMonster } from '.';
	import type { MonsterModalValue } from '$lib/modals';

	import SpanButton from '$lib/SpanButton.svelte';

	const modalStore = getModalStore();
	const monsterModal: ModalSettings = {
		type: 'component',
		component: 'monsterModal'
	};

	export let monster: AppMonster;
	export let disabled = false;

	let thisElement: HTMLElement | undefined;

	function handleClick() {
		const valueFormonsterModal: MonsterModalValue = {
			monster: monster,
			onDestroyFocusElement: thisElement
		};
		monsterModal.value = valueFormonsterModal;
		modalStore.trigger(monsterModal);
	}
</script>

<SpanButton {disabled} on:click={handleClick} bind:thisElement>{monster}</SpanButton>
