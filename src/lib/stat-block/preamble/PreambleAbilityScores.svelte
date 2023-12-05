<script lang="ts">
	import type { StatsForPreambleAbilityScores } from '.';
	import { ABILITIES } from '$lib/monsters';
	import { numberWithSign } from '$lib/text-utils';

	export let stats: StatsForPreambleAbilityScores;
</script>

<div class="stat-block-abilities">
	{#each ABILITIES as ABILITY}
		<div class="stat-block-ability">
			<span class="stat-block-label uppercase">{ABILITY[1]}</span>
			<span>
				{stats[ABILITY[0]]}
				<span class="stat-block-modifier">
					({numberWithSign(stats[ABILITY[1]])})
				</span>
			</span>
		</div>
	{/each}
</div>
