<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';

	import ConditionLink from '$lib/conditions/ConditionLink.svelte';
	import SpellLink from '$lib/spells/SpellLink.svelte';

	export let dragon: DragonStats;
	export let disableLinks = false;
</script>

<div class="dragon-action breath-option">
	<p>
		<b>{dragon.breath2Name} Breath.</b>
		{dragon.nameUpper} magically inhales light, briefly creating a {dragon.breathConeSize}-foot cone
		of darkness. All sources of light (except those created by an artifact or a deity) are
		extinguished within that area, and each creature in that area must make a DC {dragon.saveDCCon}
		Charisma saving throw. On a failed save, the creature is cursed {dragon.breath2SpecialValue}until
		freed by the
		<SpellLink spellName="remove curse" disabled={disableLinks} /> spell or similar magic. The cursed
		creature is <ConditionLink condition="blinded" disabled={disableLinks} />, has its speed halved,
		and does not age. The curse manifests as an intangible shroud of translucent shadow draped over
		the creature.
	</p>
</div>
