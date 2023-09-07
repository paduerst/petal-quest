<script lang="ts">
	import { dragonBuilderHistory } from '.';
	import DragonConfigPreview from '../DragonConfigPreview.svelte';
</script>

<div>
	{#each $dragonBuilderHistory as config}
		<DragonConfigPreview {config} />
	{/each}
</div>
