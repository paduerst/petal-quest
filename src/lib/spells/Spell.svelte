<script lang="ts">
	import { type AppSpell, APP_SPELL_DESCRIPTIONS } from '.';
	import SpellDescription from './SpellDescription.svelte';

	export let spell: AppSpell;
</script>

<SpellDescription description={APP_SPELL_DESCRIPTIONS[spell]} />
