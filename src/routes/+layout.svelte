<script lang="ts">
	// Your selected Skeleton theme:
	import '../theme.postcss';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	import '../app.postcss';

	import { AppShell } from '@skeletonlabs/skeleton';
	import Drawer from '$lib/Drawer.svelte';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Drawer />

<AppShell>
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>
	<main class="text-center">
		<div class="p-4 mx-auto my-0 w-auto max-w-6xl">
			<slot />
		</div>
	</main>
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
