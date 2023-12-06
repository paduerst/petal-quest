<script lang="ts">
	export let additionalClasses = '';
</script>

<div class="card text-token text-left relative {additionalClasses}">
	<slot />
</div>
