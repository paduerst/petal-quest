<script lang="ts">
	import PageMeta from '$lib/PageMeta.svelte';
</script>

<PageMeta
	title="About - Petal Quest"
	description="Petal Quest is the publishing title used by Peter and Tal: Peter + Tal = Petal."
	url="https://www.petalquest.com/about/"
/>

<article class="card p-6 pt-4 text-token text-left">
	<h1 class="text-center">About Petal Quest</h1>
	<p class="text-center italic">Peter + Tal = Petal</p>

	<p class="px-12">
		<b>Hello!</b> We're <b class="whitespace-nowrap">Peter D</b> and
		<b class="whitespace-nowrap">Tal S</b>, publishing content for 5th edition under the title
		<b class="whitespace-nowrap">Petal Quest</b>. We've been playing tabletop roleplaying games
		(TTRPGs) for years, and over that time we've created a lot of homebrew content. When we make
		something that we think is really special and useful to other people, we feature it on this
		website!
	</p>

	<div class="daisy-divider mt-2" />

	<div class="flex flex-wrap sm:flex-nowrap sm:gap-12">
		<figure class="shrink-0 w-fit mx-auto">
			<img
				src="/images/PalladiumTurtleAvatarSmall.png"
				alt="PalladiumTurtle logo"
				class="h-48 aspect-square shrink-0"
			/>
			<figcaption class="italic m-1">Artwork by Peter D.</figcaption>
		</figure>
		<div>
			<h2 class="">Peter D</h2>
			<p class="italic">Pronouns: he/him</p>

			<p>I'm also known online as PalladiumTurtle.</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem saepe aut dolor
				laboriosam? Nulla illum repellat laudantium perspiciatis quaerat laboriosam. Illo totam cum
				ipsa soluta alias ut quos dicta facilis!
			</p>
		</div>
	</div>

	<div class="daisy-divider mt-2" />

	<div class="flex flex-wrap sm:flex-nowrap sm:gap-12">
		<figure class="shrink-0 w-fit mx-auto">
			<img src="/images/favicon.png" alt="Petal Quest logo" class="h-48 aspect-square shrink-0" />
			<figcaption class="italic m-1">Artwork by Peter D.</figcaption>
		</figure>
		<div>
			<h2 class="">Tal S</h2>
			<p class="italic">Pronouns: she/her</p>

			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem saepe aut dolor
				laboriosam? Nulla illum repellat laudantium perspiciatis quaerat laboriosam. Illo totam cum
				ipsa soluta alias ut quos dicta facilis!
			</p>
		</div>
	</div>
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
