<script lang="ts">
	import type { AppSpell } from '.';
	import { stringToPetalSpell } from './petal-spells';
	import { stringToSRDSpell, spellHasErrata } from './srd-spells';

	export let spell: AppSpell;

	let isPetalSpell = stringToPetalSpell(spell) !== undefined;
	let isSRDSpell = stringToSRDSpell(spell) !== undefined;
	let hasErrata = spellHasErrata(spell);
</script>

{#if isPetalSpell || (isSRDSpell && hasErrata)}
	<div class="spell-footer p-2 pt-0">
		<div
			class="card p-4"
			class:variant-ghost-tertiary={isPetalSpell}
			class:variant-ghost-warning={isSRDSpell}
		>
			{#if isPetalSpell}
				<p>
					This is a homebrew spell written by Petal Quest. It isn't available as a player option
					without your GM's permission.
				</p>
			{:else if isSRDSpell && hasErrata}
				<p>
					This is a spell copied from the
					<a href="https://dnd.wizards.com/resources/systems-reference-document">SRD 5.1</a>, which
					does not include changes from the
					<a href="https://media.wizards.com/2021/dnd/downloads/PH-Errata.pdf"
						><i>Player's Handbook</i> errata</a
					>. You can find the up-to-date version of this spell on
					<a href="https://www.dndbeyond.com/spells/{spell}">D&D Beyond</a>.
				</p>
			{/if}
		</div>
	</div>
{/if}
