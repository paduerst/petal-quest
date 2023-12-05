<script lang="ts">
	import type { DragonConfig } from '../dragon-config';
	import { DragonStats } from '../dragon-stats';

	import DragonFeatures from './features/DragonFeatures.svelte';
	import DragonActions from './actions/DragonActions.svelte';
	import DragonBonusActions from './bonus-actions/DragonBonusActions.svelte';
	import DragonLegendaryActions from './legendary-actions/DragonLegendaryActions.svelte';
	import StatBlockContents from '$lib/stat-block/StatBlockContents.svelte';

	export let config: DragonConfig;

	const dragon: DragonStats = new DragonStats(config);

	// as a workaround to Svelte issue 5604, I duplicate the
	// StatBlockContents to omit the legendary actions.
	// https://github.com/sveltejs/svelte/issues/5604
</script>

<div
	class="columns-1 md:columns-2 print:min-[480px]:columns-2 text-left text-sm leading-[1.2]"
	style="--stat-block-theme: {dragon.theme}"
>
	{#if dragon.age !== 'wyrmling' && dragon.age !== 'young' && !dragon.isShapechanged}
		<StatBlockContents stats={dragon}>
			<svelte:fragment slot="features">
				<DragonFeatures {dragon} />
			</svelte:fragment>

			<svelte:fragment slot="actions">
				<DragonActions {dragon} />
			</svelte:fragment>

			<svelte:fragment slot="bonus-actions">
				<DragonBonusActions {dragon} />
			</svelte:fragment>

			<svelte:fragment slot="legendary-actions">
				<DragonLegendaryActions {dragon} />
			</svelte:fragment>
		</StatBlockContents>
	{:else}
		<StatBlockContents stats={dragon}>
			<svelte:fragment slot="features">
				<DragonFeatures {dragon} />
			</svelte:fragment>

			<svelte:fragment slot="actions">
				<DragonActions {dragon} />
			</svelte:fragment>

			<svelte:fragment slot="bonus-actions">
				<DragonBonusActions {dragon} />
			</svelte:fragment>
		</StatBlockContents>
	{/if}
</div>
