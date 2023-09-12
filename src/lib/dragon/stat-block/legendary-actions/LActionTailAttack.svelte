<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';

	export let dragon: DragonStats;
</script>

<div class="monster-legendary-action">
	<p><b>Tail Attack.</b> {dragon.nameUpper} makes a Tail attack.</p>
</div>
