<script lang="ts">
	import type { Condition } from '.';
	import { CONDITION_DESCRIPTIONS } from './descriptions';

	export let condition: Condition;
</script>

<svelte:component this={CONDITION_DESCRIPTIONS[condition]} />
