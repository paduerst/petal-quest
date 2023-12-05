<script lang="ts">
	import type { RGB } from '$lib/text-utils';

	export let color: RGB;
	export let height = '1px';
	export let classes = '';
</script>

<div class="my-1 {classes}" style="height: {height};">
	<svg width="100%" height="100%">
		<defs>
			<linearGradient id="Gradient2" x1="0" x2="1" y1="0" y2="0">
				<stop offset="0%" stop-color={color} />
				<stop offset="90%" stop-color={color} stop-opacity="0.2" />
				<stop offset="100%" stop-color={color} stop-opacity="0" />
			</linearGradient>
		</defs>

		<rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient2)" />
	</svg>
</div>
