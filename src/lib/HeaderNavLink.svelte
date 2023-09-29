<script lang="ts">
	import { page } from '$app/stores';
	import type { NAV_LINKS } from '$lib';
	import ChevronDown from '~icons/bi/chevron-down';

	let path: string;
	$: path = $page.url.pathname;

	export let link: (typeof NAV_LINKS)[number];
	let labelWidth: number;

	let childrenList: HTMLUListElement;
	let childrenVisible: boolean = false;
</script>

<li
	class="m-1 h-fit w-fit rounded-[--theme-rounded-base] daisy-dropdown daisy-dropdown-hover border border-surface-500-400-token"
	class:bg-surface-active-token={path === link.href ||
		link.children.some((child) => path === child.href)}
>
	<label for="blahg" bind:clientWidth={labelWidth} class="flex flex-nowrap">
		<a
			class="p-1 min-w-[2.75rem] rounded-[--theme-rounded-base] text-lg leading-8 no-underline text-token box-border hover:bg-primary-hover-token flex flex-nowrap"
			href={link.href}
			class:rounded-r-none={link.children.length > 0}
		>
			<span class="p-1">{link.text}</span>
		</a>

		{#if link.children.length > 0}
			<button
				class="custom-daisy-dropdown-btn w-fit p-1 px-3 text-center flex items-center justify-center rounded-r-[--theme-rounded-base] hover:bg-primary-hover-token"
				on:click={() => {
					if (childrenVisible) {
						console.log(
							'TODO: this click should have closed the childrenList, maybe by breaking focus on this button?'
						);
					}
				}}
			>
				<div class="custom-daisy-dropdown-arrow mt-1">
					<ChevronDown width="1.25rem" height="1.25rem" />
				</div>
			</button>
		{/if}
	</label>

	{#if link.children.length > 0}
		<ul
			id="blahg"
			bind:this={childrenList}
			class="daisy-dropdown-content z-[1] p-1 shadow bg-surface-200-700-token w-fit border-surface-300-600-token border rounded-[--theme-rounded-base] flex flex-col gap-1"
			style="min-width: {labelWidth}px;"
			on:transitionend={() => {
				childrenVisible = getComputedStyle(childrenList).visibility === 'visible';
			}}
		>
			{#each link.children as child}
				<li
					class="h-fit w-full rounded-[--theme-rounded-base] border border-surface-500-400-token"
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

<style>
	.custom-daisy-dropdown-btn {
		--dropdown-arrow-rotation: 0deg;
	}

	/* .daisy-dropdown.daisy-dropdown-open .custom-daisy-dropdown-btn, */
	.daisy-dropdown:not(.daisy-dropdown-hover):focus .custom-daisy-dropdown-btn,
	.daisy-dropdown:focus-within .custom-daisy-dropdown-btn {
		--dropdown-arrow-rotation: 180deg;
	}

	@media (hover: hover) {
		.daisy-dropdown.daisy-dropdown-hover:hover .custom-daisy-dropdown-btn {
			--dropdown-arrow-rotation: 180deg;
		}
	}

	.custom-daisy-dropdown-arrow {
		transition-property: transform;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
		transition-duration: 200ms;
		transform: rotate(var(--dropdown-arrow-rotation));
	}
</style>
