<script lang="ts">
	import { AppBar, drawerStore } from '@skeletonlabs/skeleton';
	import Logo from './Logo.svelte';

	function drawerOpen(): void {
		drawerStore.open({});
	}
</script>

<AppBar padding="px-4 py-0">
	<svelte:fragment slot="lead">
		<Logo />
	</svelte:fragment>

	<svelte:fragment slot="trail">
		<nav class="hidden lg:flex">
			<ul class="list-none flex items-center flex-row">
				<li>
					<a class="nav-anchor" href="/prismatic-dragons">Prismatic Dragons</a>
				</li>
				<li>
					<a class="nav-anchor" href="/dragon-builder">Dragon Builder</a>
				</li>
				<li>
					<a class="nav-anchor" href="/about">About</a>
				</li>
			</ul>
		</nav>
		<button class="lg:hidden menu-btn" on:click={drawerOpen}>
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

<style>
	.nav-anchor {
		@apply p-3 m-2 text-lg no-underline text-white;
	}

	.menu-btn {
		@apply p-3;
	}

	.nav-anchor:hover,
	.menu-btn:hover {
		@apply bg-surface-200-700-token;
	}
</style>
