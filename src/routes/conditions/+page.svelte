<script lang="ts">
	import PageMeta from '$lib/PageMeta.svelte';
	import { CONDITIONS } from '$lib/conditions';
	import { capitalizeFirstLetter } from '$lib/text-utils';
</script>

<PageMeta
	title="Conditions - Petal Quest"
	description="Conditions for 5th edition from the SRD."
	url="https://www.petalquest.com/conditions/"
/>

<h2 class="mt-4">Conditions</h2>

<ul>
	{#each CONDITIONS as condition}
		<li>
			<a href={`${condition}/`}>{capitalizeFirstLetter(condition)}</a>
		</li>
	{/each}
</ul>
