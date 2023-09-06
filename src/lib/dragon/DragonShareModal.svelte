<script lang="ts" context="module">
	let shareDialog: HTMLDialogElement;

	export function openShareDialog() {
		shareDialog.showModal();
	}
</script>

<script lang="ts">
	import type { DragonConfig } from '.';

	export let config: DragonConfig | undefined;
</script>

<dialog bind:this={shareDialog} class="daisy-modal daisy-modal-bottom sm:daisy-modal-middle">
	<form method="dialog" class="daisy-modal-box">
		<h3 class="font-bold text-lg">Hello!</h3>
		<p>
			This is the WIP dragon share modal. Eventually there will be buttons you can press for
			printing or copying the sharable URL. For now, here's the config: {JSON.stringify(config)}.
		</p>
		<p>Press ESC key or click the button below to close</p>
		<div class="daisy-modal-action">
			<button class="btn variant-filled-surface">Close</button>
		</div>
	</form>
</dialog>
