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
		<SpellLink spellName="remove curse" disabled={disableLinks} /> spell or other magic. While cursed
		in this way, the creature has its speed halved, it does not age, and it is cloaked in a shroud of
		shadow which <ConditionLink condition="blinded" displayText="blinds" disabled={disableLinks} /> it.
	</p>
</div>
