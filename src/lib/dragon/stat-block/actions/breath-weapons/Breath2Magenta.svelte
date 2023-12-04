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
		Wisdom saving throw. On a failed save, the creature is <ConditionLink condition="charmed" /> by {dragon.name}
		until the end of {dragon.name}'s next turn, at which time the creature must make a DC {dragon.saveDCCon}
		Intelligence saving throw. If it fails this second save as well, the creature forgets everything
		it sensed, experienced, and learned during the past {dragon.breath2SpecialValue}.
	</p>
</div>
