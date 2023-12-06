<script lang="ts">
	import { PETAL_SPELLS } from '$lib/spells/petal-spells';
	import { SRD_SPELLS } from '$lib/spells/srd-spells';

	import PageMeta from '$lib/PageMeta.svelte';
	import SpellPreview from '$lib/spells/SpellPreview.svelte';
</script>

<PageMeta
	title="Spells - Petal Quest"
	description="Spells for 5th edition, both homebrew and from the SRD."
	url="https://www.petalquest.com/spells/"
/>

<h1>Spells</h1>
<p>This page lists all the spells on this website.</p>
<p>
	You're not really meant to use this page, as it's rather unwieldy in its length, and we haven't
	put in the time yet to make it more user-friendly.
</p>

<h2 class="mt-4">Homebrew Spells</h2>
<p>Spells created by Petal Quest.</p>
<ul>
	{#each PETAL_SPELLS as spell}
		<li class="my-2 max-w-xl mx-auto">
			<SpellPreview {spell} />
		</li>
	{/each}
</ul>

<h2 class="mt-4">SRD Spells</h2>
<p>Spells from the SRD 5.1.</p>
<ul>
	{#each SRD_SPELLS as spell}
		<li class="my-2 max-w-xl mx-auto">
			<SpellPreview {spell} />
		</li>
	{/each}
</ul>
