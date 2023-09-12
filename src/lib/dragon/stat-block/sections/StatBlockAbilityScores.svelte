<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import { ABILITIES, numberWithSign } from '$lib/dragon';

	export let dragon: DragonStats;
</script>

<div class="dragon-abilities">
	{#each ABILITIES as ABILITY}
		<div class="dragon-ability">
			<span class="label uppercase">{ABILITY[1]}</span>
			<span>
				{dragon[ABILITY[0]]}
				<span class="modifier">
					({numberWithSign(dragon[ABILITY[1]])})
				</span>
			</span>
		</div>
	{/each}
</div>
