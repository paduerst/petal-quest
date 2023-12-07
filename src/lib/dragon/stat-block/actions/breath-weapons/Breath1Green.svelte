<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import ConditionLink from '$lib/conditions/ConditionLink.svelte';

	export let dragon: DragonStats;
	export let disableLinks = false;
</script>

<div class="dragon-action breath-option">
	<p>
		<b>{dragon.breath1Name} Breath.</b>
		{dragon.nameUpper} exhales poisonous gas in a {dragon.breathConeSize}-foot cone. Each creature
		in that area must make a DC {dragon.saveDCCon} Constitution saving throw. On a failed save, the creature
		takes {dragon.breath1ExpectedDamage} ({dragon.breath1DiceCount}d{dragon.breath1DiceType}) poison
		damage and is <ConditionLink condition="poisoned" /> until the end of its next turn. On a successful
		save, the creature takes half as much damage and isn't <ConditionLink
			condition="poisoned"
			disabled={disableLinks}
		/>.
	</p>
</div>
