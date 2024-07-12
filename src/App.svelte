<script>
	import VideoList from "./Video_list.svelte";
	import Footer from "./Footer.svelte";
	import Nav from "./Nav.svelte";
	import Model from "./Model.svelte";
	import Header from "./Header.svelte";

	
	export let system;
	export let videoList;
	export let headerContext;

	let modelActions = false;

	function model(x){
		if (modelActions) {
			modelActions = false
		}else{
			modelActions = true

			alert(x)

		}
	}



	let randomQuate = randomContentHeader()

	let displayedPeople = videoList.slice(0, 5); // Initially display the first item
	let loadCount = 1;

	function loadMore() {
		const nextLoadCount = loadCount + 5;
		displayedPeople = videoList.slice(0, nextLoadCount);
		loadCount = nextLoadCount;
		randomQuate = randomContentHeader()
	}

	$: allLoaded = displayedPeople.length >= videoList.length;

	
	
	function randomContentHeader(){
		const randomIndex = Math.floor(Math.random() * headerContext.length);
    return headerContext[randomIndex];
	}


    function viewVideo(x){
		alert(x)
	}

	function heartted(index){
		const btn = document.querySelector(`#heartbtn${index}`);

		if(videoList[index].heart){
			videoList[index].heart = false;
			videoList = [...videoList];  
			btn.style=" "
		}else{
			videoList[index].heart = true;
			videoList = [...videoList];  
			btn.style="color:#c02d2d;"
		}

	}
</script>


<div class="nav">
	<div class="sides">
	 <div class="user">
		 <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
			 <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
			 <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
		   </svg>
	 </div>


	 <div class="tools">
		 <div class="toolbtns">
			 <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-clipboard2-heart-fill" viewBox="0 0 16 16">
				 <path fill-rule="evenodd" d="M10.058.501a.5.5 0 0 0-.5-.501h-2.98c-.276 0-.5.225-.5.501A.5.5 0 0 1 5.582 1a.497.497 0 0 0-.497.497V2a.5.5 0 0 0 .5.5h4.968a.5.5 0 0 0 .5-.5v-.503A.497.497 0 0 0 10.555 1a.5.5 0 0 1-.497-.499"/>
				 <path fill-rule="evenodd" d="M4.174 1h-.57a1.5 1.5 0 0 0-1.5 1.5v12a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5v-12a1.5 1.5 0 0 0-1.5-1.5h-.642q.084.236.085.5V2c0 .828-.668 1.5-1.492 1.5H5.581A1.496 1.496 0 0 1 4.09 2v-.5q.001-.264.085-.5Zm3.894 5.482c1.656-1.673 5.795 1.254 0 5.018-5.795-3.764-1.656-6.69 0-5.018"/>
			   </svg>
		 </div>

		 <div class="toolbtns">
			 <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-newspaper" viewBox="0 0 16 16">
				 <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z"/>
				 <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2z"/>
			   </svg>
		 </div>
	 </div>


 </div>
 <div class="sides">f</div>
</div>

<div class="maindata">



<br>

	<Header />



	{#if modelActions}
		<Model on:model={() => model()}/>
	{/if}
	<!-- <button on:click={model}>fsee</button> -->
	
	
	
	<main>
		<h1>{system["headerTitle"]}</h1>
		<p>{randomQuate}</p>
	</main>
	 
	
	<div class="video_contener">
		<div class="video_display">
			{#each displayedPeople as person, index}
				<!-- {#if !person["heart"]} -->
						<VideoList 
						namse={person.name} 
						on:viewVideo={() => viewVideo(person.name)} 
						on:heartted={() => heartted(index)}  
						videoId={index}
						heart={person.heart}
						img={person.img}
						on:model={() => model(index)}
						/>
				<!-- {/if} -->
			{/each}
		</div>
	</div>
	
	{#if !allLoaded}
		<div class="button_more">
			<button on:click={loadMore}>Load More</button>
		</div>
	{/if}
	
	
	<Footer />
	
</div>




<style>

.nav{
	    background-color: rgb(20, 29, 48);
		width:100%;

        display: flex;
        align-items: center;
        flex-flow: row-reverse;
        overflow: hidden;
		height:70px;
	}
 

    .sides{
        padding:5px;
        flex: 1;
        border-radius: 1px solid black;
        width:100%;
        height:100%;
        color:ghostwhite;

		display: flex;
        justify-content: flex-end;
        align-items: center;
		flex-flow: row;
    }

    .sides > .user{
        padding:10px;
        display: flex;
        justify-content: center;
        align-items: center;
		height:100%;
    }

    .sides > .tools{
        padding:10px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: row;
		height:100%;
        gap:20px;
    }

    .sides > .tools > .toolbtns{
        cursor: pointer;
		height:100%;
		display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: row;
    }

    .sides > .tools > .toolbtns:hover{
        color: rgb(99, 184, 241);
    }


    .sides:nth-child(1){
		
    }

    .sides:nth-child(2){
        display: flex;
        /* justify-content: flex-end; */
        align-items: flex-end;
    }

    .sides > .user > svg{
        cursor: pointer;
		margin-top:10px;
    }

	.sides > .tools > .toolbtns > svg{
			cursor: pointer;
			margin-top:10px;
    }
















	.maindata{
		width:100%;
		overflow: auto;
		padding:8px;
	}

 	
	
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #0b2631;
		/*text-transform: uppercase;*/
		font-size: 4em;
		font-weight: bold;
		margin:0;
		padding: 0;
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

	


	.button_more{
		display: flex;
		justify-content: center;
		align-items: center;	
	}

	.button_more > button{
		cursor: pointer;
		width:60%;
		transition: .4s;
		padding:10px 20px;
	}

	.button_more > button:hover{
		background-color: #0b2631;
		color: ghostwhite;
		font-weight: bold;
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