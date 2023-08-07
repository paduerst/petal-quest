<script lang="ts">
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<Drawer position="right" width="w-[280px] md:w-[480px]">
	<h2 class="p-4">Navigation</h2>
	<hr />
	<nav class="list-nav p-4">
		<ul>
			<li>
				<a class="nav-anchor" href="/" on:click={drawerClose}>Home</a>
			</li>
			<li>
				<a class="nav-anchor" href="/prismatic-dragons" on:click={drawerClose}>Prismatic Dragons</a>
			</li>
			<li>
				<a class="nav-anchor" href="/dragon-builder" on:click={drawerClose}>Dragon Builder</a>
			</li>
			<li>
				<a class="nav-anchor" href="/about" on:click={drawerClose}>About</a>
			</li>
		</ul>
	</nav>
</Drawer>

<style>
	.nav-anchor {
		@apply no-underline text-white;
	}

	.nav-anchor:hover {
		@apply bg-surface-200-700-token;
	}
</style>
