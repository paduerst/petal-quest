<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import StatBlockACHPSpeed from './StatBlockACHPSpeed.svelte';
	import StatBlockAbilityScores from './StatBlockAbilityScores.svelte';
	import StatBlockStatsList from './StatBlockStatsList.svelte';

	export let dragon: DragonStats;
</script>

<hr />

<StatBlockACHPSpeed {dragon} />

<hr />

<StatBlockAbilityScores {dragon} />

<hr />

<StatBlockStatsList {dragon} />

<hr />
