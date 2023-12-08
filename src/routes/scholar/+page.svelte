<script lang="ts">
	import PageMeta from '$lib/PageMeta.svelte';
	import ButtonLink from '$lib/ButtonLink.svelte';
	import ArtScholar from '$lib/art/ArtScholar.svelte';

	const externalHref =
		'https://www.dmsguild.com/product/381129/Scholar-Artificer-Specialist?src=PQweb1';
</script>

<PageMeta
	title="Scholar - Petal Quest"
	description="The Scholar is a new Artificer Specialist for 5th edition."
	url="https://www.petalquest.com/scholar/"
/>

<article class="card p-6 pt-4 text-token text-left">
	<div class="flex flex-wrap sm:flex-nowrap sm:gap-12">
		<ArtScholar />
		<div>
			<h1 class="text-center">The Scholar</h1>
			<p class="text-center italic">A new Artificer Specialist for 5th edition.</p>

			<p>
				Whether they’re an expert in archaeology, zoology, or something else entirely, Scholars are
				researchers that use their magic as a tool to enhance their studies. Scholars can read any
				spell and can craft a set of spectacles which enable them to see with incredible precision.
				With impressive utility and flexibility, a Scholar is a valuable asset to any adventuring
				team.
			</p>

			<div class="w-fit mx-auto">
				<ButtonLink href={externalHref} external={true} openInNewTab={true}
					>Get it on DMsGuild</ButtonLink
				>
			</div>
		</div>
	</div>

	<div class="daisy-divider mt-2" />

	<h2>An Artificer Subclass for Researchers</h2>
	<p>
		In an ancient magic library, a bespectacled scribe copies secrets from a dusty tome. In a cloud
		giant’s garden, a muscled botanist harvests the latest generation of enormous hybrid gourds. In
		a red dragon’s den, a scroll-laden anatomist jots down a quick sketch of the dragon’s wing
		structure while sidestepping her fiery breath. Scholars can be found doing their research all
		over the world.
	</p>

	<h2>Published on DMsGuild</h2>
	<p>
		The Scholar is available for purchase on DMsGuild: <a href={externalHref}>{externalHref}</a>
	</p>
	<p>
		The price is "Pay What You Want" so you can get it for free! If you try it out, like it, and
		want to support us monetarily, you can always come back and buy it later for the suggested price
		of $2.
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
