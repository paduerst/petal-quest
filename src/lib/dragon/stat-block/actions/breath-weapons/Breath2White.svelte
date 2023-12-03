<script lang="ts">
	import { capitalizeFirstLetter } from '$lib/text-utils';
	import type { DragonStats } from '$lib/dragon/dragon-stats';

	export let dragon: DragonStats;
</script>

<div class="dragon-action breath-option">
	<p>
		<b>{dragon.breath2Name} Breath.</b>
		{capitalizeFirstLetter(dragon.color)} rays of magical light flash from {dragon.name}'s mouth in
		a {dragon.breathConeSize}-foot cone. Each creature in that area has its speed doubled until the
		end of its next turn, at which time it must make a DC {dragon.saveDCCon} Constitution saving throw.
		On a failed save, the creature gains 2 (1d4) levels of exhaustion. If this would bring it to 5 or
		more levels of exhaustion, it is instead brought to 4 levels of exhaustion and falls prone.
	</p>
</div>
