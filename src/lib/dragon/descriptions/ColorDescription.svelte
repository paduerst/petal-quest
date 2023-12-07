<script lang="ts">
	import type { Color } from '..';

	import ColorDescriptionRed from './ColorDescriptionRed.svelte';
	import ColorDescriptionOrange from './ColorDescriptionOrange.svelte';
	import ColorDescriptionYellow from './ColorDescriptionYellow.svelte';
	import ColorDescriptionGreen from './ColorDescriptionGreen.svelte';
	import ColorDescriptionBlue from './ColorDescriptionBlue.svelte';
	import ColorDescriptionIndigo from './ColorDescriptionIndigo.svelte';
	import ColorDescriptionViolet from './ColorDescriptionViolet.svelte';
	import ColorDescriptionMagenta from './ColorDescriptionMagenta.svelte';
	import ColorDescriptionWhite from './ColorDescriptionWhite.svelte';
	import ColorDescriptionBlack from './ColorDescriptionBlack.svelte';

	export let color: Color;
	export let includeAgeParagraph = true;
</script>

{#if color === 'red'}
	<ColorDescriptionRed />
{:else if color === 'orange'}
	<ColorDescriptionOrange />
{:else if color === 'yellow'}
	<ColorDescriptionYellow />
{:else if color === 'green'}
	<ColorDescriptionGreen />
{:else if color === 'blue'}
	<ColorDescriptionBlue />
{:else if color === 'indigo'}
	<ColorDescriptionIndigo />
{:else if color === 'violet'}
	<ColorDescriptionViolet />
{:else if color === 'magenta'}
	<ColorDescriptionMagenta />
{:else if color === 'white'}
	<ColorDescriptionWhite {includeAgeParagraph} />
{:else if color === 'black'}
	<ColorDescriptionBlack {includeAgeParagraph} />
{/if}
