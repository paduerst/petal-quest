<script lang="ts">
	export let spell: string;
	spell.trim();

	const spellArr = spell.split('(');
</script>

<i>{spellArr[0].trim()}</i>{#if spellArr.length > 1}{` (${spellArr[1].trim()}`}{/if}
