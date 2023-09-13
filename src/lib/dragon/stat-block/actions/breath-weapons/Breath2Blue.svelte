<script lang="ts">
	import { capitalizeFirstLetter } from '$lib/dragon';
	import type { DragonStats } from '$lib/dragon/dragon-stats';

	export let dragon: DragonStats;
</script>

<div class="dragon-action breath-option">
	<p>
		<b>{dragon.breath2Name} Breath.</b>
		{capitalizeFirstLetter(dragon.color)} rays of magical light flash from {dragon.name}'s mouth in
		a {dragon.breathConeSize}-foot cone. Each creature in that area must make a DC {dragon.saveDCCon}
		Wisdom saving throw. On a failed save, the creature is subject to {dragon.breath2SpecialValue}.
	</p>

	<p class="blue-breath-option">
		<i>1. Floating Feeling.</i> The creature levitates (as if affected by the
		<i>levitate</i> spell), and its flying speed (if any) becomes 0.
	</p>

	<p class="blue-breath-option">
		<i>2. Blue Glow.</i> The creature is outlined in blue light, shedding dim light in a 10-foot radius.
		Any attack roll against the creature has advantage if the attacker can see it, and the creature can't
		benefit from being invisible.
	</p>

	<p class="blue-breath-option">
		<i>3. Violent Hiccups.</i> The creature violently hiccups. It has disadvantage on attack rolls, ability
		checks, and Constitution saving throws to maintain concentration.
	</p>

	<p class="blue-breath-option">
		<i>4. Froggy Jinx.</i> The creature is transformed into a frog, as if by the
		<i>polymorph</i> spell.
	</p>
</div>
