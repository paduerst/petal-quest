<script lang="ts">
	import { SRD_MONSTERS } from '$lib/monsters/srd-monsters';
	import { capitalizeFirstLetter } from '$lib/text-utils';

	import PageMeta from '$lib/PageMeta.svelte';

	function getMonsterURL(monster: string): string {
		return `${monster}/`;
	}
</script>

<PageMeta
	title="Monsters - Petal Quest"
	description="Monsters for 5th edition, from the SRD."
	url="https://www.petalquest.com/monsters/"
/>

<h2 class="mt-4">SRD Monsters</h2>

<ul>
	{#each SRD_MONSTERS as monster}
		<li>
			<a href={getMonsterURL(monster)}>{capitalizeFirstLetter(monster)}</a>
		</li>
	{/each}
</ul>
