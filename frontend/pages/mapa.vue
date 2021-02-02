<template>
    <div class="all">
        <h2>01 de Maio de 2021</h2>
        <h2>16:00</h2><br>
        <div class="mapouter">
            <div class="gmap_canvas">
                <iframe width="800" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Morgan%20Chase%20Museum&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                </iframe>
                <a href="https://123movies-to.org">123movies</a><br>
                <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
.all {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
}
h2 {
    color: #c65353cb;
    font-family: 'Muli';
    font-size: 25px
}
.mapouter {
    position:relative;
    text-align:right;
    height:500px;
    width:600px
}
.gmap_canvas {
    overflow:hidden;
    background:none!important;
    height:500px;
    width:600px
    }
</style>