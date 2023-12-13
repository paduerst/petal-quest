<script lang="ts">
	import { REGIONAL_EFFECTS_ENABLED } from '.';
	import type { DragonStats } from '$lib/dragon/dragon-stats';

	export let dragon: DragonStats;
</script>

{#if dragon.age !== 'wyrmling' && dragon.age !== 'young' && REGIONAL_EFFECTS_ENABLED}
	<div class="mb-2">
		<h5 class="font-bold text-base">Regional Effects</h5>
		<p>
			{dragon.nameUpper} will have regional effects around {dragon.pronounPossessiveAdjective} lair once
			they are written. For now, this section is only visible while in development mode.
		</p>
	</div>
{/if}
