<script>
 
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


<style>
    .nav{
        background-color: rgb(20, 29, 48);
        height:100%;
        flex:.1;

        display: flex;
        align-items: center;
        flex-flow: column;
        overflow: hidden;
    }

    @media (max-width: 768px){
        .nav{
            display: none;
        }
    }

    .sides{
        padding:5px;
        flex: 1;
        border-radius: 1px solid black;
        width:100%;
        height:100%;
        color:ghostwhite;
    }

    .sides > .user{
        padding:10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .sides > .tools{
        margin-top:20px;
        padding:10px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
        gap:20px;
    }

    .sides > .tools > .toolbtns{
        cursor: pointer;
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
    }
</style>