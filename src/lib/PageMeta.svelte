<script lang="ts">
	export let title: string;
	export let type = 'website';
	export let description: string;
	export let url: string;
	// export let image = 'preview.png';
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />

	<meta property="og:type" content={type} />

	<meta name="description" content={description} />
	<meta property="og:description" content={description} />

	<meta property="og:url" content={url} />

	<!-- <meta property="og:image" content="%sveltekit.assets%/{image}" /> -->
</svelte:head>
