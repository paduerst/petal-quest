<script lang="ts">
	import { drawerStore } from '@skeletonlabs/skeleton';

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4">
	<ul>
		<li>
			<a href="/" on:click={drawerClose}>Home</a>
		</li>
		<li>
			<a href="/prismatic-dragons" on:click={drawerClose}>Prismatic Dragons</a>
		</li>
		<li>
			<a href="/dragon-builder" on:click={drawerClose}>Dragon Builder</a>
		</li>
		<li>
			<a href="/about" on:click={drawerClose}>About</a>
		</li>
	</ul>
</nav>
