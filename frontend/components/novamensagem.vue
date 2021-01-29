<template>
    <v-row class="oie" justify="center">
        <v-dialog
            v-model="dialog"
            persistent
            max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="#c65353"
                dark
                v-bind="attrs"
                v-on="on">Nova mensagem
            </v-btn>
        </template>
            <v-card>
                <v-card-title>
                    <span class="headline">Escreva uma mensagem aos noivos!</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4">
                            <v-text-field
                                label="Nome*"
                                v-model="author_name"
                                required>
                            </v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4">
                            <v-text-field multi-line
                                rows="5"
                                label="Mensagem*"
                                v-model="text">
                            </v-text-field>
                        </v-col>
                        </v-row>
                    </v-container>
                    <small>*campo obrigatório</small>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                    <v-btn
                        color="#c65353"
                        text
                        @click="dialog = false"> Cancelar
                    </v-btn>
                    <v-btn
                        color="#c65353"
                        text
                        @click="enviar()"> Enviar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>

import AppApi from '~apijs'

  export default {
    data: () => ({
      dialog: false,
      author_name: '',
      text: ''
    }),

    methods: {
        enviar() {
            return AppApi.mensagem(this.author_name, this.text).then(mensagem => {
                this.$emit('novamensagem', mensagem)
            this.dialog = false
            this.author_name = ''
            this.text = ''
            })
        }
    }
  }
</script>

<style>
.oie {
    display: flex;
    justify-content: center;
    align-items: center 
}
</style>