<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher<{ click: null }>();

	function dispatchClick() {
		dispatch('click');
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === ' ') {
			dispatchClick();
		}
	}

	function handleKeyup(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			dispatchClick();
		}
	}

	const baseActiveClasses = 'underline print:no-underline';

	export let additionalClasses = '';
	export let thisElement: HTMLElement | undefined = undefined;
	export let disabled = false;

	let classes: string;
	$: classes = disabled ? additionalClasses : `${baseActiveClasses} ${additionalClasses}`;
</script>

{#if disabled}
	<span bind:this={thisElement} class={classes}><slot /></span>
{:else}
	<span
		role="button"
		tabindex="0"
		on:keydown={handleKeydown}
		on:keyup={handleKeyup}
		on:click={dispatchClick}
		bind:this={thisElement}
		class={classes}><slot /></span
	>
{/if}
