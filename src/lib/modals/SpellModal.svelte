<script lang="ts">
	import { onDestroy } from 'svelte';

	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';

	import { stringToAppSpell, spellNameToURL } from '$lib/spells';
	import { stringToDDBSpell } from '$lib/spells/ddb-spells';
	import type {
		SkeletonModalParentType,
		SpellModalValue,
		AddLocalSpellModalValue,
		ManageLocalSpellsModalValue
	} from '.';

	import Spell from '$lib/spells/Spell.svelte';
	import ModalScrollableContainer from './ModalScrollableContainer.svelte';
	import CardCornerButtons from '$lib/CardCornerButtons.svelte';

	const modalStore = getModalStore();
	const settingsForManageLocalSpells: ModalSettings = {
		type: 'component',
		component: 'manageLocalSpells'
	};
	const settingsForAddLocalSpell: ModalSettings = {
		type: 'component',
		component: 'addLocalSpell'
	};

	export let parent: SkeletonModalParentType;

	let spellInfo: SpellModalValue = $modalStore[0].value;
	let asAppSpell = stringToAppSpell(spellInfo.id);
	let asDDBSpell = stringToDDBSpell(spellInfo.id);
	let spellURL = spellNameToURL(spellInfo.name);
	let additionalClasses = asAppSpell !== undefined ? 'w-11/12' : '';

	function manageLocalURLs() {
		parent.onClose();

		const valueForManageLocalSpells: ManageLocalSpellsModalValue = {
			onDestroyFocusElement: spellInfo.onDestroyFocusElement
		};
		settingsForManageLocalSpells.value = valueForManageLocalSpells;
		spellInfo.onDestroyFocusElement = undefined;
		modalStore.trigger(settingsForManageLocalSpells);
	}

	function addLocalURL() {
		parent.onClose();

		const valueForAddLocalSpell: AddLocalSpellModalValue = { ...spellInfo };
		settingsForAddLocalSpell.value = valueForAddLocalSpell;
		spellInfo.onDestroyFocusElement = undefined;
		modalStore.trigger(settingsForAddLocalSpell);
	}

	onDestroy(() => {
		if (spellInfo.onDestroyFocusElement !== undefined) {
			spellInfo.onDestroyFocusElement.focus();
		}
	});
</script>

{#if $modalStore[0]}
	<ModalScrollableContainer {additionalClasses}>
		<CardCornerButtons url={spellURL} on:click={parent.onClose} />

		{#if asAppSpell !== undefined}
			<Spell spell={asAppSpell} />
		{:else if spellURL.length > 0}
			<div class="p-4">
				<h1 class="spell-name mb-2">External Spell: {spellInfo.name}</h1>
				{#if asDDBSpell !== undefined}
					<p>This spell's description is on D&D Beyond:</p>
				{:else}
					<p>
						This spell isn't on this website, but this browser's local storage has the following URL
						for it:
					</p>
				{/if}
				<p><a href={spellURL} target="_blank">{spellURL}</a></p>
			</div>

			{#if asDDBSpell === undefined}
				<footer class="p-4 {parent.regionFooter}">
					<button class="btn {parent.buttonPositive}" on:click={manageLocalURLs}>
						Manage URLs in local storage
					</button>
				</footer>
			{/if}
		{:else}
			<div class="p-4">
				<h1 class="spell-name mb-2">Unknown Spell: {spellInfo.name}</h1>
				<p>This spell is not recognized.</p>
				<p>
					You can specify a URL for it which will be stored in this browser's local storage for
					future reference.
				</p>
			</div>

			<footer class="p-4 {parent.regionFooter}">
				<button class="btn {parent.buttonPositive}" on:click={addLocalURL}>
					Add URL for {spellInfo.name}
				</button>
			</footer>
		{/if}
	</ModalScrollableContainer>
{/if}
