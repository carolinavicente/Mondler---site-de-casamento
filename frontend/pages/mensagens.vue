<template>
    <div>
        <novamensagem @novamensagem=addMural($event.data)></novamensagem><br><hr><br>
        <recados :mensagens="mensagens"></recados>
    </div>
</template>

<script>

import novamensagem from '~/components/novamensagem.vue'
import recados from '~/components/recados.vue'
import AppApi from '~apijs'

export default {
    components: {
        novamensagem, recados
    },
    data () {
        return {
            mensagens: [],
        }
    },
    methods: {
        addMural(mensagem) {
            this.mensagens.push(mensagem)
        }
    },
    // asyncData() {
    //     return AppApi.list_mensagens().then(result => {
    //         return {
    //             mensagens: result.data
    //         }
    //     })
    // },
    mounted () {
        AppApi.list_mensagens().then(result => {
            this.mensagens = result.data
        })
    }
}
</script>

<style>
</style>