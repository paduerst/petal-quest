<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import PreambleHeader from '$lib/stat-block/preamble/PreambleHeader.svelte';
	import PreambleACHPSpeed from './PreambleACHPSpeed.svelte';
	import PreambleAbilityScores from '../../../stat-block/preamble/PreambleAbilityScores.svelte';
	import PreambleStatsList from './PreambleStatsList.svelte';
	import StatBlockDivider from '$lib/stat-block/StatBlockDivider.svelte';
	import { dividerHeightThick, dividerHeightThin } from '..';

	export let dragon: DragonStats;
</script>

<PreambleHeader stats={dragon} />

<StatBlockDivider color={dragon.theme} height={dividerHeightThick} />

<PreambleACHPSpeed {dragon} />

<StatBlockDivider color={dragon.theme} height={dividerHeightThin} />

<PreambleAbilityScores stats={dragon} />

<StatBlockDivider color={dragon.theme} height={dividerHeightThin} />

<PreambleStatsList {dragon} />

<StatBlockDivider color={dragon.theme} height={dividerHeightThick} />
