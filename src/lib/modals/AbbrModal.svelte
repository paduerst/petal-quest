<script lang="ts">
	import { onDestroy } from 'svelte';

	import { getModalStore } from '@skeletonlabs/skeleton';

	import type { SkeletonModalParentType, AbbrModalValue } from '.';

	const modalStore = getModalStore();

	export let parent: SkeletonModalParentType;

	let abbrInfo: AbbrModalValue = $modalStore[0].value;

	let abbrHeader = abbrInfo.omitPrefixes
		? abbrInfo.abbreviation
		: `Abbreviation: ${abbrInfo.abbreviation}`;
	let abbrBody = abbrInfo.omitPrefixes ? abbrInfo.definition : `Definition: ${abbrInfo.definition}`;

	onDestroy(() => {
		if (abbrInfo.onDestroyFocusElement !== undefined) {
			abbrInfo.onDestroyFocusElement.focus();
		}
	});
</script>

{#if $modalStore[0]}
	<div class="card p-4 w-modal shadow-xl space-y-4 overflow-x-clip">
		<header class="text-2xl font-bold">{abbrHeader}</header>
		<div>{abbrBody}</div>
		<footer class="modal-footer {parent.regionFooter}">
			<button class="btn {parent.buttonNeutral}" on:click={parent.onClose}> Close </button>
		</footer>
	</div>
{/if}
