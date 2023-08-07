<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function dispatchClick() {
		dispatch('click');
	}
</script>

<a href="/" aria-label="Home" class="logo-anchor" on:click={dispatchClick}>
	<img src="favicon.png" alt="Petal Quest logo" class="logo-img" />
	<span class="logo-txt">Petal Quest</span>
</a>

<style>
	.logo-anchor {
		@apply flex items-center no-underline text-white p-2 m-1;
	}

	.logo-anchor:hover {
		@apply bg-surface-hover-token;
	}

	.logo-img {
		@apply box-content h-8 w-8 px-1;
	}

	.logo-txt {
		@apply text-lg whitespace-nowrap px-1;
	}
</style>
