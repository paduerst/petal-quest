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
	export let disableDescriptionLinks = false;

	let url = `/conditions/${condition}/`;
</script>

<StandardCard>
	<CardCornerButtons on:click {showCloseButton} url={showUrlButton ? url : ''} />

	<div class="card-header rounded-t-[--theme-rounded-container]">
		<h1 class="condition-name">
			{#if headerIsLink}
				<a href={url}>{capitalizeFirstLetter(condition)}</a>
			{:else}
				{capitalizeFirstLetter(condition)}
			{/if}
		</h1>
	</div>

	<div class="p-4 pt-0">
		<ConditionDescription {condition} disableLinks={disableDescriptionLinks} />
	</div>
</StandardCard>
