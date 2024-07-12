<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function handleCloseModel() {
        dispatch('model');
    }

</script>




<div class="background_alert"></div>
<div class="model">
    <button on:click={handleCloseModel}>sdfsef</button>
</div>



<style>
    .model{
        position: fixed;
        top:50%;
        left:50%;
        width:80%;
        height:300px;
        transform: translate(-50%, -50%);
        background-color: black;
        z-index:999;
    }

    .background_alert{
        background-color: rgba(0, 0, 0, 0.377);
        width:100%;
        height:100%;
        position: fixed;
        z-index:99;
        top:0;
        left:0;
    }
</style>





