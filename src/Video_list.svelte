<script>
    export let namse = "";
    export let img = "";
    let videoData = {
        "name": namse,
        "img":img 
    }
</script>


<div class="cardvideo">
     <div class="video_display" style="background-image: url({videoData["img"]});"> {videoData["name"]}
        
        <div class="video_content">
            <h2>Lorem, ipsum. {videoData["name"]}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, harum.</p>
        </div>
     </div>
     
     <div class="sidecontent">
        <div class="divider">d</div>
        <div class="divider">d</div>
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
    background-color: black;
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
}
</style>