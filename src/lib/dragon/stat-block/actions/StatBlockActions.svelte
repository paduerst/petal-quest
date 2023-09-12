<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import ActionAttacks from './ActionAttacks.svelte';

	export let dragon: DragonStats;
</script>

<div class="break-inside-avoid">
	<h5 class="dragon-heading-font text-xl" style="color: {dragon.theme};">Actions</h5>
	<hr />
</div>

<ActionAttacks {dragon} />
