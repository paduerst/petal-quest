<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import BActionFrightfulFlare from './BActionFrightfulFlare.svelte';
	import BActionSupernova from './BActionSupernova.svelte';
	import BActionVariableRadiance from './BActionVariableRadiance.svelte';
	import StatBlockDivider from '../StatBlockDivider.svelte';
	import { dividerHeightThin } from '..';

	export let dragon: DragonStats;
</script>

<div class="break-inside-avoid break-after-avoid">
	<h5 class="dragon-heading-font text-xl">Bonus Actions</h5>
	<StatBlockDivider color={dragon.theme} height={dividerHeightThin} classes={'mt-0'} />
</div>

<BActionFrightfulFlare {dragon} />

<BActionSupernova {dragon} />

<BActionVariableRadiance {dragon} />
