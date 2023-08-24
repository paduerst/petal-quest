<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import type { DragonConfig } from '..';

	const dispatch = createEventDispatcher<{ newDragonConfig: DragonConfig }>();

	function dispatchDragonConfig(newDragonConfig: DragonConfig) {
		dispatch('newDragonConfig', newDragonConfig);
	}

	const adultGreenDragonConfig: DragonConfig = {
		age: 'adult',
		color: 'green'
	};

	function buildDragon() {
		// TODO: Build any other kind of dragon.
		dispatchDragonConfig(adultGreenDragonConfig);
	}
</script>

<p>This is the Welcome page.</p>

<button class="btn variant-filled-surface" on:click={buildDragon}>Build the dragon!</button>
