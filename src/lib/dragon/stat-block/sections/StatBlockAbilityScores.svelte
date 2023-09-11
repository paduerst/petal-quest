<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import { ABILITIES, signFromNumber } from '$lib/dragon';

	export let dragon: DragonStats;
</script>

<div class="dragon-abilities">
	{#each ABILITIES as ABILITY}
		<div class="dragon-ability">
			<span class="label uppercase">{ABILITY[1]}</span>
			<span>
				{dragon[ABILITY[0]]}
				<span class="modifier">
					({signFromNumber(dragon[ABILITY[1]])}{dragon[ABILITY[1]]})
				</span>
			</span>
		</div>
	{/each}
</div>
