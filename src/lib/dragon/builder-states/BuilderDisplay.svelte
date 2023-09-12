<script lang="ts">
	import { currentDragonConfig } from '.';
	import DragonStatBlock from '../stat-block/DragonStatBlock.svelte';
</script>

{#if $currentDragonConfig === undefined}
	<p class="font-bold text-xl">No dragon to display?</p>
	<p>
		Click one of the control buttons below to build a dragon. Also, please let me know how you got
		into this state.
	</p>
{:else}
	<DragonStatBlock config={$currentDragonConfig} />
{/if}
