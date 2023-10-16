<script lang="ts">
	import type { AppSpell } from '.';
	import SpellHeader from './SpellHeader.svelte';
	import SpellDescription from './SpellDescription.svelte';
	import SpellFooter from './SpellFooter.svelte';

	export let spell: AppSpell;
</script>

<div class="card text-left">
	<div class="card-header rounded-t-[--theme-rounded-container]">
		<SpellHeader {spell} />
	</div>

	<div class="p-4">
		<SpellDescription {spell} />
	</div>

	<SpellFooter {spell} />
</div>
