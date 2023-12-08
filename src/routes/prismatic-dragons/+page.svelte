<script lang="ts">
	import { COLORS, HIDDEN_COLORS } from '$lib/dragon';

	import PageMeta from '$lib/PageMeta.svelte';
	import SpellLink from '$lib/spells/SpellLink.svelte';
	import ButtonLink from '$lib/ButtonLink.svelte';
	import ColorDescription from '$lib/dragon/descriptions/ColorDescription.svelte';
	import ArtPrismaticDragons from '$lib/art/ArtPrismaticDragons.svelte';

	const SHOW_HIDDEN_COLOR_STUFF = false;
</script>

<PageMeta
	title="Prismatic Dragons - Petal Quest"
	description="The prismatic dragons are a new family of dragons for 5th edition."
	url="https://www.petalquest.com/prismatic-dragons/"
/>

<article class="card p-6 pt-4 text-token text-left">
	<div class="flex flex-wrap sm:flex-nowrap sm:gap-12">
		<ArtPrismaticDragons />
		<div>
			<h1 class="text-center">The Prismatic Dragons</h1>
			<p class="text-center italic">A new family of dragons for 5th edition.</p>

			<p>
				Inspired by the <SpellLink spellName="prismatic wall" /> spell, the prismatic dragons come in
				seven main colors: red, orange, yellow, green, blue, indigo and violet (ROYGBIV). Though the
				prismatic dragons are solid creatures with muscle and bone, they are created from light—a fact
				reflected in their unique abilities. Discover the magic and majesty of the prismatic dragons!
			</p>

			<div class="w-fit mx-auto">
				<ButtonLink href="/dragon-builder/">Try out the Prismatic Dragon Builder</ButtonLink>
			</div>
		</div>
	</div>

	<div class="daisy-divider mt-2" />

	<h2>Dragons in Every Color of the Rainbow</h2>
	<p>
		The seven main colors of prismatic dragons are directly inspired by the seven layers of the
		<SpellLink spellName="prismatic wall" /> spell. Each layer has a unique effect and weakness which
		correspond to the breath weapons and vulnerabilities of the prismatic dragons.
	</p>
	{#if SHOW_HIDDEN_COLOR_STUFF}
		<p>
			The colors don't stop at ROYGBIV. There are white, black, and even magenta prismatic dragons.
		</p>
	{/if}

	<ul class="px-2">
		{#each COLORS.filter((color) => SHOW_HIDDEN_COLOR_STUFF || !HIDDEN_COLORS.includes(color)) as color}
			<li>
				<div class="my-4">
					<ColorDescription {color} includeAgeParagraph={false} />
				</div>
			</li>
		{/each}
	</ul>

	<h2>Publication Forthcoming</h2>
	<p>
		Petal Quest is currently working on a prismatic dragons product for publishing. The latest
		versions of the the prismatic dragon stat blocks can be found in our <a href="/dragon-builder/"
			>Prismatic Dragon Builder</a
		>.
	</p>
</article>

<style lang="postcss">
	article {
		h2 {
			margin-top: 1rem;
			font-weight: bold;
		}

		p {
			margin-top: 0.5rem;
		}

		p + p {
			margin-top: 1rem;
		}
	}
</style>
