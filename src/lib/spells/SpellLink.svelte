<script lang="ts">
	import { spellNameToURL } from '.';

	export let spellName: string;

	let spellURL: string;
	$: spellURL = spellNameToURL(spellName);
</script>

<i>
	{#if spellURL.length > 0}
		<a href={spellURL}>{spellName}</a>
	{:else}
		{spellName}
	{/if}
</i>
