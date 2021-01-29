<template>
    <div class="container">
        <h2>Confirme sua presença!</h2><br>
        <input type="text"
            class="confirmanome"
            v-model="nome"
            placeholder="Nome do convidado (igual no convite)"><br>
            <div v-if="convidadoSelecionado" class="telefone">
                <input type="text"
                    class="ddd"
                    :maxlength="3"
                    v-model="ddd"
                    placeholder="DDD">
                <input type="text"
                    class="numerotel"
                    :maxlength="9"
                    v-model="numerotel"
                    placeholder="Telefone">
            </div><br>
            <div v-if="convidadoSelecionado" class="confirmavai">
                <h3 class="oie"> Você irá ao evento? </h3>
                <div>
                    <input type="radio" v-model="status" name="status" value="sim">Sim   
                    <input type="radio" v-model="status" name="status" value="não">Não
                </div>
            </div><br>
                <div v-if="status=='sim'" class="confirmanumero">
                    <h3> Quantas pessoas?</h3>
                    <input type="text"
                        :maxlength="2"
                        class="quantos"
                        v-model="confirmados">
                </div><br>
                    <v-btn v-if="convidadoSelecionado && confirmados>=1 && confirmados<=convidadoSelecionado.convitinhos || status=='não'"
                        color="#c65353" dark>Confirmar</v-btn>


    </div>
</template>

<script>

import AppApi from '~apijs'

export default {
    data () {
        return {
            nome: '',
            ddd: '',
            numerotel: '',
            status: '',
            selected: '',
            confirmados: '',
            convidados: []
        }
    },
    async mounted () {
        this.convidados = await AppApi.list_convidados()
    },
    computed: {
        names () {
            return this.convidados.map(convidado => {
                return convidado.guest_name
            })
        },
        convidadoSelecionado () {
            return this.convidados.find(convidado => {
                return convidado.guest_name == this.nome
            })
        }
    }
}
</script>

<style>

.container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 460px;
    width: 460px;
}
.confirmanome {
    display: flex;
    height: 50px;
    width: 330px;
    padding: 10px;
    border-style: solid
}
.ddd {
    height: 45px;
    width: 70px;
    padding: 10px;
    border-style: solid
}
.numerotel {
    height: 45px;
    width: 230px;
    padding: 10px;
    border-style: solid
}
.confirmavai {
    display: flex;
    flex-direction: column;
    align-items: center
}
.confirmanumero {
    display: flex;
    flex-direction: column;
    align-items: center
}
.quantos {
    height: 40px;
    width: 50px;
    padding: 10px;
    border-style: solid;
}

</style>