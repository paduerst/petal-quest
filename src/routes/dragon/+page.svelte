<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		const redirectURL = `/dragon-builder${$page.url.search}`;
		window.history.replaceState(history.state, '', redirectURL);
		location.reload();
	});
</script>
