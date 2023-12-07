<script lang="ts">
	import type { DragonConfig } from '../dragon-config';
	import { DragonStats } from '../dragon-stats';

	import DragonFeatures from './features/DragonFeatures.svelte';
	import DragonActions from './actions/DragonActions.svelte';
	import DragonBonusActions from './bonus-actions/DragonBonusActions.svelte';
	import DragonLegendaryActions from './legendary-actions/DragonLegendaryActions.svelte';
	import StatBlockContents from '$lib/stat-block/StatBlockContents.svelte';

	export let config: DragonConfig;
	export let disableLinks = false;

	const dragon: DragonStats = new DragonStats(config);

	// as a workaround to Svelte issue 5604, I duplicate the
	// StatBlockContents to omit the legendary actions.
	// https://github.com/sveltejs/svelte/issues/5604
</script>

{#if dragon.age !== 'wyrmling' && dragon.age !== 'young' && !dragon.isShapechanged}
	<StatBlockContents stats={dragon}>
		<svelte:fragment slot="features">
			<DragonFeatures {dragon} {disableLinks} />
		</svelte:fragment>

		<svelte:fragment slot="actions">
			<DragonActions {dragon} {disableLinks} />
		</svelte:fragment>

		<svelte:fragment slot="bonus-actions">
			<DragonBonusActions {dragon} {disableLinks} />
		</svelte:fragment>

		<svelte:fragment slot="legendary-actions">
			<DragonLegendaryActions {dragon} {disableLinks} />
		</svelte:fragment>
	</StatBlockContents>
{:else}
	<StatBlockContents stats={dragon}>
		<svelte:fragment slot="features">
			<DragonFeatures {dragon} {disableLinks} />
		</svelte:fragment>

		<svelte:fragment slot="actions">
			<DragonActions {dragon} {disableLinks} />
		</svelte:fragment>

		<svelte:fragment slot="bonus-actions">
			<DragonBonusActions {dragon} {disableLinks} />
		</svelte:fragment>
	</StatBlockContents>
{/if}
