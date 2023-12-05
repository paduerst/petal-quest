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
			<div class="stat-block-trait break-inside-avoid">
				<p>
					<i><b>Amphibious.</b></i>
					The frog can breathe air and water.
				</p>
			</div>
			<div class="stat-block-trait break-inside-avoid">
				<p>
					<i><b>Standing Leap.</b></i>
					The frog’s long jump is up to 10 feet and its high jump is up to 5 feet, with or without a
					running start.
				</p>
			</div>
		</svelte:fragment>
	</StatBlockContents>
</StatBlockContainer>
