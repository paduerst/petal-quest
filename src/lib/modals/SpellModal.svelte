<script lang="ts">
	import type { SkeletonModalParentType } from '.';

	export let parent: SkeletonModalParentType;

	import { onMount, onDestroy } from 'svelte';

	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();

	const settingsForManageLocalSpells: ModalSettings = {
		type: 'component',
		component: 'manageLocalSpells'
	};

	const settingsForAddLocalSpell: ModalSettings = {
		type: 'component',
		component: 'addLocalSpell'
	};

	import { stringToAppSpell, spellNameToURL } from '$lib/spells';
	import { stringToDDBSpell } from '$lib/spells/ddb-spells';
	import Spell from '$lib/spells/Spell.svelte';
	import SpellCornerButtons from '$lib/spells/SpellCornerButtons.svelte';

	let spellInfo: { name: string; id: string; onDestroyFocusElement?: HTMLElement } =
		$modalStore[0].value;
	let asAppSpell = stringToAppSpell(spellInfo.id);
	let asDDBSpell = stringToDDBSpell(spellInfo.id);
	let spellURL = spellNameToURL(spellInfo.name);

	let divElement: HTMLDivElement;
	onMount(() => {
		divElement.scrollTo(0, 0);
	});

	const baseClasses = 'card max-w-4xl shadow-xl space-y-4 max-h-[80vh] overflow-y-auto';
	let modalClasses = `${baseClasses} ${asAppSpell !== undefined ? 'w-11/12' : ''}`;

	function manageLocalURLs() {
		parent.onClose();
		settingsForManageLocalSpells.value = {
			onDestroyFocusElement: spellInfo.onDestroyFocusElement
		};
		spellInfo.onDestroyFocusElement = undefined;
		modalStore.trigger(settingsForManageLocalSpells);
	}

	function addLocalURL() {
		parent.onClose();
		settingsForAddLocalSpell.value = { ...spellInfo };
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
	<div class={modalClasses} bind:this={divElement}>
		{#if asAppSpell !== undefined}
			<Spell spell={asAppSpell} showButtons on:click={parent.onClose} />
		{:else if spellURL.length > 0}
			<div class="card text-token text-left relative">
				<SpellCornerButtons {spellURL} on:click={parent.onClose} />

				<div class="p-4">
					<h1 class="spell-name mb-2">{spellInfo.name}</h1>
					{#if asDDBSpell !== undefined}
						<p>This spell's description is on D&D Beyond:</p>
					{:else}
						<p>
							This spell isn't on this website, but this browser's local storage has the following
							URL for it:
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
			</div>
		{:else}
			<div class="card text-token text-left relative">
				<SpellCornerButtons on:click={parent.onClose} />

				<div class="p-4">
					<h1 class="spell-name mb-2">{spellInfo.name}</h1>
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
			</div>
		{/if}
	</div>
{/if}
