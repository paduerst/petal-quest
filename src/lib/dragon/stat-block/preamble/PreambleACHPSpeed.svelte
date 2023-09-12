<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import { numberWithSign } from '$lib/dragon';

	export let dragon: DragonStats;
</script>

<ul>
	<li class="dragon-ac">
		<p>
			<span class="dragon-label">Armor Class</span>
			<span>{dragon.ac} (Natural Armor)</span>
		</p>
	</li>
	<li class="dragon-hp">
		<p>
			<span class="dragon-label">Hit Points</span>
			<span
				>{dragon.expectedHitPoints} ({dragon.numberOfHitDice}d{dragon.hitDie}
				{numberWithSign(dragon.con * dragon.numberOfHitDice, ' ')})</span
			>
		</p>
	</li>
	<li class="dragon-speed">
		<p>
			<span class="dragon-label">Speed</span>
			<span>{dragon.speeds}</span>
		</p>
	</li>
</ul>
