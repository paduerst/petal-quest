<script lang="ts">
	import { PRISMATIC_DRAGONS, OTHER_PETAL_MONSTERS } from '$lib/monsters/petal-monsters';
	import { SRD_MONSTERS } from '$lib/monsters/srd-monsters';

	import PageMeta from '$lib/PageMeta.svelte';
	import MonsterPreview from '$lib/monsters/MonsterPreview.svelte';
</script>

<PageMeta
	title="Monsters - Petal Quest"
	description="Monsters for 5th edition, both homebrew and from the SRD."
	url="https://www.petalquest.com/monsters/"
/>

<h1>Monsters</h1>
<p>This page lists all the monsters on this website.</p>
<p>
	You're not really meant to use this page, as it's rather unwieldy in its length, and we haven't
	put in the time yet to make it more user-friendly.
</p>

<h2 class="mt-4">Homebrew Monsters</h2>
<p>Monsters created by Petal Quest.</p>

<h3 class="mt-2">The Prismatic Dragons</h3>
<p>The prismatic dragons are a new family of dragons for 5th edition.</p>
<ul>
	{#each PRISMATIC_DRAGONS as monster}
		<li class="my-2 max-w-xl mx-auto">
			<MonsterPreview {monster} />
		</li>
	{/each}
</ul>

<h3 class="mt-2">Other Homebrew Monsters</h3>
<p>These are other monsters created by Petal Quest.</p>
<ul>
	{#each OTHER_PETAL_MONSTERS as monster}
		<li class="my-2 max-w-xl mx-auto">
			<MonsterPreview {monster} />
		</li>
	{/each}
</ul>

<h2 class="mt-4">SRD Monsters</h2>
<p>Monsters from the SRD 5.1.</p>
<ul>
	{#each SRD_MONSTERS as monster}
		<li class="my-2 max-w-xl mx-auto">
			<MonsterPreview {monster} />
		</li>
	{/each}
</ul>
