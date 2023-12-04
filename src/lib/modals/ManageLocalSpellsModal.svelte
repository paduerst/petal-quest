<script lang="ts">
	import { onDestroy } from 'svelte';

	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';

	import { localSpellURLs } from '$lib/spells/local-spells';
	import type {
		SkeletonModalParentType,
		ManageLocalSpellsModalValue,
		AddLocalSpellModalValue
	} from '.';

	import ModalScrollableContainer from './ModalScrollableContainer.svelte';
	import StandardCard from '$lib/StandardCard.svelte';
	import CardCornerButtons from '$lib/CardCornerButtons.svelte';

	const modalStore = getModalStore();
	const settingsForAddLocalSpell: ModalSettings = {
		type: 'component',
		component: 'addLocalSpell'
	};

	export let parent: SkeletonModalParentType;

	let spellInfo: ManageLocalSpellsModalValue = $modalStore[0].value;

	function onCancel() {
		parent.onClose();
	}

	function onAdd() {
		parent.onClose();

		const valueForAddLocalSpell: AddLocalSpellModalValue = {
			onDestroyFocusElement: spellInfo.onDestroyFocusElement,
			fromManage: true
		};
		settingsForAddLocalSpell.value = valueForAddLocalSpell;
		spellInfo.onDestroyFocusElement = undefined;
		modalStore.trigger(settingsForAddLocalSpell);
	}

	function onEdit(spell: string) {
		parent.onClose();

		const valueForAddLocalSpell: AddLocalSpellModalValue = {
			name: spell,
			onDestroyFocusElement: spellInfo.onDestroyFocusElement,
			fromManage: true
		};
		settingsForAddLocalSpell.value = valueForAddLocalSpell;
		spellInfo.onDestroyFocusElement = undefined;
		modalStore.trigger(settingsForAddLocalSpell);
	}

	function onDelete(spell: string) {
		localSpellURLs.remove(spell);
	}

	onDestroy(() => {
		if (spellInfo.onDestroyFocusElement !== undefined) {
			spellInfo.onDestroyFocusElement.focus();
		}
	});
</script>

{#if $modalStore[0]}
	<ModalScrollableContainer>
		<StandardCard>
			<CardCornerButtons on:click={parent.onClose} />

			<div class="p-4">
				<h1 class="spell-name mb-6">Local Spell URLs</h1>
				{#if Object.keys($localSpellURLs).length === 0}
					<p>No spell URLs in local storage!</p>
				{:else}
					<ul class="flex flex-col">
						{#each Object.keys($localSpellURLs) as spell}
							<li class="card variant-filled p-2 mx-2 my-1 flex flex-nowrap gap-2 w-full min-w-fit">
								<button class="btn variant-filled-error" on:click={() => onDelete(spell)}
									>Delete</button
								>
								<button class="btn variant-filled-primary" on:click={() => onEdit(spell)}
									>Edit</button
								>
								<div class="card variant-filled-surface p-2 w-full">
									<p>{spell}</p>
									<a href={$localSpellURLs[spell]} target="_blank">
										{$localSpellURLs[spell]}
									</a>
								</div>
							</li>
						{/each}
					</ul>
				{/if}
			</div>

			<footer class="p-4 {parent.regionFooter}">
				<button class="btn {parent.buttonNeutral}" on:click={onCancel}> Cancel </button>
				<button class="btn {parent.buttonPositive}" on:click={onAdd}> Add Spell URL </button>
			</footer>
		</StandardCard>
	</ModalScrollableContainer>
{/if}
