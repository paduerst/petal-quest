<script lang="ts">
	export let href: string;
	export let additionalClasses = '';
</script>

<a {href} class="daisy-btn daisy-btn-neutral !text-white mt-4 {additionalClasses}"><slot /></a>
