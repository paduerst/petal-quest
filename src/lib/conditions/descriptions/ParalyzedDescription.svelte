<script lang="ts">
	import ConditionLink from '../ConditionLink.svelte';

	export let disableLinks = false;
</script>

<ul>
	<li>
		A paralyzed creature is <ConditionLink disabled={disableLinks} condition="incapacitated" /> and can’t
		move or speak.
	</li>
	<li>The creature automatically fails Strength and Dexterity saving throws.</li>
	<li>Attack rolls against the creature have advantage.</li>
	<li>
		Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the
		creature.
	</li>
</ul>
