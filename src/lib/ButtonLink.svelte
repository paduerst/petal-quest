<script lang="ts">
	import BoxArrowUpRight from '~icons/bi/box-arrow-up-right';

	export let href: string;
	export let additionalClasses = '';
	export let openInNewTab = false;
	export let external = false;

	let target = '';
	$: target = openInNewTab ? '_blank' : '_self';
</script>

<a {href} class="daisy-btn daisy-btn-neutral !text-white mt-4 {additionalClasses}" {target}
	><slot />{#if external}
		<BoxArrowUpRight />
	{/if}</a
>
