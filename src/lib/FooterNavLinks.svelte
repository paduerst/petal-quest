<script lang="ts">
	import { page } from '$app/stores';
	import { NAV_LINKS } from '$lib';

	let path: string;
	$: path = $page.url.pathname;
</script>

<nav>
	<ul>
		{#each NAV_LINKS as link}
			<li class="h-fit w-full rounded-[--theme-rounded-base] border border-transparent">
				<a
					class="w-full rounded-[--theme-rounded-base] no-underline text-token box-border hover:bg-primary-hover-token flex flex-nowrap p-1"
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
