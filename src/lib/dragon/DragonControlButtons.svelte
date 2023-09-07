<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import { currentDragonConfig, nextBuilderState } from './builder-states';

	const dispatch = createEventDispatcher<{ click: { buttonText: string } }>();

	function dispatchClick(buttonText: string) {
		dispatch('click', {
			buttonText: buttonText
		});
	}
</script>

<div class="flex flex-wrap justify-center print:hidden">
	<button
		class="daisy-btn daisy-btn-neutral text-token m-1"
		on:click={() => {
			$nextBuilderState = 'EDIT';
		}}
	>
		Edit Dragon
	</button>
	<button
		class="daisy-btn daisy-btn-neutral text-token m-1"
		on:click={() => {
			dispatchClick('SHARE');
		}}
	>
		Share Dragon
	</button>
	<button
		class="daisy-btn daisy-btn-neutral text-token m-1"
		on:click={() => {
			$currentDragonConfig = undefined;
		}}
	>
		Build a New Dragon
	</button>
</div>
