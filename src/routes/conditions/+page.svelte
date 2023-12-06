<script lang="ts">
	import { CONDITIONS } from '$lib/conditions';

	import PageMeta from '$lib/PageMeta.svelte';
	import ConditionCard from '$lib/conditions/ConditionCard.svelte';

	const headerIsLink = true;
</script>

<PageMeta
	title="Conditions - Petal Quest"
	description="Conditions for 5th edition from the SRD."
	url="https://www.petalquest.com/conditions/"
/>

<h1>Conditions</h1>
<p>Conditions from the SRD 5.1.</p>

<ul>
	{#each CONDITIONS as condition}
		<li class="my-4">
			<ConditionCard {condition} {headerIsLink} />
		</li>
	{/each}
</ul>
