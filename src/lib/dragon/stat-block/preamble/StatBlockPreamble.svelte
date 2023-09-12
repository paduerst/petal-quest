<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import PreambleHeader from './PreambleHeader.svelte';
	import PreambleACHPSpeed from './PreambleACHPSpeed.svelte';
	import PreambleAbilityScores from './PreambleAbilityScores.svelte';
	import PreambleStatsList from './PreambleStatsList.svelte';

	export let dragon: DragonStats;
</script>

<PreambleHeader {dragon} />

<hr />

<PreambleACHPSpeed {dragon} />

<hr />

<PreambleAbilityScores {dragon} />

<hr />

<PreambleStatsList {dragon} />

<hr />
