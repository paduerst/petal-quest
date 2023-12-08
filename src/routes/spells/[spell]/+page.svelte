<script lang="ts">
	import type { PageData } from './$types';
	import PageMeta from '$lib/PageMeta.svelte';
	import SpellCard from '$lib/spells/SpellCard.svelte';
	import { APP_SPELL_VALS } from '$lib/spells';

	export let data: PageData;
</script>

<PageMeta
	title={`${APP_SPELL_VALS[data.spell].name} - Spells - Petal Quest`}
	description="Spells for 5th edition, both homebrew and from the SRD 5.1."
	url={`https://www.petalquest.com/spells/${data.spell}/`}
/>

<SpellCard spell={data.spell} />
