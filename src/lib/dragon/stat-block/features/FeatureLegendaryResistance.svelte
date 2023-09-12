<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';

	export let dragon: DragonStats;
</script>

{#if dragon.legendaryResistances > 0}
	<div class="monster-trait">
		<p>
			<i><b>Legendary Resistance ({dragon.legendaryResistances}/Day).</b></i> If {dragon.name} fails
			a saving throw, {dragon.she} can choose to succeed instead.
		</p>
	</div>
{/if}
