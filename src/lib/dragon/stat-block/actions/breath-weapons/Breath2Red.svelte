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
		/> by {dragon.name}
		for 1 minute. On each of its turns while <ConditionLink
			condition="charmed"
			disabled={disableLinks}
		/> in this way, the creature must move as close as possible to the nearest creature it can see (excluding
		itself and {dragon.name}) and attack it once, ending its turn after doing so or if unable to.
		The creature can repeat the saving throw at the end of each of its turns, ending the effect on
		itself with a success.
	</p>
</div>
