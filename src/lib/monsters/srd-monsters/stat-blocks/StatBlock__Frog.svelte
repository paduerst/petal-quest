<script lang="ts">
	import { SRD_MONSTER_VALS } from '../srd-monster-vals';
	import { statsFromMonsterVals } from '../../monster-vals';

	import MonsterHeading from '$lib/monsters/MonsterHeading.svelte';
	import StatBlockContainer from '$lib/stat-block/StatBlockContainer.svelte';
	import StatBlockContents from '$lib/stat-block/StatBlockContents.svelte';

	const stats = statsFromMonsterVals(SRD_MONSTER_VALS['frog']);
</script>

<div class="max-w-xl mx-auto">
	<MonsterHeading source="SRD 5.1">{stats.title}</MonsterHeading>

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
						The frog’s long jump is up to 10 feet and its high jump is up to 5 feet, with or without
						a running start.
					</p>
				</div>
			</svelte:fragment>
		</StatBlockContents>
	</StatBlockContainer>

	<p class="mt-4">
		A <b>frog</b> has no effective attacks. It feeds on small insects and typically dwells near
		water, in trees, or underground. The frog’s statistics can also be used to represent a
		<b>toad</b>.
	</p>
</div>
