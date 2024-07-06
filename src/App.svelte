<script>
	import VideoList from "./Video_list.svelte";
	import Footer from "./Footer.svelte";

	export let system;

	let people = [
		{name:"mark", img:`https://i.pinimg.com/736x/36/46/79/364679f2ce6ba05c78649ed8f491e48f.jpg`, id:1},
		{name:"joe", img:`https://i.pinimg.com/736x/36/46/79/364679f2ce6ba05c78649ed8f491e48f.jpg`, id:2},
		{name:"ron-ron", img:`https://i.pinimg.com/736x/36/46/79/364679f2ce6ba05c78649ed8f491e48f.jpg`, id:3},
		{name:"harold", img:`https://i.pinimg.com/736x/36/46/79/364679f2ce6ba05c78649ed8f491e48f.jpg`, id:3},
		{name:"fee", img:`https://i.pinimg.com/736x/36/46/79/364679f2ce6ba05c78649ed8f491e48f.jpg`, id:3}
	];
</script>

<main>
	<h1>{system["headerTitle"]}</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>


<div class="video_contener">
	<div class="video_display">
		{#each people as person}
			<VideoList namse = "{person.name}"  img ="{person.img}"/>
		{/each}
	</div>
</div>

 
<Footer />



<style>

 
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #0b2631;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: bold;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	@media (max-width: 763px) {
		h1 {
			font-size: 3em;
		}
	}


	@media (max-width: 639px) {
		h1 {
			font-size: 2.4em;
			text-align: center;
			line-height: 35px;
		}
	}

	




	.video_contener{
		display:flex;
		align-items: center;
		justify-content: center;
		margin:20px 0px 30px 0px;
		position: relative;
		flex-flow: column;
		width:100%;
	}

	.video_contener > .video_display{
		display: flex;
		justify-content: center;
		align-items: center;
		gap:20;
		flex-flow: row;
		flex-wrap: wrap;
	}

</style>