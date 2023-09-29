<script lang="ts">
	import { page } from '$app/stores';
	import type { NAV_LINKS } from '$lib';
	import ChevronDown from '~icons/bi/chevron-down';

	let path: string;
	$: path = $page.url.pathname;

	export let link: (typeof NAV_LINKS)[number];
	let labelWidth: number;
</script>

<li
	class="m-1 h-fit w-fit rounded-[--theme-rounded-base] daisy-dropdown daisy-dropdown-hover"
	class:bg-surface-active-token={path === link.href ||
		link.children.some((child) => path === child.href)}
>
	<label for="blahg" bind:clientWidth={labelWidth} class="flex flex-nowrap">
		<a
			class="p-1 rounded-[--theme-rounded-base] text-lg leading-8 no-underline text-token box-border hover:bg-primary-hover-token flex flex-nowrap"
			href={link.href}
			class:rounded-r-none={link.children.length > 0}
		>
			<span class="p-1">{link.text}</span>
		</a>

		{#if link.children.length > 0}
			<button
				class="w-fit p-1 text-center flex items-center justify-center rounded-r-[--theme-rounded-base] hover:bg-primary-hover-token"
			>
				<ChevronDown class="mt-1" width="1.25rem" height="1.25rem" />
			</button>
		{/if}
	</label>

	{#if link.children.length > 0}
		<ul
			id="blahg"
			class="daisy-dropdown-content z-[1] p-1 shadow bg-surface-200-700-token w-fit border-surface-300-600-token border rounded-[--theme-rounded-base] flex flex-col gap-1"
			style="min-width: {labelWidth}px;"
		>
			{#each link.children as child}
				<li
					class="h-fit w-full rounded-[--theme-rounded-base]"
					class:bg-surface-active-token={path === child.href}
				>
					<a
						class="p-1 w-full rounded-[--theme-rounded-base] text-lg leading-8 no-underline text-token box-border hover:bg-primary-hover-token flex flex-nowrap"
						href={child.href}
					>
						<span class="p-1">
							{child.text}
						</span>
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</li>
