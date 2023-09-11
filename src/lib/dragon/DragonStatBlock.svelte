<script lang="ts">
	import type { DragonConfig } from '.';
	import { DragonStats } from './dragon-stats';

	export let config: DragonConfig;

	const dragon: DragonStats = new DragonStats(config);
</script>

<div class="columns-1 md:columns-2 text-left">
	<p class="font-bold text-xl mt-0">{dragon.title}</p>
	<p>
		Eventually this will be the dragon stat block. For now, we're just displaying the dragon config: {config}
	</p>
	<p>Here are the dragon stats: {JSON.stringify(dragon)}</p>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aut praesentium consectetur
		cum. Non corrupti aliquid maiores, corporis ducimus suscipit. A asperiores illum sapiente
		accusantium cum iusto ea! Esse, ut! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
		Odit totam beatae exercitationem velit animi labore non quos nam eos? Optio ipsum quasi incidunt
		dolor unde, vero expedita! Totam, quam molestias! Lorem ipsum dolor sit amet consectetur
		adipisicing elit. Quae repellendus laboriosam qui iste. Non consequatur soluta deleniti rem!
		Quia dolor eius explicabo quas atque rem amet earum incidunt exercitationem ducimus? Lorem ipsum
		dolor sit amet consectetur adipisicing elit. Modi id, provident blanditiis cumque distinctio
		eum, eligendi obcaecati illum cupiditate molestias consequuntur quos ea asperiores tempore
		magnam eaque perspiciatis odit quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Nesciunt, veritatis in voluptate recusandae dignissimos dolore fugiat nobis reiciendis vero
		eaque veniam illo. Animi eveniet temporibus quisquam, veritatis fugit esse cumque. Lorem ipsum
		dolor sit amet consectetur adipisicing elit. Laudantium, dolores exercitationem cumque minima
		sunt beatae, soluta nobis quisquam sed illo laboriosam pariatur deleniti aut adipisci sequi
		totam atque suscipit illum.
	</p>
</div>
