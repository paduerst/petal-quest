<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import { getToastStore } from '@skeletonlabs/skeleton';

	import { currentDragonConfig, nextBuilderState } from './builder-states';

	const dispatch = createEventDispatcher<{
		click: { buttonText: string; clickedButton?: HTMLElement };
	}>();

	const toastStore = getToastStore();

	function dispatchClick(buttonText: string, clickedButton?: HTMLElement) {
		dispatch('click', {
			buttonText,
			clickedButton
		});
	}

	let shareButton: HTMLElement;
</script>

<div class="flex flex-wrap justify-center print:hidden">
	<button
		class="daisy-btn daisy-btn-neutral text-token m-1"
		on:click={() => {
			toastStore.clear();
			$nextBuilderState = 'EDIT';
		}}
	>
		Edit Dragon
	</button>
	<button
		class="daisy-btn daisy-btn-neutral text-token m-1"
		bind:this={shareButton}
		on:click={() => {
			dispatchClick('SHARE', shareButton);
		}}
	>
		Share Dragon
	</button>
	<button
		class="daisy-btn daisy-btn-neutral text-token m-1"
		on:click={() => {
			toastStore.clear();
			$currentDragonConfig = undefined;
		}}
	>
		Build a New Dragon
	</button>
	<button
		class="daisy-btn daisy-btn-neutral text-token m-1"
		on:click={() => {
			toastStore.clear();
			$nextBuilderState = 'HISTORY';
		}}
	>
		View Builder History
	</button>
</div>
