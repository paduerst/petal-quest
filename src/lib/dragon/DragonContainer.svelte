<script lang="ts">
	import { COLOR_TO_THEME, COLORS } from '.';
	import type { DragonConfig } from './dragon-config';
	import type { RGB } from '$lib/text-utils';

	import StatBlockContainer from '$lib/stat-block/StatBlockContainer.svelte';

	export let config: DragonConfig | undefined = undefined;
	let dragonTheme: RGB;

	let iColor = 0;
	const iColorNext = () => {
		iColor = (iColor + 1) % COLORS.length;
	};
	let colorInterval: ReturnType<typeof setInterval>;
	$: if (config === undefined) {
		colorInterval = setInterval(iColorNext, 1000);
	} else {
		clearInterval(colorInterval);
	}

	$: if (config == undefined) {
		dragonTheme = COLOR_TO_THEME[COLORS[iColor]];
	} else {
		dragonTheme = config.theme;
	}
</script>

<StatBlockContainer theme={dragonTheme}>
	<slot />
</StatBlockContainer>
