<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';

	export let dragon: DragonStats;
</script>

<div class="dragon-header">
	<div>
		<h4 class="dragon-title" style="color: {dragon.theme};">{dragon.title}</h4>
		<p class="dragon-subheading">{dragon.size} Dragon (Prismatic), {dragon.alignment}</p>
	</div>
</div>
