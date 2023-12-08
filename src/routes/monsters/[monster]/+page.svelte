<script lang="ts">
	import type { PageData } from './$types';

	import { APP_MONSTER_VALS } from '$lib/monsters';

	import MonsterCard from '$lib/monsters/MonsterCard.svelte';
	import PageMeta from '$lib/PageMeta.svelte';

	export let data: PageData;
</script>

<PageMeta
	title={`${APP_MONSTER_VALS[data.monster].title} - Monsters - Petal Quest`}
	description="Monsters for 5th edition, both homebrew and from the SRD 5.1."
	url={`https://www.petalquest.com/monsters/${data.monster}/`}
/>

<MonsterCard monster={data.monster} />
