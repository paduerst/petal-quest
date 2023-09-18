<script lang="ts">
	import { onMount } from 'svelte';

	import PageMeta from '$lib/PageMeta.svelte';
	import DragonBuilder from '$lib/dragon/DragonBuilder.svelte';
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

<PageMeta
	title={pageTitle}
	description="Build your own prismatic dragon stat block using the Dragon Builder."
	url="https://www.petalquest.com/dragon-builder/"
/>

<DragonBuilder />
