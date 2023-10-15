<script lang="ts">
	import { PETAL_SPELLS } from '$lib/spells/petal-spells';
	import { PETAL_SPELL_VALS } from '$lib/spells/petal-spells/petal-spell-vals';
	import { SRD_SPELLS } from '$lib/spells/srd-spells';
	import { SRD_SPELL_VALS } from '$lib/spells/srd-spells/srd-spell-vals';

	function getSpellURL(spellID: string): string {
		return `${spellID}/`;
	}
</script>

<h1>Spells</h1>

<p>This app has the following spells on it.</p>

<h2 class="mt-4">Homebrew Spells</h2>

<ul>
	{#each PETAL_SPELLS as spell}
		<li>
			<a href={getSpellURL(spell)}>{PETAL_SPELL_VALS[spell].name}</a>
		</li>
	{/each}
</ul>

<h2 class="mt-4">SRD Spells</h2>

<ul>
	{#each SRD_SPELLS as spell}
		<li>
			<a href={getSpellURL(spell)}>{SRD_SPELL_VALS[spell].name}</a>
		</li>
	{/each}
</ul>
