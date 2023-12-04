<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import PreambleHeader from '$lib/stat-block/preamble/PreambleHeader.svelte';
	import PreambleACHPSpeed from '../../../stat-block/preamble/PreambleACHPSpeed.svelte';
	import PreambleAbilityScores from '../../../stat-block/preamble/PreambleAbilityScores.svelte';
	import PreambleStatsList from '../../../stat-block/preamble/PreambleStatsList.svelte';
	import StatBlockDivider from '$lib/stat-block/StatBlockDivider.svelte';
	import { dividerHeightThick, dividerHeightThin } from '..';

	export let dragon: DragonStats;
</script>

<PreambleHeader stats={dragon} />

<StatBlockDivider color={dragon.theme} height={dividerHeightThick} />

<PreambleACHPSpeed stats={dragon} />

<StatBlockDivider color={dragon.theme} height={dividerHeightThin} />

<PreambleAbilityScores stats={dragon} />

<StatBlockDivider color={dragon.theme} height={dividerHeightThin} />

<PreambleStatsList stats={dragon} />

<StatBlockDivider color={dragon.theme} height={dividerHeightThick} />
