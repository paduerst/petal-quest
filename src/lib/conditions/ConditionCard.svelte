<script lang="ts">
	import type { Condition } from '.';
	import { capitalizeFirstLetter } from '$lib/text-utils';

	import StandardCard from '$lib/StandardCard.svelte';
	import CardCornerButtons from '$lib/CardCornerButtons.svelte';
	import ConditionDescription from './ConditionDescription.svelte';

	export let condition: Condition;
	export let showCloseButton = true;
	export let showUrlButton = true;

	let url = '';
	$: url = showUrlButton ? `/conditions/${condition}/` : '';
</script>

<StandardCard>
	<CardCornerButtons on:click {showCloseButton} {url} />

	<div class="card-header rounded-t-[--theme-rounded-container]">
		<h1 class="condition-name">{capitalizeFirstLetter(condition)}</h1>
	</div>

	<div class="p-4 pt-0">
		<ConditionDescription {condition} />
	</div>
</StandardCard>

<style>
	.condition-name {
		font-size: 1.5rem;
		margin: 0;
		padding: 0;
	}
</style>
