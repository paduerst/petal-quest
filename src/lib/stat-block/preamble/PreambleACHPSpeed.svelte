<script lang="ts">
	import type { StatsForPreambleACHPSpeed } from '.';
	import { numberWithSign } from '$lib/text-utils';

	export let stats: StatsForPreambleACHPSpeed;
</script>

<ul>
	<li class="my-1">
		<p>
			<span class="stat-block-label">Armor Class</span>
			<span>{stats.ac} (Natural Armor)</span>
		</p>
	</li>

	<li class="my-1">
		<p>
			<span class="stat-block-label">Hit Points</span>
			<span
				>{stats.expectedHitPoints} ({stats.numberOfHitDice}d{stats.hitDie}
				{numberWithSign(stats.con * stats.numberOfHitDice, ' ')})</span
			>
		</p>
	</li>

	<li class="my-1">
		<p>
			<span class="stat-block-label">Speed</span>
			<span>{stats.speeds}</span>
		</p>
	</li>
</ul>
