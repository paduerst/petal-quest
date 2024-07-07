<script lang="ts">
	import type { Age } from '$lib/dragon';
	import type { DragonStats } from '$lib/dragon/dragon-stats';

	import { capitalizeFirstLetter } from '$lib/text-utils';

	import ConditionLink from '$lib/conditions/ConditionLink.svelte';
	import SpellLink from '$lib/spells/SpellLink.svelte';

	export let dragon: DragonStats;
	export let disableLinks = false;

	const sleepDurations: {
		[key in Age]: string;
	} = {
		wyrmling: '10 minutes',
		young: '10 minutes',
		adult: '8 hours',
		ancient: '8 hours',
		cosmic: '12 hours'
	} as const;
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
		until the end of {dragon.name}'s next turn, at which time the creature must make a DC {dragon.saveDCCon}
		Intelligence saving throw if it is still <ConditionLink
			condition="charmed"
			disabled={disableLinks}
		/>. If it fails this second save as well, the creature loses its memories from the past {dragon.breath2SpecialValue}
		and falls
		<ConditionLink condition="unconscious" disabled={disableLinks} /> for {sleepDurations[
			dragon.age
		]}. The creature wakes up if it takes damage or if another creature uses an action to shake it
		awake. Only a <SpellLink spellName="wish" disabled={disableLinks} /> spell can restore the lost memories.
	</p>
</div>
