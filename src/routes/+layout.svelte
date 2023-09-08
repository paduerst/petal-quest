<script lang="ts">
	import '../app.postcss';

	import { initializeStores, type ModalComponent } from '@skeletonlabs/skeleton';
	import { AppShell, Modal } from '@skeletonlabs/skeleton';
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
</script>

<Modal components={modalComponentRegistry} />

<Drawer />

<AppShell>
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>
	<main class="text-center">
		<div class="p-4 px-2 mx-auto my-0 w-auto max-w-5xl">
			<slot />
		</div>
	</main>
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
