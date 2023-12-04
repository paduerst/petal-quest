<script lang="ts">
	import { capitalizeFirstLetter } from '$lib/text-utils';
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import ConditionLink from '$lib/conditions/ConditionLink.svelte';

	export let dragon: DragonStats;
</script>

<div class="dragon-action breath-option">
	<p>
		<b>{dragon.breath2Name} Breath.</b>
		{capitalizeFirstLetter(dragon.color)} rays of magical light flash from {dragon.name}'s mouth in
		a {dragon.breathConeSize}-foot cone. Each creature in that area must make a DC {dragon.saveDCCon}
		Intelligence saving throw. On a failed save, divination magic connects the creature and {dragon.name}
		for 1 minute. While connected, {dragon.name} is <ConditionLink condition="invisible" /> to the creature,
		and
		{dragon.name} knows the creature's location while they are on the same plane of existence. The creature
		can repeat the saving throw at the end of each of its turns, ending the effect on itself with a success.
		As a bonus action, {dragon.name} can end the effect early for one or more affected creatures, learning
		the following about each: its name (if any), its creature type, and something that looms large in
		its mind (such as something it worries over, loves, or hates).
	</p>
</div>
