<script lang="ts">
	import '../app.postcss';

	import { afterNavigate } from '$app/navigation';
	import type { AfterNavigate } from '@sveltejs/kit';

	import { initializeStores, type ModalComponent } from '@skeletonlabs/skeleton';
	import { AppShell, Modal, Toast } from '@skeletonlabs/skeleton';
	import AbbrModal from '$lib/modals/AbbrModal.svelte';
	import AddLocalSpellModal from '$lib/modals/AddLocalSpellModal.svelte';
	import ConditionModal from '$lib/modals/ConditionModal.svelte';
	import ManageLocalSpellsModal from '$lib/modals/ManageLocalSpellsModal.svelte';
	import MonsterModal from '$lib/modals/MonsterModal.svelte';
	import DragonShareModal from '$lib/modals/DragonShareModal.svelte';
	import SpellModal from '$lib/modals/SpellModal.svelte';
	import Drawer from '$lib/Drawer.svelte';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';

	initializeStores();

	const modalComponentRegistry: Record<string, ModalComponent> = {
		abbrModal: {
			ref: AbbrModal
		},
		addLocalSpell: {
			ref: AddLocalSpellModal
		},
		conditionModal: {
			ref: ConditionModal
		},
		manageLocalSpells: {
			ref: ManageLocalSpellsModal
		},
		monsterModal: {
			ref: MonsterModal
		},
		dragonShare: {
			ref: DragonShareModal
		},
		spellModal: {
			ref: SpellModal
		}
	};

	afterNavigate((navigation: AfterNavigate) => {
		const isNewPage: boolean =
			navigation.from === null || navigation.to === null
				? false
				: navigation.from.route.id !== navigation.to.route.id;
		const elemPage = document.querySelector('#page');
		if (isNewPage && elemPage !== null) {
			elemPage.scrollTop = 0;
		}
	});

	const modalTransitionParams = {
		duration: 150,
		opacity: 0,
		x: 0,
		y: 0
	};
</script>

<Toast transitionOutParams={{ duration: 50 }} buttonDismiss="btn btn-icon-sm variant-filled" />

<Modal
	components={modalComponentRegistry}
	transitionInParams={modalTransitionParams}
	transitionOutParams={modalTransitionParams}
/>

<Drawer />

<AppShell scrollbarGutter="stable both-edges">
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>
	<main class="text-center">
		<div class="p-2 pb-16 print:p-0 mx-auto my-0 w-auto max-w-5xl">
			<slot />
		</div>
	</main>
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
