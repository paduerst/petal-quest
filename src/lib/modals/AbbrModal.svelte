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

	import { getModalStore } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();
</script>

{#if $modalStore[0]}
	<div class="card w-11/12 max-w-4xl shadow-xl space-y-4">
		<button on:click={parent.onClose} class="btn btn-icon-base variant-ghost-error m-2 float-right">
			✕
		</button>
		<p class="p-4">{$modalStore[0].value}</p>
	</div>
{/if}
