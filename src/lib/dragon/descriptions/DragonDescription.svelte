<script lang="ts">
	import type { DragonConfig } from '../dragon-config';
	import { DragonStats } from '../dragon-stats';

	import DragonLairActions from '../stat-block/lair-actions/DragonLairActions.svelte';
	import ColorDescription from './ColorDescription.svelte';
	import AgeDescription from './AgeDescription.svelte';

	export let config: DragonConfig | undefined;

	let dragon: DragonStats | undefined;

	$: dragon = config !== undefined ? new DragonStats(config) : undefined;
</script>

{#if config !== undefined}
	{#if dragon !== undefined}
		<DragonLairActions {dragon} />
	{/if}

	<div class="mb-2">
		<ColorDescription color={config.color} />
	</div>

	<div>
		<AgeDescription age={config.age} />
	</div>
{/if}
