<script lang="ts">
	import { type AppMonster, APP_MONSTER_STAT_BLOCKS } from '.';

	import StandardCard from '$lib/StandardCard.svelte';
	import CardCornerButtons from '$lib/CardCornerButtons.svelte';

	export let monster: AppMonster;
	export let showCloseButton = false;
	export let showUrlButton = false;

	let url = `/monsters/${monster}/`;
</script>

<StandardCard>
	<CardCornerButtons on:click {showCloseButton} url={showUrlButton ? url : ''} />

	<div class="p-4">
		<svelte:component this={APP_MONSTER_STAT_BLOCKS[monster]} />
	</div>
</StandardCard>
