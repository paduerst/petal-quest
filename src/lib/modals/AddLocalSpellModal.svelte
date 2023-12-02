<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';

	import { isValidURL } from '$lib/text-utils';
	import { spellNameToID } from '$lib/spells';
	import { localSpellURLs } from '$lib/spells/local-spells';
	import type {
		SkeletonModalParentType,
		AddLocalSpellModalValue,
		ManageLocalSpellsModalValue
	} from '.';

	import SpellCornerButtons from '$lib/spells/SpellCornerButtons.svelte';

	const modalStore = getModalStore();
	const settingsForManageLocalSpells: ModalSettings = {
		type: 'component',
		component: 'manageLocalSpells'
	};
	const baseClasses = 'card max-w-4xl shadow-xl space-y-4 max-h-[80vh] overflow-y-auto';

	export let parent: SkeletonModalParentType;

	let spellInfo: AddLocalSpellModalValue = $modalStore[0].value;
	let currentSpellName: string = '';
	let currentSpellId: string = '';
	let currentSpellURL: string = '';
	let editNotAdd: boolean = false;
	let modalClasses = `${baseClasses}`;
	let divElement: HTMLDivElement;

	$: currentSpellId = spellNameToID(currentSpellName);

	function openLocalSpellsManager() {
		const valueForManageLocalSpells: ManageLocalSpellsModalValue = {
			onDestroyFocusElement: spellInfo.onDestroyFocusElement
		};
		settingsForManageLocalSpells.value = valueForManageLocalSpells;
		spellInfo.onDestroyFocusElement = undefined;
		modalStore.trigger(settingsForManageLocalSpells);
	}

	function closeAndPossiblyReopenManager() {
		parent.onClose();
		if (spellInfo.fromManage) {
			// re-open the manage local spells modal
			openLocalSpellsManager();
		}
	}

	function onSet() {
		if (isValidURL(currentSpellURL)) {
			const spellID = spellNameToID(currentSpellName);
			localSpellURLs.add(spellID, currentSpellURL);
		}
		closeAndPossiblyReopenManager();
	}

	onMount(() => {
		divElement.scrollTo(0, 0);
		if (spellInfo.name) {
			currentSpellName = spellInfo.name;

			const storedURL = $localSpellURLs[spellNameToID(currentSpellName)];
			if (storedURL !== undefined) {
				currentSpellURL = storedURL;
				editNotAdd = true;
			}
		}
	});

	onDestroy(() => {
		if (spellInfo.onDestroyFocusElement !== undefined) {
			spellInfo.onDestroyFocusElement.focus();
		}
	});
</script>

{#if $modalStore[0]}
	<div class={modalClasses} bind:this={divElement}>
		<div class="card text-token text-left relative">
			<SpellCornerButtons on:click={parent.onClose} />

			<div class="p-4">
				<h1 class="spell-name mb-2">{editNotAdd ? 'Edit' : 'Add'} Spell URL</h1>
				<p>
					Please specify the URL you want associated with this spell. This will only apply to this
					browser.
				</p>

				<div class="daisy-form-control w-full max-w-sm m-1">
					<label class="daisy-label" for="currentSpellName">
						<span class="daisy-label-text text-token">Spell Name</span>
					</label>
					<input
						type="text"
						bind:value={currentSpellName}
						class="daisy-input daisy-input-bordered"
						name="currentSpellName"
						id="currentSpellName"
						data-1p-ignore
					/>
				</div>

				<div class="daisy-form-control w-full max-w-sm m-1">
					<label class="daisy-label" for="currentSpellId">
						<span class="daisy-label-text text-token">Spell ID</span>
					</label>
					<input
						disabled
						type="text"
						bind:value={currentSpellId}
						class="daisy-input daisy-input-bordered"
						name="currentSpellId"
						id="currentSpellId"
						data-1p-ignore
					/>
				</div>

				<div class="daisy-form-control w-full max-w-sm m-1">
					<label class="daisy-label" for="currentSpellURL">
						<span class="daisy-label-text text-token">Spell URL</span>
					</label>
					<input
						type="text"
						bind:value={currentSpellURL}
						class="daisy-input daisy-input-bordered"
						name="currentSpellURL"
						id="currentSpellURL"
						data-1p-ignore
					/>
				</div>
			</div>

			<footer class="p-4 {parent.regionFooter}">
				<button class="btn {parent.buttonNeutral}" on:click={closeAndPossiblyReopenManager}>
					Cancel
				</button>
				<button class="btn {parent.buttonPositive}" on:click={onSet}> Set URL </button>
			</footer>
		</div>
	</div>
{/if}
