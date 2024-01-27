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
		Constitution saving throw. On a failed save, the creature is <ConditionLink
			condition="restrained"
			disabled={disableLinks}
		/> by bands of {dragon.color} light for 1 minute; while <ConditionLink
			condition="restrained"
			disabled={disableLinks}
		/>
		in this way, it can't speak or cast spells which include a verbal component. The creature can repeat
		the saving throw at the end of each of its turns, ending the effect on itself with a success.
	</p>
</div>
