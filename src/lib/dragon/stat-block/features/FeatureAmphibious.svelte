<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';

	export let dragon: DragonStats;
</script>

{#if dragon.amphibious}
	<div class="dragon-trait break-inside-avoid">
		<p>
			<i><b>Amphibious.</b></i>
			{dragon.nameUpper} can breathe air and water.
		</p>
	</div>
{/if}
