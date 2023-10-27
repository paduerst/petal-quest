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

	import { onMount } from 'svelte';

	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();

	import { localSpellURLs } from '$lib/spells/local-spells';

	const addLocalSpell: ModalSettings = {
		type: 'component',
		component: 'addLocalSpell'
	};

	import SpellCornerButtons from '$lib/spells/SpellCornerButtons.svelte';

	let divElement: HTMLDivElement;
	onMount(() => {
		divElement.scrollTo(0, 0);
	});

	const baseClasses = 'card max-w-4xl shadow-xl space-y-4 max-h-[80vh] overflow-y-auto';
	let modalClasses = `${baseClasses}`;

	function onCancel() {
		parent.onClose();
	}

	function onAdd() {
		parent.onClose();
		addLocalSpell.value = { fromManage: true };
		modalStore.trigger(addLocalSpell);
	}

	function onEdit(spell: string) {
		parent.onClose();
		addLocalSpell.value = {
			name: spell,
			fromManage: true
		};
		modalStore.trigger(addLocalSpell);
	}

	function onDelete(spell: string) {
		localSpellURLs.remove(spell);
	}
</script>

{#if $modalStore[0]}
	<div class={modalClasses} bind:this={divElement}>
		<div class="card text-token text-left relative">
			<SpellCornerButtons on:click={parent.onClose} />

			<div class="p-4">
				<h1 class="spell-name mb-2">Local Spell URLs</h1>
				{#if Object.keys($localSpellURLs).length === 0}
					<p>No spell URLs in local storage!</p>
				{:else}
					<ul>
						{#each Object.keys($localSpellURLs) as spell}
							<li class="card variant-filled p-2 flex">
								<button class="btn variant-filled-error m-1" on:click={() => onDelete(spell)}
									>Delete</button
								>
								<button class="btn variant-filled-primary m-1" on:click={() => onEdit(spell)}
									>Edit</button
								>
								<div class="card variant-filled-surface p-2 m-1">
									{spell}
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
		</div>
	</div>
{/if}
