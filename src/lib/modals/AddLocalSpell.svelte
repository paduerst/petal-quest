<script lang="ts">
	// Props
	/** Exposes parent props to this component. */
	export let parent: {
		position: string;
		// ---
		background: string;
		width: string;
		height: string;
		padding: string;
		spacing: string;
		rounded: string;
		shadow: string;
		// ---
		buttonNeutral: string;
		buttonPositive: string;
		buttonTextCancel: string;
		buttonTextConfirm: string;
		buttonTextSubmit: string;
		// ---
		regionBackdrop: string;
		regionHeader: string;
		regionBody: string;
		regionFooter: string;
		// ---
		onClose: () => void;
	};

	import { onMount, onDestroy } from 'svelte';

	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();

	import { isValidURL } from '$lib/text-utils';
	import { spellNameToID } from '$lib/spells';
	import { localSpellURLs } from '$lib/spells/local-spells';

	const manageLocalSpells: ModalSettings = {
		type: 'component',
		component: 'manageLocalSpells'
	};

	import SpellCornerButtons from '$lib/spells/SpellCornerButtons.svelte';

	let spellInfo: {
		name?: string;
		id?: string;
		onDestroyFocusElement?: HTMLElement;
		fromManage?: boolean;
	} = $modalStore[0].value;

	let currentSpellName: string = '';
	let currentSpellURL: string = '';
	let editNotAdd: boolean = false;

	let divElement: HTMLDivElement;
	onMount(() => {
		divElement.scrollTo(0, 0);
		if (spellInfo.name) {
			currentSpellName = spellInfo.name;

			const spellID = spellNameToID(currentSpellName);
			const storedURL = $localSpellURLs[spellID];
			if (storedURL !== undefined) {
				currentSpellURL = storedURL;
				editNotAdd = true;
			}
		}
	});

	const baseClasses = 'card max-w-4xl shadow-xl space-y-4 max-h-[80vh] overflow-y-auto';
	let modalClasses = `${baseClasses}`;

	function openLocalSpellsManager() {
		manageLocalSpells.value = {
			onDestroyFocusElement: spellInfo.onDestroyFocusElement
		};
		spellInfo.onDestroyFocusElement = undefined;
		modalStore.trigger(manageLocalSpells);
	}

	function onCancel() {
		parent.onClose();
		if (spellInfo.fromManage) {
			// re-open the manage local spells modal
			openLocalSpellsManager();
		}
	}

	function onSet() {
		parent.onClose();
		if (isValidURL(currentSpellURL)) {
			const spellID = spellNameToID(currentSpellName);
			localSpellURLs.add(spellID, currentSpellURL);
		}
		if (spellInfo.fromManage) {
			// re-open the manage local spells modal
			openLocalSpellsManager();
		}
	}

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
				<button class="btn {parent.buttonNeutral}" on:click={onCancel}> Cancel </button>
				<button class="btn {parent.buttonPositive}" on:click={onSet}> Set URL </button>
			</footer>
		</div>
	</div>
{/if}
