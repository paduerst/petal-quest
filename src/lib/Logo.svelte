<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher<{ click: null }>();

	function dispatchClick() {
		dispatch('click');
	}
</script>

<a
	href="/"
	aria-label="Home"
	class="logo-anchor hover:bg-primary-hover-token border border-transparent"
	on:click={dispatchClick}
>
	<img src="/favicon.png" alt="Petal Quest logo" class="logo-img" />
	<span class="logo-txt">Petal Quest</span>
</a>

<style>
	.logo-anchor {
		@apply flex items-center no-underline text-token p-2 m-1;
		border-radius: var(--theme-rounded-base);
	}

	.logo-img {
		@apply box-content h-8 w-8 px-1;
	}

	.logo-txt {
		@apply text-lg whitespace-nowrap px-1;
	}
</style>
