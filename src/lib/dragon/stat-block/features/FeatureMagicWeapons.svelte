<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';

	export let dragon: DragonStats;
</script>

<div class="dragon-trait">
	<p>
		<i><b>Magic Weapons.</b></i>
		{dragon.nameUpper}'s weapon attacks are magical.
	</p>
</div>
