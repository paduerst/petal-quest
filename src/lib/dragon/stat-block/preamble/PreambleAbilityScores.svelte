<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import { ABILITIES, numberWithSign } from '$lib/dragon';

	export let dragon: DragonStats;
</script>

<div class="dragon-abilities">
	{#each ABILITIES as ABILITY}
		<div class="dragon-ability">
			<span class="dragon-label uppercase">{ABILITY[1]}</span>
			<span>
				{dragon[ABILITY[0]]}
				<span class="dragon-modifier">
					({numberWithSign(dragon[ABILITY[1]])})
				</span>
			</span>
		</div>
	{/each}
</div>
