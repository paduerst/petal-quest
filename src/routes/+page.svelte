<script lang="ts">
	import PageMeta from '$lib/PageMeta.svelte';
	import SpellLink from '$lib/spells/SpellLink.svelte';
	import ButtonLink from '$lib/ButtonLink.svelte';
	import ArtPrismaticDragons from '$lib/art/ArtPrismaticDragons.svelte';
	import ArtScholar from '$lib/art/ArtScholar.svelte';
</script>

<PageMeta
	title="Petal Quest"
	description="Petal Quest is making TTRPG content."
	url="https://www.petalquest.com/"
/>

<article class="card p-6 pt-4 text-token text-left">
	<h1 class="text-center">Petal Quest</h1>
	<p class="text-center italic">Peter + Tal = Petal</p>

	<p class="px-2 sm:px-6">
		<b>Hello!</b> We're <span class="whitespace-nowrap"><b>Peter D</b> (he/him)</span> and
		<span class="whitespace-nowrap"><b>Tal S</b> (she/her)</span>, publishing content for 5th
		edition under the title
		<b class="whitespace-nowrap">Petal Quest</b>. We've been playing tabletop roleplaying games
		(TTRPGs) for years, and over that time we've created a lot of homebrew content. When we make
		something that we think is really special and useful to other people, we feature it on this
		website!
	</p>

	<div class="daisy-divider mt-2" />

	<div class="flex flex-wrap sm:flex-nowrap sm:gap-12">
		<ArtPrismaticDragons />
		<div>
			<h2><a href="/prismatic-dragons/">The Prismatic Dragons</a></h2>
			<p class="italic">A new family of dragons for 5th edition.</p>

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

	<div class="flex flex-wrap sm:flex-nowrap sm:gap-12">
		<ArtScholar />
		<div>
			<h2><a href="/scholar/">The Scholar</a></h2>
			<p class="italic">A new Artificer Specialist for 5th edition.</p>

			<p>
				Whether they’re an expert in archaeology, zoology, or something else entirely, Scholars are
				researchers that use their magic as a tool to enhance their studies. Scholars can read any
				spell and can craft a set of spectacles which enable them to see with incredible precision.
				With impressive utility and flexibility, a Scholar is a valuable asset to any adventuring
				team.
			</p>

			<div class="w-fit mx-auto">
				<ButtonLink
					href="https://www.dmsguild.com/product/381129/Scholar-Artificer-Specialist?src=PQweb2"
					external={true}
					openInNewTab={true}>Get it on DMsGuild</ButtonLink
				>
			</div>
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
