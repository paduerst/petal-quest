<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';

	export let dragon: DragonStats;
</script>

{#if dragon.age === 'cosmic'}
	<div class="dragon-action">
		<p>
			<i><b>Change Cosmic Form.</b></i>
			{dragon.nameUpper} enters or attempts to exit
			{dragon.pronounPossessiveAdjective} cosmic form.
		</p>
	</div>
{/if}
