<script lang="ts">
	import type { Age, Color } from '$lib/dragon';
	import { DragonConfig } from '$lib/dragon/dragon-config';

	import MonsterHeading from '$lib/monsters/MonsterHeading.svelte';
	import StatBlockContainer from '$lib/stat-block/StatBlockContainer.svelte';
	import DragonStatBlock from '$lib/dragon/stat-block/DragonStatBlock.svelte';
	import DragonDescription from '$lib/dragon/descriptions/DragonDescription.svelte';

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

	<div class="mt-4">
		<slot />
		<DragonDescription {age} {color} />
	</div>

	<div class="max-w-xl w-fit mx-auto">
		<a href={`/dragon-builder/?${config}`} class="daisy-btn daisy-btn-neutral !text-white mt-4"
			>Edit in the Dragon Builder</a
		>
	</div>
</div>
