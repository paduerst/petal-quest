<script lang="ts">
	import type { Age, Color } from '$lib/dragon';
	import { DragonConfig } from '$lib/dragon/dragon-config';

	import MonsterHeading from '$lib/monsters/MonsterHeading.svelte';
	import StatBlockContainer from '$lib/stat-block/StatBlockContainer.svelte';
	import DragonStatBlock from '$lib/dragon/stat-block/DragonStatBlock.svelte';
	import DragonDescription from '$lib/dragon/descriptions/DragonDescription.svelte';
	import ButtonLink from '$lib/ButtonLink.svelte';

	export let dragon: { age: Age; color: Color };
	export let disableLinks = false;

	const config: DragonConfig = new DragonConfig();
	$: config.age = dragon.age;
	$: config.color = dragon.color;
</script>

<div class="mx-auto">
	<MonsterHeading source="Petal Quest">{config.title}</MonsterHeading>

	<StatBlockContainer theme={config.theme}>
		<DragonStatBlock {config} {disableLinks} />
	</StatBlockContainer>

	<div class="mt-4">
		<slot />
		<DragonDescription {config} />
	</div>

	{#if !disableLinks}
		<div class="max-w-xl w-fit mx-auto">
			<ButtonLink href={`/dragon-builder/?${config}`}>Open in the Dragon Builder</ButtonLink>
		</div>
	{/if}
</div>
