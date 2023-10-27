<script lang="ts">
	import { numberWithOrdinalSuffix } from '$lib/text-utils';
	import type { SpellLevel } from '$lib/spells';
	import AbbrButton from './AbbrButton.svelte';

	export let level: SpellLevel;

	let maxLevelWithOrdinal = numberWithOrdinalSuffix(level);
	let affectedLevels =
		level > 2 ? `1st through ${numberWithOrdinalSuffix(level - 1)} level` : '1st level';
	let abbrTitle = `Spells of ${affectedLevels} are cast at ${maxLevelWithOrdinal} level.`;
</script>

{#if level > 1}
	{' ('}<AbbrButton title={abbrTitle}>
		<span class="italic">Upcast to {maxLevelWithOrdinal} Level</span>
	</AbbrButton>{')'}
{/if}
