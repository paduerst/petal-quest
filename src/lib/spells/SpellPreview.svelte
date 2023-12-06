<script lang="ts">
	import { type AppSpell, APP_SPELL_VALS } from '.';

	import StandardCard from '$lib/StandardCard.svelte';
	import Spell from './Spell.svelte';

	export let spell: AppSpell;

	let href = `/spells/${spell}/`;
</script>

<StandardCard>
	<a {href} class="p-2 block mx-auto w-fit text-lg">{APP_SPELL_VALS[spell].name}</a>
</StandardCard>
