<script>
    import { createEventDispatcher } from 'svelte';
    export let namse = "";
    export let img = "";
    export let videoId = "";
    export let heart = "";
    let dataStyle = ""
    
    if (heart) {
        dataStyle = "color:#c02d2d;"
    }else{
        dataStyle = ""
    }

    let videoData = {
        "name": namse,
        "img":img 
    }

    const dispatch = createEventDispatcher();

    function handleViewVideo() {
        dispatch('viewVideo');
    }

    function handleheartted() {
        dispatch('heartted');
    }

    function handleModel() {
        dispatch('model');
    }


</script>

<!-- on:click -->
<div class="cardvideo" id="videolist{videoId}">
     <div class="video_display" style="background-image: url({videoData["img"]});" on:click={handleModel}>  
        
        <div class="video_content">
            <h2>Lorem, ipsum. {videoData["name"]}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, harum.</p>
        </div>
     </div>
     
     <div class="sidecontent">
        <div class="divider">
            <button on:click={handleModel}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
                </svg>
            </button> 
        <button on:click={handleheartted} class="" style="{dataStyle}" id="heartbtn{videoId}">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
              </svg>
        </button></div>
        <div class="divider">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-circle-square" viewBox="0 0 16 16">
                    <path d="M0 6a6 6 0 1 1 12 0A6 6 0 0 1 0 6"/>
                    <path d="M12.93 5h1.57a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1.57a7 7 0 0 1-1-.22v1.79A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 4h-1.79q.145.486.22 1"/>
                  </svg>
            </button>
        </div>
     </div>
</div>


<style>

 

.cardvideo{
    width:240px;
    height: 320px;
    display: inline-block;
    margin-right:10px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    margin-top:10px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row;
    transition: .5s;
}

.cardvideo:hover{
    box-shadow: 0px 8px 12px 6px rgba(0,0,0,0.47);
    -webkit-box-shadow: 0px 8px 12px 6px rgba(0,0,0,0.47);
    -moz-box-shadow: 0px 8px 12px 6px rgba(0,0,0,0.47);
    }

.cardvideo > .video_display{
    height:100%;
    width:100%;
    transition: .4s;
    padding:10px;
    color:ghostwhite;
    cursor: pointer;
    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}

.cardvideo > .video_display > .video_content{
   position: absolute;
   bottom:0;
   left:0;
   width:100%;
   padding:10px;
   transition: .4s;
   background: rgb(255,255,255);
   background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(9,14,51,1) 98%);
}

.cardvideo:hover .video_content{
   transition: .4s;
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(9,14,51,1) 72%);
}

.video_content > h2{
   line-height:20px;
   margin:0;
   padding:0;
}
.video_content > p{
    width:90%;
    word-wrap: break-word;
    font-size: smaller;
}



.cardvideo > .sidecontent{
    /* background: rgb(42,35,35);
    background: linear-gradient(180deg, rgba(42,35,35,1) 0%, rgba(19,21,36,1) 59%, rgba(9,14,51,1) 100%); */
    background-color: #424242;
    height:100%;
    width:40px;
    transition: .4s;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    padding:5px;
}

.cardvideo > .sidecontent > .divider{
    height:100%;
    width:100%;
    flex: 1;
    padding:2px;
}

.cardvideo > .sidecontent > .divider > button{
    padding:0;
    margin:0;
    background-color: transparent;
    border: none;
    outline:0;
    color:ghostwhite;
    margin-top:10px;
    cursor: pointer;
    transition: .3s;

    width:100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}



.cardvideo > .sidecontent > .divider > button:hover{
    color: rgb(99, 184, 241);
}

.cardvideo > .sidecontent >  .divider:nth-child(1){
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-flow: column;
}


.cardvideo > .sidecontent >  .divider:nth-child(2){
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-flow: column;
    /* border: 1px solid #c02d2d; */
}

 
</style>