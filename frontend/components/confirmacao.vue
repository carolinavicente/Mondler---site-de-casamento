<template>
    <div class="container">
        <h1>Confirme sua presença!</h1><br><br>
        <input type="text"
            class="confirmanome"
            v-model="nome"
            size=40
            placeholder="Nome do convidado (igual no convite)"><br><br>
            <div v-if="nome=='Carolina'"
                class="confirmavai">
                <h3>Você irá ao evento?</h3>
                <input type="radio" v-model="status" name="status" value="sim">Sim   
                <input type="radio" v-model="status" name="status" value="não">Não
            </div><br>
                <div v-if="status=='sim'"
                    class="confirmanumero">
                    <h3> Quantos adultos?</h3><br>
                    <v-select v-model="selected"
                            :items="items">
                    </v-select>
                </div><br>
                    <v-btn v-if="selected==2">Confirmar</v-btn>


    </div>
</template>

<script>

export default {
    data () {
        return {
            nome: '',
            status: '',
            selected: '',
            items: [1,2,3]
        }
  },
}
</script>

<style>
.container {
    display: flex;
    background-color: pink;
    height: 600px;
    width: 800px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center
}
.confirmanome {
    display: flex;
    justify-content: center;
    align-items: center;
    border-style: solid;
    border-width: medium
},
.confirmavai {
    display: flex;
},
.confirmanumero {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 50px
},
button {
    border-style: solid;
    border-width: medium;
    width: 100px
}
</style>