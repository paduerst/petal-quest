<script lang="ts">
	import type { StatsForPreambleACHPSpeed } from '.';
	import { numberWithSign } from '$lib/text-utils';

	export let stats: StatsForPreambleACHPSpeed;

	let acText: string = '';
	$: acText =
		stats.acDescription.length > 0 ? `${stats.ac} (${stats.acDescription})` : `${stats.ac}`;

	let hpText: string = '';
	$: hpText =
		stats.con === 0
			? `${stats.numberOfHitDice}d${stats.hitDie}`
			: `${stats.numberOfHitDice}d${stats.hitDie} ${numberWithSign(
					stats.con * stats.numberOfHitDice,
					' '
			  )}`;
</script>

<ul>
	<li class="my-1">
		<p>
			<span class="stat-block-label">Armor Class</span>
			<span>{acText}</span>
		</p>
	</li>

	<li class="my-1">
		<p>
			<span class="stat-block-label">Hit Points</span>
			<span>{stats.expectedHitPoints} ({hpText})</span>
		</p>
	</li>

	<li class="my-1">
		<p>
			<span class="stat-block-label">Speed</span>
			<span>{stats.speeds}</span>
		</p>
	</li>
</ul>
