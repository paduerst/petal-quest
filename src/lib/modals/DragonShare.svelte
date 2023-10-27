<script lang="ts">
	// Props
	/** Exposes parent props to this component. */
	export let parent: {
		position: string;
		// ---
		background: string;
		width: string;
		height: string;
		padding: string;
		spacing: string;
		rounded: string;
		shadow: string;
		// ---
		buttonNeutral: string;
		buttonPositive: string;
		buttonTextCancel: string;
		buttonTextConfirm: string;
		buttonTextSubmit: string;
		// ---
		regionBackdrop: string;
		regionHeader: string;
		regionBody: string;
		regionFooter: string;
		// ---
		onClose: () => void;
	};

	// Stores
	import { getModalStore, clipboard } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();

	import { BASE_SHARE_URL } from '$lib';

	let shareURL =
		$modalStore[0].value === undefined
			? BASE_SHARE_URL
			: `${BASE_SHARE_URL}?${$modalStore[0].value}`;
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
