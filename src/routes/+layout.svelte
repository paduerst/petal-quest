<script lang="ts">
	// Your selected Skeleton theme:
	import '../theme.postcss';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	import '../app.postcss';
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
</script>

<Header />

<main class="bg-surface-500">
	<div class="main-contents-wrapper">
		<slot />
	</div>
</main>

<Footer />

<style lang="scss">
	main {
		width: 100%;
	}

	.main-contents-wrapper {
		padding: 8px 12px;
		margin: 0 auto;
		width: auto;
		max-width: 1200px;
	}
</style>
