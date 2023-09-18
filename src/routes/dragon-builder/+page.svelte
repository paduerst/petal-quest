<script lang="ts">
	import DragonBuilder from '$lib/dragon/DragonBuilder.svelte';
	import { onMount } from 'svelte';
	import { currentDragonConfig } from '$lib/dragon/builder-states';

	const defaultTitle = 'Dragon Builder - Petal Quest';
	let pageTitle: string;
	$: pageTitle =
		$currentDragonConfig === undefined
			? defaultTitle
			: `${$currentDragonConfig.getTitle()} - ${defaultTitle}`;

	onMount(() => {
		pageTitle = defaultTitle;
	});
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<DragonBuilder />
