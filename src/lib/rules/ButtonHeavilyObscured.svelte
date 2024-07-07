<script lang="ts">
	import AbbrButton from '$lib/dragon/stat-block/AbbrButton.svelte';

	export let abbreviationText = 'heavily obscured';

	let abbreviation = `Heavily Obscured`;
	let definition = `A heavily obscured area—such as darkness, opaque fog, or dense foliage—blocks vision entirely. A creature effectively suffers from the blinded condition when trying to see something in that area.`;
	let omitPrefixes = true;
</script>

<AbbrButton {abbreviation} {definition} {abbreviationText} {omitPrefixes} />
