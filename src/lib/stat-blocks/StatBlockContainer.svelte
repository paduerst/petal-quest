<script lang="ts">
	import { type RGB, COLOR_TO_THEME } from '$lib/dragon';
	import { builderFadeParams } from '$lib/dragon/builder-states';
	export let theme: RGB = COLOR_TO_THEME['red'];

	let innerClientHeight: number;
	const minHeight = 300;
	let outerWrapperHeight: number;
	$: if (innerClientHeight < minHeight) {
		outerWrapperHeight = minHeight;
	} else {
		outerWrapperHeight = innerClientHeight;
	}

	let heightTransitionDuration =
		typeof builderFadeParams.duration === 'number'
			? Math.round(0.9 * builderFadeParams.duration)
			: 100;
</script>

<div class="stat-block-container" style="--stat-block-theme: {theme};">
	<div class="stat-block-container-top-edge" />
	<div
		class="outer-wrapper"
		style="--outer-wrapper-height: {outerWrapperHeight}px; min-height: {minHeight}px; transition: height {heightTransitionDuration}ms ease;"
		data-theme="statBlockContents"
	>
		<div class="inner-wrapper" bind:clientHeight={innerClientHeight}>
			<slot />
		</div>
	</div>
	<div class="stat-block-container-bot-edge" />
</div>

<style>
	.stat-block-container {
		@apply bg-neutral-200 text-black transition-all;
		--y-edge-height: 4px;
		--y-edge-border-width: calc(0.5 * var(--y-edge-height));
		--y-edge-x-offset: 2px;
		--x-border-width: 2px;
		--y-border-width: 4px;
		--extra-margin: 2px;
		border-color: var(--stat-block-theme);
		border-width: var(--y-border-width) var(--x-border-width);
		margin: calc(var(--extra-margin)) calc(var(--extra-margin) + var(--y-edge-x-offset));
		width: calc(100% - 2 * var(--extra-margin));

		transition: border-color linear 700ms;
	}

	.stat-block-container-top-edge,
	.stat-block-container-bot-edge {
		display: block;
		position: relative;
		height: var(--y-edge-height);
		border-color: inherit;
		border-width: var(--y-edge-border-width);
		box-sizing: border-box;
		left: calc(-1 * (var(--y-edge-x-offset) + var(--x-border-width)));
		width: calc(100% + 2 * (var(--y-edge-x-offset) + var(--x-border-width)));
	}

	.stat-block-container-top-edge {
		top: calc(-1 * var(--y-edge-height));
		margin-bottom: calc(-1 * var(--y-edge-height));
	}

	.stat-block-container-bot-edge {
		bottom: calc(-1 * var(--y-edge-height));
		margin-top: calc(-1 * var(--y-edge-height));
	}

	.outer-wrapper {
		@apply overflow-hidden;
		height: var(--outer-wrapper-height);
	}

	.inner-wrapper {
		@apply p-4 h-fit w-full inline-block;
	}

	@media print {
		.stat-block-container {
			margin: 0;
		}

		.stat-block-container-top-edge,
		.stat-block-container-bot-edge {
			display: none;
		}

		.outer-wrapper {
			height: fit-content;
		}
	}
</style>
