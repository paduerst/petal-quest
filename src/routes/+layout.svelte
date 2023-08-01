<script>
	import '../app.css';
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
</script>

<Header />

<main>
	<div class="main-contents-wrapper">
		<slot />
	</div>
</main>

<Footer />

<style lang="scss">
	main {
		width: 100%;
		background-color: rgb(127, 50, 118);
	}

	.main-contents-wrapper {
		padding: 0 16px;
		margin: 0 auto;
		width: auto;
		max-width: 1200px;
	}
</style>
