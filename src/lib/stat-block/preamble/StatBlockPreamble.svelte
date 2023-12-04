<script lang="ts">
	import type { StatsForPreamble } from '.';
	import { dividerHeightThick, dividerHeightThin } from '$lib/stat-block';

	import PreambleHeader from './PreambleHeader.svelte';
	import PreambleACHPSpeed from './PreambleACHPSpeed.svelte';
	import PreambleAbilityScores from './PreambleAbilityScores.svelte';
	import PreambleStatsList from './PreambleStatsList.svelte';
	import StatBlockDivider from '$lib/stat-block/StatBlockDivider.svelte';

	export let stats: StatsForPreamble;
</script>

<PreambleHeader {stats} />

<StatBlockDivider color={stats.theme} height={dividerHeightThick} />

<PreambleACHPSpeed {stats} />

<StatBlockDivider color={stats.theme} height={dividerHeightThin} />

<PreambleAbilityScores {stats} />

<StatBlockDivider color={stats.theme} height={dividerHeightThin} />

<PreambleStatsList {stats} />

<StatBlockDivider color={stats.theme} height={dividerHeightThick} />
