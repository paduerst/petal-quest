<script lang="ts">
	import { page } from '$app/stores';
	import { Drawer, getDrawerStore, TreeView, TreeViewItem } from '@skeletonlabs/skeleton';
	import DrawerNavLinks from './DrawerNavLinks.svelte';
	import { NAV_LINKS } from '$lib';

	let path: string;
	$: path = $page.url.pathname;

	const drawerStore = getDrawerStore();

	let innerWidth: number;
	$: if (innerWidth >= 1024) {
		drawerStore.close();
	}
</script>

<svelte:window bind:innerWidth />

<Drawer
	position="right"
	width="w-[280px] md:w-[480px]"
	border="border-l border-r border-surface-300-600-token"
>
	<div class="px-2 flex justify-between flex-row">
		<div />
		<button
			class="hover:bg-primary-hover-token border border-transparent p-3 rounded-[--theme-rounded-base] my-[6px]"
			on:click={() => {
				drawerStore.close();
			}}
		>
			<span>
				<svg class="w-5 h-5" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
						fill="currentColor"
						fill-rule="evenodd"
						clip-rule="evenodd"
					/>
				</svg>
			</span>
		</button>
	</div>
	<hr />
	<DrawerNavLinks />
</Drawer>
