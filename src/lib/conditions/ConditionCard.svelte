<script lang="ts">
	import type { Condition } from '.';
	import ConditionDescription from './ConditionDescription.svelte';

	export let condition: Condition;
</script>

<div class="card text-token text-left relative">
	<div class="p-4">
		<ConditionDescription {condition} />
	</div>
</div>
