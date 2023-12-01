<script lang="ts">
	import { onMount } from 'svelte';

	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';

	import SpanButton from '$lib/SpanButton.svelte';

	const modalStore = getModalStore();
	const modalConfig: ModalSettings = {
		type: 'component',
		component: 'abbrModal'
	};

	export let abbreviation: string;
	export let definition: string;

	let onDestroy: (() => void) | undefined = undefined;

	function handleClick() {
		modalConfig.value = { abbreviation, definition, onDestroy };
		modalStore.trigger(modalConfig);
	}

	let thisSpan: HTMLSpanElement;

	onMount(() => {
		onDestroy = () => {
			thisSpan.focus();
		};
	});
</script>

<SpanButton on:click={handleClick} bind:thisSpan>{abbreviation}</SpanButton>
