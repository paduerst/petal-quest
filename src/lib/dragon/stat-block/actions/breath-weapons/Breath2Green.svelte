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
		a {dragon.breathConeSize}-foot cone. Each creature in that area must succeed on a DC {dragon.saveDCCon}
		Wisdom saving throw or fall <ConditionLink condition="unconscious" />
		{dragon.breath2SpecialValue}. The creature wakes up if it takes damage or if another creature
		uses an action to shake it awake.
	</p>
</div>
