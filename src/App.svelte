<script>
	import VideoList from "./Video_list.svelte";
	import Footer from "./Footer.svelte";


	export let name;
	let people = [
		{name:"mark", age:30, id:1},
		{name:"joe", age:28, id:2},
		{name:"ron-ron", age:18, id:3},
		{name:"harold", age:18, id:3}
	];
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>


<div class="video_contener">
	<div class="video_display">
		{#each people as person}
			<VideoList namse = "{person.name}" />
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
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}









	.video_contener{
		display:flex;
		align-items: center;
		justify-content: center;
		margin:20px 0px 130px 0px;
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