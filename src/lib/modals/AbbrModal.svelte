<script lang="ts">
	import { onDestroy } from 'svelte';

	import { getModalStore } from '@skeletonlabs/skeleton';

	import type { SkeletonModalParentType } from '.';

	const modalStore = getModalStore();

	export let parent: SkeletonModalParentType;

	let abbrInfo: {
		abbreviation: string;
		definition: string;
		onDestroyFocusElement?: HTMLElement;
	} = $modalStore[0].value;

	onDestroy(() => {
		if (abbrInfo.onDestroyFocusElement !== undefined) {
			abbrInfo.onDestroyFocusElement.focus();
		}
	});
</script>

{#if $modalStore[0]}
	<div class="card p-4 w-modal shadow-xl space-y-4 overflow-x-clip">
		<header class="text-2xl font-bold">Abbreviation: {abbrInfo.abbreviation}</header>
		<div>Definition: {abbrInfo.definition}</div>
		<footer class="modal-footer {parent.regionFooter}">
			<button class="btn {parent.buttonNeutral}" on:click={parent.onClose}> Close </button>
		</footer>
	</div>
{/if}
