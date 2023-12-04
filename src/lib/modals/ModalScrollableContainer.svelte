<script lang="ts">
	import { onMount } from 'svelte';

	export let additionalClasses = '';
	export let divElement: HTMLDivElement | undefined = undefined;
	export let scrollToTopOnMount = true;

	onMount(() => {
		if (divElement !== undefined && scrollToTopOnMount) {
			divElement.scrollTo(0, 0);
		}
	});
</script>

<div
	bind:this={divElement}
	class="card max-w-4xl shadow-xl space-y-4 max-h-[80vh] overflow-y-auto {additionalClasses}"
>
	<slot />
</div>
