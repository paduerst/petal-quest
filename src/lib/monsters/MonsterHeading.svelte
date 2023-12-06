<script lang="ts">
	export let source = '';
</script>

{#if $$slots.default}
	<div class="mb-2">
		<h1 class="monster-name"><slot /></h1>
		{#if source.length > 0}
			<p><b>Source:</b> {source}</p>
		{/if}
	</div>
{/if}
