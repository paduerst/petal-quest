<script lang="ts">
	import type { PageData } from './$types';
	import { APP_SPELL_DESCRIPTIONS } from '$lib/spells';

	export let data: PageData;
</script>

<svelte:component this={APP_SPELL_DESCRIPTIONS[data.spell]} />
