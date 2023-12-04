<script lang="ts">
	import ConditionLink from '../ConditionLink.svelte';
	import SpellLink from '$lib/spells/SpellLink.svelte';

	export let disableLinks = false;
</script>

<ul>
	<li>A grappled creature’s speed becomes 0, and it can’t benefit from any bonus to its speed.</li>
	<li>
		The condition ends if the grappler is <ConditionLink
			disabled={disableLinks}
			condition="incapacitated"
		/>.
	</li>
	<li>
		The condition also ends if an effect removes the grappled creature from the reach of the
		grappler or grappling effect, such as when a creature is hurled away by the <SpellLink
			spellName="thunderwave"
		/>
		spell.
	</li>
</ul>
