<script lang="ts">
	import type { StatsForPreambleHeader } from '.';

	export let stats: StatsForPreambleHeader;
</script>

<div class="stat-block-header">
	<div>
		<h4 class="stat-block-title">{stats.title}</h4>
		<p class="stat-block-subheading">{stats.size} {stats.type}, {stats.alignment}</p>
	</div>
</div>
