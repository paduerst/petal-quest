<script lang="ts">
	import { capitalizeFirstLetter } from '$lib/text-utils';
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import SpellLink from '$lib/spells/SpellLink.svelte';
	import MonsterLink from '$lib/monsters/MonsterLink.svelte';

	export let dragon: DragonStats;
	export let disableLinks = false;
</script>

<div class="dragon-action breath-option">
	<p>
		<b>{dragon.breath2Name} Breath.</b>
		{capitalizeFirstLetter(dragon.color)} rays of magical light flash from {dragon.name}'s mouth in
		a {dragon.breathConeSize}-foot cone. Each creature in that area must make a DC {dragon.saveDCCon}
		Wisdom saving throw. On a failed save, the creature is transformed into a <MonsterLink
			monster={'frog'}
			disabled={disableLinks}
		/>, as if by the
		<SpellLink spellName="polymorph" disabled={disableLinks} /> spell
		{#if dragon.breath2SpecialValue.length > 0}
			with a duration of
			<span class="whitespace-nowrap">{dragon.breath2SpecialValue}</span>
		{/if}
		(no concentration).
		{#if dragon.breath2Name === 'True Polymorph'}
			If the creature is still a <MonsterLink monster={'frog'} disabled={disableLinks} /> at the end
			of its next turn, it must make a DC {dragon.saveDCCon}
			Charisma saving throw. If it fails this second save as well, the creature's transformation becomes
			permanent, lasting until dispelled (DC 19).
		{/if}
	</p>
</div>
