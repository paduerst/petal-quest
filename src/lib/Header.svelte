<script lang="ts">
	import { dev } from '$app/environment';

	import { AppBar, getDrawerStore, LightSwitch } from '@skeletonlabs/skeleton';

	import { NAV_LINKS, DEV_NAV_LINKS } from '$lib';

	import Logo from '$lib/Logo.svelte';
	import HeaderNavLink from './HeaderNavLink.svelte';

	const drawerStore = getDrawerStore();

	function drawerOpen(): void {
		drawerStore.open({});
	}
</script>

<div class="print:hidden">
	<AppBar padding="px-2 py-0" border="border-b border-l border-r border-surface-300-600-token">
		<svelte:fragment slot="lead">
			<Logo />
		</svelte:fragment>

		<svelte:fragment slot="trail">
			{#if dev}
				<div class="flex gap-4 bg-warning-backdrop-token p-3 rounded">
					<LightSwitch />

					{#each DEV_NAV_LINKS as link}
						<a href={link.href}>{link.text}</a>
					{/each}
				</div>
			{/if}

			<nav class="hidden lg:flex">
				<ul class="list-none flex items-center flex-row">
					{#each NAV_LINKS as link}
						<HeaderNavLink {link} />
					{/each}
				</ul>
			</nav>
			<button
				class="lg:hidden p-3 rounded-[--theme-rounded-base] hover:bg-primary-hover-token border border-transparent"
				on:click={drawerOpen}
			>
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
