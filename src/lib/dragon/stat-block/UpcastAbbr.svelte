<script lang="ts">
	import { numberWithOrdinalSuffix } from '$lib';
	import type { SpellLevel } from '$lib/spells';

	export let level: SpellLevel;

	let maxLevelWithOrdinal = numberWithOrdinalSuffix(level);
	let affectedLevels =
		level > 2 ? `1st through ${numberWithOrdinalSuffix(level - 1)} level` : '1st level';
	let abbrTitle = `Spells of ${affectedLevels} are cast at ${maxLevelWithOrdinal} level.`;
</script>

{#if level > 1}
	{' ('}<abbr title={abbrTitle}>Upcast to {maxLevelWithOrdinal} Level</abbr>{')'}
{/if}
