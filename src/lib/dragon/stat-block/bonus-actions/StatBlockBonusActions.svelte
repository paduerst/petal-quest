<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import BActionFrightfulFlare from './BActionFrightfulFlare.svelte';
	import BActionVariableRadiance from './BActionVariableRadiance.svelte';

	export let dragon: DragonStats;
</script>

<div class="break-inside-avoid break-after-avoid">
	<h5 class="dragon-heading-font text-xl" style="color: {dragon.theme};">Bonus Actions</h5>
	<hr />
</div>

<BActionFrightfulFlare {dragon} />

<BActionVariableRadiance {dragon} />
