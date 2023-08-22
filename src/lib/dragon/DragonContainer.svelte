<script lang="ts">
	import { type RGB, COLOR_TO_THEME } from '.';
	export let dragonTheme: RGB | undefined = undefined;

	let rainbowBorder: Boolean;
	$: rainbowBorder = dragonTheme === undefined;
</script>

<div
	class="dragon-container"
	class:rainbowBorder
	style="--theme-dragon: {dragonTheme}; --theme-red: {COLOR_TO_THEME.red}; --theme-orange: {COLOR_TO_THEME.orange}; --theme-yellow: {COLOR_TO_THEME.yellow}; --theme-green: {COLOR_TO_THEME.green}; --theme-blue: {COLOR_TO_THEME.blue}; --theme-indigo: {COLOR_TO_THEME.indigo}; --theme-violet: {COLOR_TO_THEME.violet};"
>
	<div class="dragon-container-top-edge" />
	<div class="p-3 min-h-[310px]">
		<slot />
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

		transition: border-color linear 1s;
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

	@keyframes rainbow-border {
		0% {
			border-color: var(--theme-red);
		}
		12.5% {
			border-color: var(--theme-orange);
		}
		25% {
			border-color: var(--theme-yellow);
		}
		37.5% {
			border-color: var(--theme-green);
		}
		50% {
			border-color: var(--theme-blue);
		}
		62.5% {
			border-color: var(--theme-indigo);
		}
		75% {
			border-color: var(--theme-violet);
		}
		87.5% {
			/* TODO: Replace with magenta theme when added. */
			border-color: rgb(173, 12, 117);
		}
		100% {
			border-color: var(--theme-red);
		}
	}

	.dragon-container.rainbowBorder {
		animation: rainbow-border 8s linear infinite;
		/* border-color: black; */
	}
</style>
