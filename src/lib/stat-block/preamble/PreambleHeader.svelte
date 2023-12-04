<script lang="ts">
	import type { Size } from '$lib/dragon';

	export let stats: {
		title: string;
		size: Size;
		type: string;
		alignment: string;
	};
</script>

<div class="stat-block-header">
	<div>
		<h4 class="stat-block-title">{stats.title}</h4>
		<p class="stat-block-subheading">{stats.size} {stats.type}, {stats.alignment}</p>
	</div>
</div>
