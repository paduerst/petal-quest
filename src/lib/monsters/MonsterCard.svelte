<script lang="ts">
	import type { AppMonster } from '.';
	import { stringToPrismaticDragon, stringToOtherPetalMonster } from './petal-monsters';
	import { stringToSRDMonster } from './srd-monsters';

	import { PRISMATIC_DRAGON_VALS } from './petal-monsters/petal-monster-vals';
	import { OTHER_PETAL_MONSTER_STAT_BLOCKS } from './petal-monsters/other-petal-monster-stat-blocks';
	import { SRD_MONSTER_STAT_BLOCKS } from './srd-monsters/srd-monster-stat-blocks';

	import StandardCard from '$lib/StandardCard.svelte';
	import CardCornerButtons from '$lib/CardCornerButtons.svelte';
	import StaticDragonStatBlock from './petal-monsters/StaticDragonStatBlock.svelte';

	export let monster: AppMonster;
	export let showCloseButton = false;
	export let showUrlButton = false;

	let url = `/monsters/${monster}/`;
	let monsterAsPrismaticDragon = stringToPrismaticDragon(monster);
	let monsterAsOtherPetalMonster = stringToOtherPetalMonster(monster);
	let monsterAsSRDMonster = stringToSRDMonster(monster);
</script>

<StandardCard>
	<CardCornerButtons on:click {showCloseButton} url={showUrlButton ? url : ''} />

	<div class="p-4">
		{#if monsterAsPrismaticDragon !== undefined}
			<StaticDragonStatBlock dragon={PRISMATIC_DRAGON_VALS[monsterAsPrismaticDragon]} />
		{:else if monsterAsOtherPetalMonster !== undefined}
			<svelte:component this={OTHER_PETAL_MONSTER_STAT_BLOCKS[monsterAsOtherPetalMonster]} />
		{:else if monsterAsSRDMonster !== undefined}
			<svelte:component this={SRD_MONSTER_STAT_BLOCKS[monsterAsSRDMonster]} />
		{:else}
			<p>Unknown monster: {monster}</p>
		{/if}
	</div>
</StandardCard>
