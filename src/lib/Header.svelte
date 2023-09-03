<script lang="ts">
	import { page } from '$app/stores';
	import { AppBar, getDrawerStore } from '@skeletonlabs/skeleton';
	import Logo from '$lib/Logo.svelte';
	import { NAV_LINKS } from '$lib';

	let path: string;
	$: path = $page.url.pathname;

	const drawerStore = getDrawerStore();
	function drawerOpen(): void {
		drawerStore.open({});
	}
</script>

<div class="print:hidden">
	<AppBar padding="px-4 py-0" border="border-b border-surface-300-600-token">
		<svelte:fragment slot="lead">
			<Logo />
		</svelte:fragment>

		<svelte:fragment slot="trail">
			<nav class="hidden lg:flex">
				<ul class="list-none flex items-center flex-row">
					{#each NAV_LINKS as link}
						<li>
							<a
								class="nav-anchor hover:bg-surface-hover-token"
								class:active={path === link.href}
								href={link.href}
							>
								{link.text}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
			<button class="lg:hidden menu-btn hover:bg-surface-hover-token" on:click={drawerOpen}>
				<span>
					<svg viewBox="0 0 80 80" class="fill-token w-5 h-5">
						<rect y="0" width="80" height="10" rx="2" />
						<rect y="35" width="80" height="10" rx="2" />
						<rect y="70" width="80" height="10" rx="2" />
					</svg>
				</span>
			</button>
		</svelte:fragment>
	</AppBar>
</div>

<style>
	.nav-anchor {
		@apply p-3 m-2 text-lg no-underline text-token;
		border-radius: var(--theme-rounded-base);
	}

	.nav-anchor.active {
		@apply bg-surface-active-token;
	}

	.menu-btn {
		@apply p-3;
		border-radius: var(--theme-rounded-base);
	}
</style>
