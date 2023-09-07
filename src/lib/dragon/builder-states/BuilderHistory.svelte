<script lang="ts">
	import { dragonBuilderHistory } from '.';
	import DragonConfigPreview from '../DragonConfigPreview.svelte';
</script>

<div class="flex flex-col items-center">
	{#each $dragonBuilderHistory as config}
		<DragonConfigPreview {config} />
	{/each}
</div>
