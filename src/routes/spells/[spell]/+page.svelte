<script lang="ts">
	import type { PageData } from './$types';
	import Spell from '$lib/spells/Spell.svelte';

	export let data: PageData;
</script>

<Spell spell={data.spell} />
