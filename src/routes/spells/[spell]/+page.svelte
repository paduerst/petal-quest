<script lang="ts">
	import type { PageData } from './$types';
	import PageMeta from '$lib/PageMeta.svelte';
	import Spell from '$lib/spells/Spell.svelte';
	import { APP_SPELL_VALS } from '$lib/spells';

	export let data: PageData;
</script>

<PageMeta
	title={`${APP_SPELL_VALS[data.spell].name} - Spells - Petal Quest`}
	description="Spells for 5th edition, both homebrew and from the SRD."
	url={`https://www.petalquest.com/spells/${data.spell}/`}
/>

<Spell spell={data.spell} />
