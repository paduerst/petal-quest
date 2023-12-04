<script lang="ts">
	import type { Condition } from '.';
	import { capitalizeFirstLetter } from '$lib/text-utils';

	import ConditionDescription from './ConditionDescription.svelte';

	export let condition: Condition;
</script>

<div class="card text-token text-left relative">
	<div class="card-header rounded-t-[--theme-rounded-container]">
		<h1 class="condition-name">{capitalizeFirstLetter(condition)}</h1>
	</div>

	<div class="p-4 pt-0">
		<ConditionDescription {condition} />
	</div>
</div>

<style>
	.condition-name {
		font-size: 1.5rem;
		margin: 0;
		padding: 0;
	}
</style>
