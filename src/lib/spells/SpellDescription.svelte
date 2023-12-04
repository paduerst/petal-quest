<script lang="ts">
	import { type AppSpell, APP_SPELL_DESCRIPTIONS } from '.';

	export let spell: AppSpell;
</script>

<div class="spell-description">
	{@html APP_SPELL_DESCRIPTIONS[spell]}
</div>
