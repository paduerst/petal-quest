<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';

	import ConditionLink from '$lib/conditions/ConditionLink.svelte';

	export let dragon: DragonStats;
	export let disableLinks = false;
</script>

<div class="dragon-action breath-option">
	<p>
		<b>{dragon.breath2Name} Breath.</b>
		{dragon.nameUpper} magically inhales light in a {dragon.breathConeSize}-foot cone. All sources
		of light (except those created by an artifact or a deity) are extinguished within that area, and
		each creature in that area must make a DC {dragon.saveDCCon}
		Wisdom saving throw. On a failed save, the creature is <ConditionLink
			condition="frightened"
			disabled={disableLinks}
		/> by {dragon.name}
		for 1 minute. While <ConditionLink condition="frightened" disabled={disableLinks} />
		in this way, the creature cannot willingly move into an area of darkness. If the creature starts
		its turn in darkness, it must use its action to create light or to move into an area of bright or
		dim light it can see, ending its turn if unable to. If the creature is in bright light, it can use
		its action to repeat the saving throw, ending the effect on itself with a success.
	</p>
</div>
