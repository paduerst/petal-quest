<script lang="ts">
	import type { Condition } from '.';
	import { CONDITION_DESCRIPTIONS } from './descriptions';

	export let condition: Condition;
	export let disableLinks = false;
</script>

<div class="condition-description">
	<svelte:component this={CONDITION_DESCRIPTIONS[condition]} {disableLinks} />
</div>
