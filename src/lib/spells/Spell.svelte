<script lang="ts">
	import type { AppSpell } from '.';
	import SpellHeader from './SpellHeader.svelte';
	import SpellDescription from './SpellDescription.svelte';
	import SpellFooter from './SpellFooter.svelte';

	export let spell: AppSpell;
</script>

<div class="p-4 pb-0">
	<SpellHeader {spell} />
</div>

<div class="p-4">
	<SpellDescription {spell} />
</div>

<SpellFooter {spell} />
