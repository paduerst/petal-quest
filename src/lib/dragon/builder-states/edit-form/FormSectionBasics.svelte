<script lang="ts">
	import type { DragonConfig } from '$lib/dragon';
	import FormSubsectionWelcome from './FormSubsectionWelcome.svelte';

	export let config: DragonConfig;
</script>

<div class="flex flex-col items-center w-full">
	<FormSubsectionWelcome {config} />

	<div class="daisy-form-control w-full max-w-sm m-1">
		<label class="daisy-label" for="name">
			<span class="daisy-label-text">Name</span>
		</label>
		<input
			type="text"
			bind:value={config.name}
			placeholder={'Referred to as "the dragon" by default'}
			class="daisy-input daisy-input-bordered bg-white"
			name="name"
			data-1p-ignore
		/>
	</div>

	<div class="daisy-form-control w-full max-w-sm m-1">
		<label class="daisy-label" for="alignment">
			<span class="daisy-label-text">Alignment</span>
		</label>
		<input
			type="text"
			bind:value={config.alignment}
			placeholder="Defaults to typical alignment for this color"
			class="daisy-input daisy-input-bordered bg-white"
			name="alignment"
			data-1p-ignore
		/>
	</div>
</div>
