<script lang="ts">
	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();
	const modalConfig: ModalSettings = {
		type: 'component',
		component: 'abbrModal'
	};

	export let abbreviation: string;
	export let definition: string;

	function handleClick() {
		modalConfig.value = { abbreviation, definition };
		modalStore.trigger(modalConfig);
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
	on:keydown={handleKeydown}
	on:keyup={handleKeyup}
	on:click={handleClick}
	class="underline">{abbreviation}</span
>
