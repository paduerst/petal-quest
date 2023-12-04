<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import { numberWithSign } from '$lib/text-utils';

	export let dragon: DragonStats;
</script>

<ul>
	<li class="dragon-ac my-1">
		<p>
			<span class="stat-block-label">Armor Class</span>
			<span>{dragon.ac} (Natural Armor)</span>
		</p>
	</li>
	<li class="dragon-hp my-1">
		<p>
			<span class="stat-block-label">Hit Points</span>
			<span
				>{dragon.expectedHitPoints} ({dragon.numberOfHitDice}d{dragon.hitDie}
				{numberWithSign(dragon.con * dragon.numberOfHitDice, ' ')})</span
			>
		</p>
	</li>
	<li class="dragon-speed my-1">
		<p>
			<span class="stat-block-label">Speed</span>
			<span>{dragon.speeds}</span>
		</p>
	</li>
</ul>
