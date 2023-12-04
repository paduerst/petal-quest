<script lang="ts">
	import type { PageData } from './$types';
	import { capitalizeFirstLetter } from '$lib/text-utils';

	import PageMeta from '$lib/PageMeta.svelte';
	import ConditionCard from '$lib/conditions/ConditionCard.svelte';

	const showButtons = false;

	export let data: PageData;
</script>

<PageMeta
	title={`${capitalizeFirstLetter(data.condition)} - Conditions - Petal Quest`}
	description="Conditions for 5th edition from the SRD."
	url={`https://www.petalquest.com/conditions/${data.condition}/`}
/>

<ConditionCard
	condition={data.condition}
	showCloseButton={showButtons}
	showUrlButton={showButtons}
/>
