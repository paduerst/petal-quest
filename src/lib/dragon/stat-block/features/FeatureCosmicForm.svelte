<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';

	export let dragon: DragonStats;
</script>

{#if dragon.age === 'cosmic'}
	<div class="stat-block-trait break-inside-avoid">
		<p>
			<i><b>Cosmic Form ({dragon.cosmicForm}).</b></i>
			{dragon.nameUpper} has a cosmic form.
		</p>
	</div>
{/if}
