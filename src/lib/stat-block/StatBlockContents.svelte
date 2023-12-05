<script lang="ts">
	import type { Stats } from '.';

	import StatBlockSectionHeading from './StatBlockSectionHeading.svelte';
	import StatBlockPreamble from './preamble/StatBlockPreamble.svelte';

	export let stats: Stats;
</script>

<StatBlockPreamble {stats} />

{#if $$slots.features}
	<slot name="features" />
{/if}

{#if $$slots.actions}
	<StatBlockSectionHeading theme={stats.theme}>Actions</StatBlockSectionHeading>
	<slot name="actions" />
{/if}

{#if $$slots['bonus-actions']}
	<StatBlockSectionHeading theme={stats.theme}>Bonus Actions</StatBlockSectionHeading>
	<slot name="bonus-actions" />
{/if}

{#if $$slots['legendary-actions']}
	<StatBlockSectionHeading theme={stats.theme}>Legendary Actions</StatBlockSectionHeading>
	<slot name="legendary-actions" />
{/if}
