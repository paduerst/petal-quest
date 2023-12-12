<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import ConditionLink from '$lib/conditions/ConditionLink.svelte';

	export let dragon: DragonStats;
	export let disableLinks = false;
</script>

<div class="dragon-action breath-option">
	<p>
		<b>{dragon.breath1Name} Breath.</b>
		{dragon.nameUpper} unleashes a deafening boom in a {dragon.breathConeSize}-foot cone. Each
		creature in that area must make a DC {dragon.saveDCCon} Constitution saving throw. On a failed save,
		the creature takes {dragon.breath1ExpectedDamage} ({dragon.breath1DiceCount}d{dragon.breath1DiceType})
		thunder damage and is <ConditionLink condition="deafened" disabled={disableLinks} /> until the end
		of its next turn. On a successful save, the creature takes half as much damage and isn't <ConditionLink
			condition="deafened"
			disabled={disableLinks}
		/>. A creature made of inorganic material such as stone, crystal, or metal has disadvantage on
		this saving throw.
	</p>
</div>
