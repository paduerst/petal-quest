<script lang="ts">
	import type { Condition } from '.';
	import { capitalizeFirstLetter } from '$lib/text-utils';

	import StandardCard from '$lib/StandardCard.svelte';
	import CardCornerButtons from '$lib/CardCornerButtons.svelte';
	import ConditionDescription from './ConditionDescription.svelte';

	export let condition: Condition;
	export let showCloseButton = false;
	export let showUrlButton = false;
	export let headerIsLink = false;

	let url = `/conditions/${condition}/`;
	let urlForButton = '';
	$: urlForButton = showUrlButton ? url : '';
</script>

<StandardCard>
	<CardCornerButtons on:click {showCloseButton} url={urlForButton} />

	<div class="card-header rounded-t-[--theme-rounded-container]">
		<h1 class="condition-name">
			{#if headerIsLink}
				<a href={url}> {capitalizeFirstLetter(condition)}</a>
			{:else}
				{capitalizeFirstLetter(condition)}
			{/if}
		</h1>
	</div>

	<div class="p-4 pt-0">
		<ConditionDescription {condition} />
	</div>
</StandardCard>
