<script lang="ts">
	import { type AppSpell, APP_SPELL_VALS, getSpellSubtitle } from '.';
	import { stringToPetalSpell } from './petal-spells';
	import { stringToSRDSpell } from './srd-spells';

	export let spell: AppSpell;
	let spellVals = APP_SPELL_VALS[spell];

	let isPetalSpell = stringToPetalSpell(spell) !== undefined;
	let isSRDSpell = stringToSRDSpell(spell) !== undefined;
	let source: string;
	$: if (isPetalSpell) {
		source = 'Petal Quest';
	} else if (isSRDSpell) {
		source = 'SRD 5.1';
	} else {
		source = '';
	}
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
	{#if source !== ''}
		<p class="spell-source"><b>Source:</b> {source}</p>
	{/if}
</div>
