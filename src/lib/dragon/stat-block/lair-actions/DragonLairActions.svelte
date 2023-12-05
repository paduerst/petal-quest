<script lang="ts">
	import { LAIR_ACTIONS_ENABLED } from '.';
	import type { DragonStats } from '$lib/dragon/dragon-stats';

	export let dragon: DragonStats;
</script>

{#if dragon.age !== 'wyrmling' && dragon.age !== 'young' && LAIR_ACTIONS_ENABLED}
	<div class="mb-2">
		<h5 class="font-bold text-base">Lair Actions</h5>
		<p>
			{dragon.nameUpper} will have lair actions once they are written. For now, this section is only
			visible while in development mode.
		</p>
	</div>
{/if}
