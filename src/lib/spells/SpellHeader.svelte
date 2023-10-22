<script lang="ts">
	import { type AppSpell, APP_SPELL_VALS, getSpellSubtitle } from '.';

	export let spell: AppSpell;
	let spellVals = APP_SPELL_VALS[spell];
</script>

<div class="spell-header">
	<h1 class="spell-name">{spellVals.name}</h1>
	<p class="spell-subtitle">{getSpellSubtitle(spellVals)}</p>
	<p class="spell-casting-time"><b>Casting Time:</b> {spellVals.castingTime}</p>
	<p class="spell-range"><b>Range:</b> {spellVals.range}</p>
	<p class="spell-components"><b>Components:</b> {spellVals.components}</p>
	<p class="spell-duration"><b>Duration:</b> {spellVals.duration}</p>
	{#if spellVals.classes !== undefined && spellVals.classes.length > 0}
		<p class="spell-classes"><b>Classes:</b> {spellVals.classes.join(', ')}</p>
	{/if}
</div>

<style>
	.spell-name {
		font-size: 1.5rem;
		margin: 0;
		padding: 0;
	}

	.spell-subtitle {
		font-style: italic;
		margin-bottom: 0.5rem;
	}
</style>
