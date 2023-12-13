<script lang="ts">
	import { capitalizeFirstLetter } from '$lib/text-utils';
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import ConditionLink from '$lib/conditions/ConditionLink.svelte';

	export let dragon: DragonStats;
	export let disableLinks = false;
</script>

<div class="dragon-action breath-option">
	<p>
		<b>{dragon.breath2Name} Breath.</b>
		{capitalizeFirstLetter(dragon.color)} rays of magical light flash from {dragon.name}'s mouth in
		a {dragon.breathConeSize}-foot cone. Each creature in that area must make a DC {dragon.saveDCCon}
		Wisdom saving throw. On a failed save, the creature is <ConditionLink
			condition="charmed"
			disabled={disableLinks}
		/> for <span class="whitespace-nowrap">1 minute</span>; while <ConditionLink
			condition="charmed"
			disabled={disableLinks}
		/> in this way, it is also <ConditionLink condition="stunned" disabled={disableLinks} /> as it relives
		a significant memory. Divination magic allows {dragon.name} to see the memory as the creature is
		reliving it. The creature can repeat the saving throw at the end of each of its turns, and it can
		repeat the saving throw with a +5 bonus each time it takes damage or another creature uses an action
		to shake it out of its trance. On a success, the effect ends.
	</p>
</div>
