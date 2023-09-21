<script lang="ts">
	import '../app.postcss';

	import { afterNavigate } from '$app/navigation';
	import type { AfterNavigate } from '@sveltejs/kit';

	import { initializeStores, type ModalComponent } from '@skeletonlabs/skeleton';
	import { AppShell, Modal, Toast } from '@skeletonlabs/skeleton';
	import DragonShare from '$lib/modals/DragonShare.svelte';
	import Drawer from '$lib/Drawer.svelte';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';

	initializeStores();

	const modalComponentRegistry: Record<string, ModalComponent> = {
		dragonShare: {
			ref: DragonShare
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
</script>

<Toast transitionOutParams={{ duration: 50 }} buttonDismiss="btn btn-icon-sm variant-filled" />

<Modal components={modalComponentRegistry} />

<Drawer />

<AppShell>
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>
	<main class="text-center">
		<div class="p-2 pb-4 print:p-0 mx-auto my-0 w-auto max-w-5xl">
			<slot />
		</div>
	</main>
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
