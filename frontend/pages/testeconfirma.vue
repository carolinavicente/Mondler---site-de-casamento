<template>
    <v-row justify="center">
        <v-dialog
            v-model="dialog"
            persistent
            max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="primary"
                dark
                v-bind="attrs"
                v-on="on">
                Confirme sua presença!
            </v-btn>
        </template>
            <v-card>
                <!-- <v-card-title>
                    <span class="headline">Escreva sua mensagem</span>
                </v-card-title> -->
                <v-card-text>
                    <v-container>
                        <v-row>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4">
                            <v-text-field
                                label="Nome (igual no convite)*"
                                required>
                            </v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4">
                            <v-text-field
                                label="E-mail*">
                            </v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4">
                            <v-text-field
                                label="Telefone*"
                                required>
                            </v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6">
                            <v-select
                                :items="['1', '2', '3', '4', '5', '6']"
                                label="Número de adultos*"
                                required>
                            </v-select>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6">
                            <v-autocomplete
                                :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                label="Interests"
                                multiple>
                            </v-autocomplete>
                        </v-col>
                        </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="dialog = false"> Close
                    </v-btn>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="dialog = false"> Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
    }),
  }
</script>