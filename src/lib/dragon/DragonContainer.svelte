<div class="dragon-container">
	<div class="dragon-container-top-edge" />
	<div class="p-3 min-h-[310px]">
		<slot />
	</div>
	<div class="dragon-container-bot-edge" />
</div>

<style>
	.dragon-container {
		@apply bg-neutral-200 text-black;
		--y-border-height: 7px;
		--y-border-x-offset: 2px;
		--x-border-width: 1px;
		--extra-margin: 0.25rem;
		border-color: black;
		border-width: var(--x-border-width);
		margin: calc(var(--extra-margin) + var(--y-border-height)) var(--extra-margin);
		width: calc(100% - 2 * var(--extra-margin));
	}

	.dragon-container-top-edge,
	.dragon-container-bot-edge {
		background: linear-gradient(
				to right,
				rgba(255, 0, 0, 1) 0%,
				rgba(255, 154, 0, 1) 10%,
				rgba(208, 222, 33, 1) 20%,
				rgba(79, 220, 74, 1) 30%,
				rgba(63, 218, 216, 1) 40%,
				rgba(47, 201, 226, 1) 50%,
				rgba(28, 127, 238, 1) 60%,
				rgba(95, 21, 242, 1) 70%,
				rgba(186, 12, 248, 1) 80%,
				rgba(251, 7, 217, 1) 90%,
				rgba(255, 0, 0, 1) 100%
			)
			0 0/200% 100%;
		animation: moving-gradient 5s linear infinite;

		display: block;
		position: relative;
		height: var(--y-border-height);
		border-color: black;
		border-width: 1px;
		box-sizing: border-box;
		left: calc(-1 * (var(--y-border-x-offset) + var(--x-border-width)));
		width: calc(100% + 2 * (var(--y-border-x-offset) + var(--x-border-width)));
	}

	@keyframes moving-gradient {
		to {
			background-position: -200% 0;
		}
	}

	.dragon-container-top-edge {
		top: calc(-1 * var(--y-border-height));
		margin-bottom: calc(-1 * var(--y-border-height));
	}

	.dragon-container-bot-edge {
		bottom: calc(-1 * var(--y-border-height));
		margin-top: calc(-1 * var(--y-border-height));
	}
</style>
