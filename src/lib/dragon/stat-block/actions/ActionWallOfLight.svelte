<script lang="ts">
	import { capitalizeFirstLetter } from '$lib/dragon';
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import SpellLink from '$lib/spells/SpellLink.svelte';

	export let dragon: DragonStats;
</script>

{#if dragon.hasWallOfLight}
	<div class="dragon-action">
		<p>
			<i><b>Wall of {capitalizeFirstLetter(dragon.color)} Light (1/Day).</b></i>
			{dragon.nameUpper} casts <SpellLink spellName="prismatic wall" /> using Charisma as the spellcasting
			ability (spell save <span class="whitespace-nowrap">DC {dragon.saveDCCha}),</span> but the
			wall just has its {dragon.wallLayers}. The wall's bright and dim light each have a range of 60
			feet instead of 100 feet, and its light isn't blinding. If {dragon.name} casts this spell with
			a casting time of 1 hour instead of 1 action, the wall remains in place until it's destroyed or
			{dragon.name}
			uses this feature again.
		</p>
	</div>
{/if}
