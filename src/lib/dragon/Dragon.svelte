<div class="dragon-container">
	<div class="dragon-container-top-edge" />
	<p>This is the WIP dragon stat block. Beware!</p>
	<div class="dragon-container-bot-edge">
		<button class="dragon-edit-btn">Edit Dragon</button>
	</div>
</div>

<style>
	.dragon-container {
		@apply w-full bg-neutral-100 text-black;
		--dragon-theme-color: gray;
		--y-border-height: 6px;
		--y-border-x-offset: 2px;
		--x-border-width: 1px;
		border-color: black;
		border-width: var(--x-border-width);
	}

	.dragon-edit-btn {
		@apply btn btn-sm variant-filled-warning;
	}

	.dragon-container-top-edge,
	.dragon-container-bot-edge {
		display: block;
		position: relative;
		background-color: var(--dragon-theme-color);
		border-color: black;
		border-width: 1px;
		box-sizing: border-box;
		left: calc(-1 * (var(--y-border-x-offset) + var(--x-border-width)));
		width: calc(100% + 2 * (var(--y-border-x-offset) + var(--x-border-width)));
	}

	.dragon-container-top-edge {
		top: calc(-1 * var(--y-border-height));
		height: var(--y-border-height);
	}

	.dragon-container-bot-edge {
		bottom: calc(-1 * var(--y-border-height));
	}

	@media print {
		.dragon-container-bot-edge {
			height: var(--y-border-height);
		}
		.dragon-container-bot-edge * {
			display: none;
		}
	}
</style>
