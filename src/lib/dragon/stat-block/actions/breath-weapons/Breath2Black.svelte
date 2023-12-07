<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';

	export let dragon: DragonStats;
</script>

<div class="dragon-action breath-option">
	<p>
		<b>{dragon.breath2Name} Breath.</b>
		{dragon.nameUpper} exhales magical darkness which briefly fills a {dragon.breathConeSize}-foot
		cone. Each creature in that area gains {dragon.breath2SpecialValue}, manifesting as a shroud of
		shadow. While the creature has these hit points, the creature has advantage on all saving throws
		and doesn't age.
	</p>
</div>
