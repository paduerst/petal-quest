<script lang="ts">
	import { type RGB, COLOR_TO_THEME, COLORS, DragonConfig } from '.';
	import { builderFadeParams } from './builder-states';
	export let config: DragonConfig | undefined = undefined;
	let dragonTheme: RGB;

	let iColor = 0;
	const iColorNext = () => {
		iColor = (iColor + 1) % COLORS.length;
	};
	let colorInterval: NodeJS.Timeout;
	$: if (config === undefined) {
		colorInterval = setInterval(iColorNext, 1000);
	} else {
		clearInterval(colorInterval);
	}

	$: if (config == undefined) {
		dragonTheme = COLOR_TO_THEME[COLORS[iColor]];
	} else {
		dragonTheme = config.getTheme();
	}

	let innerClientHeight: number;
	const minHeight: number = 300;
	let outerWrapperHeight: number;
	$: if (innerClientHeight < minHeight) {
		outerWrapperHeight = minHeight;
	} else {
		outerWrapperHeight = innerClientHeight;
	}
</script>

<div class="dragon-container" style="--theme-dragon: {dragonTheme};">
	<div class="dragon-container-top-edge" />
	<div
		class="outer-wrapper"
		style="--outer-wrapper-height: {outerWrapperHeight}px; min-height: {minHeight}px; transition: height {builderFadeParams.duration}ms ease;"
		data-theme="statBlockContents"
	>
		<div class="inner-wrapper" bind:clientHeight={innerClientHeight}>
			<slot />
		</div>
	</div>
	<div class="dragon-container-bot-edge" />
</div>

<style>
	.dragon-container {
		@apply bg-neutral-200 text-black transition-all;
		--y-edge-height: 4px;
		--y-edge-border-width: calc(0.5 * var(--y-edge-height));
		--y-edge-x-offset: 2px;
		--x-border-width: 2px;
		--extra-margin: 2px;
		border-color: var(--theme-dragon);
		border-width: var(--x-border-width);
		margin: calc(var(--extra-margin) + var(--y-edge-height))
			calc(var(--extra-margin) + var(--y-edge-x-offset));
		width: calc(100% - 2 * var(--extra-margin));

		transition: border-color linear 700ms;
	}

	.dragon-container-top-edge,
	.dragon-container-bot-edge {
		display: block;
		position: relative;
		height: var(--y-edge-height);
		border-color: inherit;
		border-width: var(--y-edge-border-width);
		box-sizing: border-box;
		left: calc(-1 * (var(--y-edge-x-offset) + var(--x-border-width)));
		width: calc(100% + 2 * (var(--y-edge-x-offset) + var(--x-border-width)));
	}

	.dragon-container-top-edge {
		top: calc(-1 * var(--y-edge-height));
		margin-bottom: calc(-1 * var(--y-edge-height));
	}

	.dragon-container-bot-edge {
		bottom: calc(-1 * var(--y-edge-height));
		margin-top: calc(-1 * var(--y-edge-height));
	}

	.outer-wrapper {
		@apply overflow-hidden;
		height: var(--outer-wrapper-height);
	}

	@media print {
		.outer-wrapper {
			height: fit-content;
		}
	}

	.inner-wrapper {
		@apply p-3 h-fit w-full inline-block;
	}
</style>
