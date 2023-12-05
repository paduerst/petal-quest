<script lang="ts">
	import { LAIR_ACTIONS_ENABLED } from '.';
	import type { DragonStats } from '$lib/dragon/dragon-stats';

	export let dragon: DragonStats;
</script>

{#if dragon.age !== 'wyrmling' && dragon.age !== 'young' && LAIR_ACTIONS_ENABLED}
	<div class="mb-2">
		<h5 class="font-bold text-base">Lair Actions</h5>
		<p>
			{dragon.nameUpper} has lair actions.
		</p>
	</div>
{/if}
