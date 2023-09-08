<script lang="ts">
	import '../app.postcss';

	import { initializeStores } from '@skeletonlabs/skeleton';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Drawer from '$lib/Drawer.svelte';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';

	initializeStores();
</script>

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
