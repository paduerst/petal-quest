<script lang="ts">
	import { PETAL_MONSTERS, PETAL_MONSTER_TITLES } from '$lib/monsters/petal-monsters';
	import { SRD_MONSTERS, SRD_MONSTER_TITLES } from '$lib/monsters/srd-monsters';

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

<h2 class="mt-4">Homebrew Monsters</h2>

<ul>
	{#each PETAL_MONSTERS as monster}
		<li>
			<a href={getMonsterURL(monster)}>{PETAL_MONSTER_TITLES[monster]}</a>
		</li>
	{/each}
</ul>

<h2 class="mt-4">SRD Monsters</h2>

<ul>
	{#each SRD_MONSTERS as monster}
		<li>
			<a href={getMonsterURL(monster)}>{SRD_MONSTER_TITLES[monster]}</a>
		</li>
	{/each}
</ul>
