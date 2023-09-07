<script lang="ts">
	import { type DragonConfig, RGBToRGBA } from '.';

	export let config: DragonConfig;
</script>

<div
	class="daisy-card daisy-card-compact m-1 w-full max-w-xl shadow-xl"
	style="background: {RGBToRGBA(config.getTheme(), 0.1)};"
>
	<div class="daisy-card-body">
		<h2 class="daisy-card-title">{config.getTitle()}</h2>
		<p>{config.toString()}</p>
		<div class="daisy-card-actions justify-end">
			<button
				class="daisy-btn daisy-btn-outline hover:daisy-btn-error"
				on:click={() => {
					console.log('You clicked delete!');
				}}
			>
				Delete Dragon
			</button>
			<button
				class="daisy-btn daisy-btn-neutral text-white"
				on:click={() => {
					console.log('You clicked rebuild!');
				}}
			>
				Rebuild Dragon
			</button>
		</div>
	</div>
</div>
