<template>
    <div class="all">
        <h2>Listas de Presentes</h2><br>
        <h3>Se quiser nos presentear, criamos listas virtuais em algumas lojas que podem ser acessadas abaixo.</h3><br><br>
        <main>
                <a href="https://www.bedbathandbeyond.com/">
                    <img src="https://licensinginternational.org/wp-content/uploads/2020/04/bedthbath2.jpg" height=120px width=240px><br>
                </a>
                <a href="https://www.potterybarn.com/">
                    <img src="https://masterofrevit.files.wordpress.com/2018/04/pottery-barn9.png" height=120px width=240px><br>
                </a>
                <a href="https://www.ikea.com/">
                    <img src="https://cdn.mos.cms.futurecdn.net/H95bg4rrACvGwq5V2rtVUk-1200-80.jpg" height=120px width=240px><br>
                </a>
        </main>
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
    align-items: center;
    font-family: 'Muli'
}
h2 {
    color: #c65353cb;
    font-size: 25px
}
h3 {
    color: #912a2acb
}
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 420px
}
a {
	box-shadow:  7px 7px 10px rgba(50, 50, 50, 0.77);
}

</style>