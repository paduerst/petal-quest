<script lang="ts">
	import { page } from '$app/stores';
	import { getDrawerStore, TreeView, TreeViewItem } from '@skeletonlabs/skeleton';
	import { NAV_LINKS } from '$lib';

	let path: string;
	$: path = $page.url.pathname;

	const drawerStore = getDrawerStore();
	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4">
	<TreeView padding="py-1 pl-4 pr-1">
		<ul>
			{#each NAV_LINKS as link}
				<TreeViewItem
					hideChildren={link.children.length <= 0}
					hyphenOpacity="opacity-0"
					open={link.children.some((child) => path === child.href)}
				>
					<li
						class="h-fit w-full rounded-[--theme-rounded-base] border border-transparent"
						class:bg-surface-active-token={path === link.href}
						class:border-surface-400-500-token={link.children.some(
							(child) => path === child.href
						) || path.startsWith(link.href)}
					>
						<a
							class="p-1 w-full rounded-[--theme-rounded-base] text-lg leading-8 no-underline text-token box-border hover:bg-primary-hover-token flex flex-nowrap"
							href={link.href}
							on:click={drawerClose}
						>
							<span class="p-1">
								{link.text}
							</span>
						</a>
					</li>

					<svelte:fragment slot="children">
						{#if link.children.length > 0}
							<ul>
								{#each link.children as child}
									<TreeViewItem hyphenOpacity="opacity-40">
										<li
											class="h-fit w-full rounded-[--theme-rounded-base] border border-transparent"
											class:bg-surface-active-token={path === child.href}
										>
											<a
												class="p-1 w-full rounded-[--theme-rounded-base] text-lg leading-8 no-underline text-token box-border hover:bg-primary-hover-token flex flex-nowrap"
												href={child.href}
												on:click={drawerClose}
											>
												<span class="p-1">
													{child.text}
												</span>
											</a>
										</li>
									</TreeViewItem>
								{/each}
							</ul>
						{/if}
					</svelte:fragment>
				</TreeViewItem>
			{/each}
		</ul>
	</TreeView>
</nav>
