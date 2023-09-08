<script lang="ts">
	// Props
	/** Exposes parent props to this component. */
	export let parent: any;

	// Stores
	import { getModalStore, clipboard } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();

	import { page } from '$app/stores';

	const baseShareURL = `${$page.url.origin}/dragon-builder`;
	let shareURL =
		$modalStore[0].value === undefined ? baseShareURL : `${baseShareURL}?${$modalStore[0].value}`;
</script>

{#if $modalStore[0]}
	<div class="card p-4 w-modal shadow-xl space-y-4">
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
