<script lang="ts">
	import { page } from '$app/stores';
	import { NAV_LINKS } from '$lib';

	let path: string;
	$: path = $page.url.pathname;
</script>

<nav class="list-nav">
	<ul>
		{#each NAV_LINKS as link}
			<li
				class="h-fit w-full rounded-[--theme-rounded-base] border border-transparent"
				class:bg-surface-active-token={path === link.href}
				class:border-surface-400-500-token={link.children.some((child) => path === child.href) ||
					path.startsWith(link.href)}
			>
				<a
					class="w-full rounded-[--theme-rounded-base] no-underline text-token box-border hover:bg-primary-hover-token flex flex-nowrap"
					href={link.href}
				>
					<span>
						{link.text}
					</span>
				</a>
			</li>
		{/each}
	</ul>
</nav>
