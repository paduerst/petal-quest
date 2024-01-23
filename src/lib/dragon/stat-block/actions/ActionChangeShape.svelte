<script lang="ts">
	import { capitalizeFirstLetter } from '$lib/text-utils';
	import type { DragonStats } from '$lib/dragon/dragon-stats';

	export let dragon: DragonStats;

	let retainedFeatures: string;
	$: if (dragon.changeShapeRetainedFeatures.length < 1) {
		retainedFeatures = '';
	} else if (dragon.changeShapeRetainedFeatures.length === 1) {
		retainedFeatures = `and ${dragon.changeShapeRetainedFeatures[0]}`;
	} else {
		retainedFeatures = '';
		const retainedFeaturesArray: string[] = JSON.parse(
			JSON.stringify(dragon.changeShapeRetainedFeatures)
		);
		retainedFeaturesArray.sort();
		retainedFeatures += retainedFeaturesArray.slice(0, -1).join(', ');
		retainedFeatures += `, and ${retainedFeaturesArray.pop()}`;
	}
</script>

{#if dragon.hasChangeShape}
	<div class="dragon-action">
		<p>
			<i><b>Change Shape.</b></i>
			{dragon.nameUpper} magically transforms into a Humanoid or Beast, or back into
			{dragon.pronounPossessiveAdjective} true form. Any objects {dragon.pronounNominative}
			{dragon.pronounsPlural && dragon.pronounNominativeExists ? 'are' : 'is'} wearing or carrying are
			absorbed or borne by the new form ({dragon.name}'s choice). {dragon.nameUpper} reverts to {dragon.pronounPossessiveAdjective}
			true form if {dragon.pronounNominative}
			{dragon.pronounsPlural && dragon.pronounNominativeExists ? 'are' : 'is'} reduced to 0 hit points.
		</p>
		<p>
			In the new form, {dragon.name} retains {dragon.pronounPossessiveAdjective}
			personality, known languages, hit points, mental ability scores,
			{#if dragon.changeShapeRetainedFeatures.length < 1}
				and proficiencies,
			{:else}
				proficiencies, {retainedFeatures},
			{/if}
			as well as this feature.
			{capitalizeFirstLetter(dragon.pronounPossessiveAdjective)} statistics and capabilities are otherwise
			replaced by those of the new form, except any class features or legendary actions of that form.
		</p>
	</div>
{/if}
