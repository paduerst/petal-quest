<script lang="ts">
	import { onDestroy } from 'svelte';

	import { getModalStore } from '@skeletonlabs/skeleton';

	import type { SkeletonModalParentType, MonsterModalValue } from '.';

	import ModalScrollableContainer from './ModalScrollableContainer.svelte';
	import MonsterCard from '$lib/monsters/MonsterCard.svelte';

	const modalStore = getModalStore();
	const showButtons = true;

	export let parent: SkeletonModalParentType;

	let monsterInfo: MonsterModalValue = $modalStore[0].value;

	onDestroy(() => {
		if (monsterInfo.onDestroyFocusElement !== undefined) {
			monsterInfo.onDestroyFocusElement.focus();
		}
	});
</script>

{#if $modalStore[0]}
	<ModalScrollableContainer>
		<MonsterCard
			on:click={parent.onClose}
			monster={monsterInfo.monster}
			showCloseButton={showButtons}
			showUrlButton={showButtons}
			disableLinks={true}
		/>
	</ModalScrollableContainer>
{/if}
