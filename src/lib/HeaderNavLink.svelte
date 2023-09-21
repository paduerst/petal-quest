<script lang="ts">
	import { page } from '$app/stores';
	import type { NAV_LINKS } from '$lib';
	import ChevronDown from '~icons/bi/chevron-down';
	import ChevronUp from '~icons/bi/chevron-up';

	let path: string;
	$: path = $page.url.pathname;

	export let link: (typeof NAV_LINKS)[number];
</script>

<li
	class="m-1 h-fit w-fit flex flex-nowrap hover:bg-primary-hover-token rounded-[var(--theme-rounded-base)]"
	class:active={path === link.href}
>
	<a
		class="nav-anchor p-2 rounded-[var(--theme-rounded-base)] hover:bg-primary-hover-token"
		class:rounded-r-none={link.children.length > 0}
		class:pr-1={link.children.length > 0}
		href={link.href}
	>
		{link.text}
	</a>
	{#if link.children.length > 0}
		<button
			class="w-fit pl-1 pr-1 rounded-r-[var(--theme-rounded-base)] hover:bg-primary-hover-token text-center flex items-center justify-center"
		>
			<ChevronDown class="mt-1" width="1.25rem" height="1.25rem" />
		</button>
	{/if}
</li>

<style>
	.nav-anchor {
		@apply no-underline text-token box-border;
		font-size: 1.125rem /* 18px */;
		line-height: 2rem /* 32px */;
	}

	.active {
		@apply bg-surface-active-token;
	}
</style>
