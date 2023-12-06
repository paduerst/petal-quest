<script lang="ts">
	import { PETAL_MONSTERS } from '$lib/monsters/petal-monsters';
	import { PETAL_MONSTER_VALS } from '$lib/monsters/petal-monsters/petal-monster.vals';

	import { SRD_MONSTERS } from '$lib/monsters/srd-monsters';
	import { SRD_MONSTER_VALS } from '$lib/monsters/srd-monsters/srd-monster-vals';

	import PageMeta from '$lib/PageMeta.svelte';

	function getMonsterURL(monster: string): string {
		return `${monster}/`;
	}
</script>

<PageMeta
	title="Monsters - Petal Quest"
	description="Monsters for 5th edition, both homebrew and from the SRD."
	url="https://www.petalquest.com/monsters/"
/>

<h2 class="mt-4">Homebrew Monsters</h2>

<ul>
	{#each PETAL_MONSTERS as monster}
		<li>
			<a href={getMonsterURL(monster)}>{PETAL_MONSTER_VALS[monster].title}</a>
		</li>
	{/each}
</ul>

<h2 class="mt-4">SRD Monsters</h2>

<ul>
	{#each SRD_MONSTERS as monster}
		<li>
			<a href={getMonsterURL(monster)}>{SRD_MONSTER_VALS[monster].title}</a>
		</li>
	{/each}
</ul>
