<script lang="ts">
	import type { Age, Color } from '$lib/dragon';
	import { DragonConfig } from '$lib/dragon/dragon-config';

	import MonsterHeading from '$lib/monsters/MonsterHeading.svelte';
	import StatBlockContainer from '$lib/stat-block/StatBlockContainer.svelte';
	import DragonStatBlock from '$lib/dragon/stat-block/DragonStatBlock.svelte';

	export let age: Age;
	export let color: Color;

	const config: DragonConfig = new DragonConfig();
	$: config.age = age;
	$: config.color = color;
</script>

<div class="mx-auto">
	<MonsterHeading source="Petal Quest">{config.title}</MonsterHeading>

	<StatBlockContainer theme={config.theme}>
		<DragonStatBlock {config} />
	</StatBlockContainer>

	{#if $$slots.default}
		<div class="mt-4">
			<slot />
		</div>
	{/if}
</div>
