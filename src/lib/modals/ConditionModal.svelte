<script lang="ts">
	import { onDestroy } from 'svelte';

	import { getModalStore } from '@skeletonlabs/skeleton';

	import type { SkeletonModalParentType, ConditionModalValue } from '.';

	import ModalScrollableContainer from './ModalScrollableContainer.svelte';
	import ConditionCard from '$lib/conditions/ConditionCard.svelte';

	const modalStore = getModalStore();
	const showButtons = true;

	export let parent: SkeletonModalParentType;

	let conditionInfo: ConditionModalValue = $modalStore[0].value;

	onDestroy(() => {
		if (conditionInfo.onDestroyFocusElement !== undefined) {
			conditionInfo.onDestroyFocusElement.focus();
		}
	});
</script>

{#if $modalStore[0]}
	<ModalScrollableContainer>
		<ConditionCard
			on:click={parent.onClose}
			condition={conditionInfo.condition}
			showCloseButton={showButtons}
			showUrlButton={showButtons}
		/>
	</ModalScrollableContainer>
{/if}
