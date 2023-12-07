<script lang="ts">
	import { numberWithSign } from '$lib/text-utils';
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import ConditionLink from '$lib/conditions/ConditionLink.svelte';

	export let dragon: DragonStats;
	export let disableLinks = false;
</script>

<div class="dragon-legendary-action">
	<p>
		<b>Wing Attack (Costs 2 Actions).</b>
		{dragon.nameUpper} beats {dragon.pronounPossessiveAdjective} wings. Each creature within {dragon.wingAttackRadius}
		feet of {dragon.name} must succeed on a
		<span class="whitespace-nowrap">DC {dragon.saveDCStr}</span>
		Dexterity saving throw or take
		<span class="whitespace-nowrap"
			>{dragon.wingAttackExpectedDamage} ({dragon.wingAttackDiceCount}d{dragon.wingAttackDiceType}
			{numberWithSign(dragon.str, ' ')})</span
		>
		bludgeoning damage and be knocked <ConditionLink condition="prone" disabled={disableLinks} />. {dragon.nameUpper}
		can then fly up to half {dragon.pronounPossessiveAdjective}
		flying speed.
	</p>
</div>
