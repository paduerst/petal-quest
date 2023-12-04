<script lang="ts">
	import ConditionLink from '../ConditionLink.svelte';

	export let disableLinks = false;
</script>

<ul>
	<li>
		A stunned creature is <ConditionLink disabled={disableLinks} condition="incapacitated" />, can’t
		move, and can speak only falteringly.
	</li>
	<li>The creature automatically fails Strength and Dexterity saving throws.</li>
	<li>Attack rolls against the creature have advantage.</li>
</ul>
