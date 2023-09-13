<script lang="ts">
	import { numberWithSign } from '$lib/dragon';
	import type { DragonStats } from '$lib/dragon/dragon-stats';

	export let dragon: DragonStats;
	const proficiencyPlusStrWithSign = numberWithSign(dragon.proficiencyBonus + dragon.str);
</script>

{#if dragon.biteDiceCount > 0 && dragon.clawDiceCount > 0}
	<div class="dragon-action">
		<p>
			<i><b>Multiattack.</b></i>
			{dragon.nameUpper} makes three attacks: one with {dragon.her}
			bite and two with {dragon.her} claws.
		</p>
	</div>
{/if}

{#if dragon.biteDiceCount > 0}
	<div class="dragon-action">
		<p>
			<i><b>Bite.</b> Melee Weapon Attack:</i>
			{proficiencyPlusStrWithSign} to hit, reach {dragon.biteReach}
			ft., one target.
			<span class="whitespace-nowrap"
				><i>Hit:</i>
				{dragon.biteExpectedDamage} ({dragon.biteDiceCount}d{dragon.biteDiceType}
				{numberWithSign(dragon.str, ' ')})</span
			>
			piercing damage{#if dragon.biteElementDiceCount > 0}
				{' plus'}
				<span class="whitespace-nowrap"
					>{dragon.biteElementExpectedDamage} ({dragon.biteElementDiceCount}d{dragon.biteElementDiceType})</span
				>
				{dragon.immunity.toLowerCase()} damage{/if}.
		</p>
	</div>
{/if}

{#if dragon.clawDiceCount > 0}
	<div class="dragon-action">
		<p>
			<i><b>Claw.</b> Melee Weapon Attack:</i>
			{proficiencyPlusStrWithSign} to hit, reach {dragon.clawReach}
			ft., one target.
			<span class="whitespace-nowrap"
				><i>Hit:</i>
				{dragon.clawExpectedDamage} ({dragon.clawDiceCount}d{dragon.clawDiceType}
				{numberWithSign(dragon.str, ' ')})</span
			>
			slashing damage.
		</p>
	</div>
{/if}

{#if dragon.tailDiceCount > 0}
	<div class="dragon-action">
		<p>
			<i><b>Tail.</b> Melee Weapon Attack:</i>
			{proficiencyPlusStrWithSign} to hit, reach {dragon.tailReach}
			ft., one target.
			<span class="whitespace-nowrap"
				><i>Hit:</i>
				{dragon.tailExpectedDamage} ({dragon.tailDiceCount}d{dragon.tailDiceType}
				{numberWithSign(dragon.str, ' ')})</span
			>
			bludgeoning damage.
		</p>
	</div>
{/if}
