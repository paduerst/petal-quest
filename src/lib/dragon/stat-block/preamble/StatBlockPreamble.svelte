<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import PreambleHeader from './PreambleHeader.svelte';
	import PreambleACHPSpeed from './PreambleACHPSpeed.svelte';
	import PreambleAbilityScores from './PreambleAbilityScores.svelte';
	import PreambleStatsList from './PreambleStatsList.svelte';
	import StatBlockDivider from '../StatBlockDivider.svelte';
	import { dividerHeightThick, dividerHeightThin } from '..';

	export let dragon: DragonStats;
</script>

<PreambleHeader {dragon} />

<StatBlockDivider color={dragon.theme} height={dividerHeightThick} />

<PreambleACHPSpeed {dragon} />

<StatBlockDivider color={dragon.theme} height={dividerHeightThin} />

<PreambleAbilityScores {dragon} />

<StatBlockDivider color={dragon.theme} height={dividerHeightThin} />

<PreambleStatsList {dragon} />

<StatBlockDivider color={dragon.theme} height={dividerHeightThick} />
