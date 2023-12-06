<script lang="ts">
	import { onDestroy } from 'svelte';

	import { getModalStore, clipboard } from '@skeletonlabs/skeleton';

	import type { SkeletonModalParentType, DragonShareModalValue } from '.';
	import { BASE_SHARE_URL } from '$lib';

	const modalStore = getModalStore();

	export let parent: SkeletonModalParentType;

	let shareInfo: DragonShareModalValue = $modalStore[0].value;
	let shareURL = shareInfo.dragon === undefined ? BASE_SHARE_URL : shareInfo.dragon.url;

	onDestroy(() => {
		if (shareInfo.onDestroyFocusElement !== undefined) {
			shareInfo.onDestroyFocusElement.focus();
		}
	});
</script>

{#if $modalStore[0]}
	<div class="card p-4 w-modal shadow-xl space-y-4 overflow-x-clip">
		<header class="text-2xl font-bold">{$modalStore[0].title ?? 'Share Dragon'}</header>
		<div>
			{shareURL}
		</div>
		<slot />
		<footer class="modal-footer {parent.regionFooter}">
			<button class="btn {parent.buttonNeutral}" on:click={parent.onClose}> Cancel </button>
			<button
				class="btn {parent.buttonPositive}"
				on:click={parent.onClose}
				use:clipboard={shareURL}
			>
				Copy URL
			</button>
		</footer>
	</div>
{/if}
