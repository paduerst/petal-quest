<script lang="ts">
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher<{ click: { buttonText: string }; resetDragon: null }>();

	function dispatchClick(buttonText: string) {
		dispatch('click', {
			buttonText: buttonText
		});
	}

	function dispatchClickEdit() {
		dispatchClick('EDIT');
	}

	function dispatchClickShare() {
		dispatchClick('SHARE');
	}
</script>

<div class="flex flex-wrap justify-center print:hidden">
	<button class="daisy-btn daisy-btn-neutral text-token m-1" on:click={dispatchClickEdit}>
		Edit Dragon
	</button>
	<button class="daisy-btn daisy-btn-neutral text-token m-1" on:click={dispatchClickShare}>
		Share Dragon
	</button>
	<button
		class="daisy-btn daisy-btn-neutral text-token m-1"
		on:click={() => {
			dispatch('resetDragon');
		}}
	>
		Build a New Dragon
	</button>
</div>
