<script lang="ts">
	import { capitalizeFirstLetter } from '$lib/text-utils';
	import type { DragonStats } from '$lib/dragon/dragon-stats';

	export let dragon: DragonStats;
</script>

<div class="dragon-action breath-option">
	<p>
		<b>{dragon.breath2Name} Breath.</b>
		{capitalizeFirstLetter(dragon.color)} rays of magical light flash from {dragon.name}'s mouth in
		a {dragon.breathConeSize}-foot cone. Each creature in that area must make a DC {dragon.saveDCCon}
		Constitution saving throw. On a failed save, the creature is blinded until the end of its next turn,
		at which time it must make a DC {dragon.saveDCCon} Charisma saving throw. If it fails this second
		save as well, the creature is banished to another plane of the GM's choosing. Typically, a creature
		that is on a plane that isn't its home plane is banished home, while other creatures are usually
		cast into the Astral or Ethereal planes.
		{#if dragon.age === 'wyrmling' || dragon.age === 'young'}
			After {dragon.breath2SpecialValue}, if the creature is still on that plane, it reappears in
			the space it left or in the nearest unoccupied space if that space is occupied.
		{:else}
			As a bonus action, {dragon.name} can unbanish all the creatures {dragon.pronounNominative}
			{dragon.pronounsPlural ? 'have' : 'has'} banished within the last hour. When a creature is unbanished,
			it reappears in the space it left or in the nearest unoccupied space if that space is occupied.
			This fails for any creature that is no longer on the plane it was banished to.
		{/if}
	</p>
</div>
