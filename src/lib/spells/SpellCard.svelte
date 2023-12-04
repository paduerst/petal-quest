<script lang="ts">
	import type { AppSpell } from '.';
	import Spell from './Spell.svelte';

	export let spell: AppSpell;
</script>

<div class="card text-token text-left relative">
	<Spell {spell} />
</div>
