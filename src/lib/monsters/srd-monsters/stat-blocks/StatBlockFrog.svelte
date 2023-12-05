<script lang="ts">
	import { SRD_MONSTER_VALS } from '../srd-monster-vals';
	import { statsFromMonsterVals } from '../../monster-vals';

	import StatBlockContainer from '$lib/stat-block/StatBlockContainer.svelte';
	import StatBlockContents from '$lib/stat-block/StatBlockContents.svelte';

	const stats = statsFromMonsterVals(SRD_MONSTER_VALS['frog']);
</script>

<StatBlockContainer theme={stats.theme}>
	<StatBlockContents {stats}>
		<svelte:fragment slot="features">
			<p>Features</p>
		</svelte:fragment>
	</StatBlockContents>
</StatBlockContainer>
