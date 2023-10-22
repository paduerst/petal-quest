<script lang="ts">
	import SpellLink from '$lib/spells/SpellLink.svelte';

	export let spell: string;
	$: spell.trim();

	let spellArr: string[];
	$: spellArr = spell.split('(');

	let spellName: string;
	$: spellName = spellArr[0].trim();

	let spellParenthetical: string;
	$: if (spellArr.length > 1) {
		spellParenthetical = ` (${spellArr.slice(1).join('(')}`;
	} else {
		spellParenthetical = '';
	}
</script>

<SpellLink {spellName} />{spellParenthetical}
