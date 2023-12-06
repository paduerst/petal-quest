<script lang="ts">
	import { type AppMonster, APP_MONSTER_VALS } from '.';

	import StandardCard from '$lib/StandardCard.svelte';

	export let monster: AppMonster;

	let href = `/monsters/${monster}/`;
</script>

<StandardCard>
	<a {href} class="p-2 block mx-auto w-fit text-lg">{APP_MONSTER_VALS[monster].title}</a>
</StandardCard>
