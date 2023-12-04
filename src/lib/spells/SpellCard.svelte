<script lang="ts">
	import type { AppSpell } from '.';

	import StandardCard from '$lib/StandardCard.svelte';
	import Spell from './Spell.svelte';

	export let spell: AppSpell;
</script>

<StandardCard>
	<Spell {spell} />
</StandardCard>
