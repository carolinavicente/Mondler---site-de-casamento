<template>
    <recados :mensagens="mensagens"></recados>
</template>

<script>
import recados from '~/components/recados.vue'

export default {
    props: ['mensagens'],
    components: {
        recados
    },
    data () {
        return {}
    }
}
</script>

<style>
</style>