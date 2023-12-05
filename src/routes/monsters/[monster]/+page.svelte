<script lang="ts">
	import type { PageData } from './$types';

	import { APP_MONSTER_STAT_BLOCKS } from '$lib/monsters';
	import MonsterCard from '$lib/monsters/MonsterCard.svelte';

	import PageMeta from '$lib/PageMeta.svelte';
	import { capitalizeFirstLetter } from '$lib/text-utils';

	export let data: PageData;
</script>

<PageMeta
	title={`${capitalizeFirstLetter(data.monster)} - Monsters - Petal Quest`}
	description="Monsters for 5th edition, from the SRD."
	url={`https://www.petalquest.com/monsters/${data.monster}/`}
/>

<MonsterCard monster={data.monster} />
