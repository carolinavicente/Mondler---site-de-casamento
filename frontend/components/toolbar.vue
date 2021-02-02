<template>
  <v-toolbar color="#d98c8c" dark fixed app clipped-right>
    <div>
      <v-btn :to="{name: 'index'}" flat dark ripple>Página Inicial</v-btn>
      <v-btn :to="{name: 'fotos'}" flat dark ripple>Album de Fotos</v-btn>
      <v-btn :to="{name: 'mensagens'}" flat dark ripple>Mural de Mensagens</v-btn>
      <v-btn :to="{name: 'presenca'}" flat dark ripple>Confirma Presença</v-btn>
      <v-btn :to="{name: 'mapa'}" flat dark ripple>Data e Endereço</v-btn>
      <v-btn :to="{name: 'presente'}" flat dark ripple>Lista de Presentes</v-btn>
      <v-btn :to="{name: 'hotel'}" flat dark ripple>Dicas e Sugestões</v-btn>
    </div>
    <v-spacer></v-spacer>
    <v-menu v-if="logged_user" offset-y>
      <v-btn icon slot="activator" class="ma-0 ml-5">
        <v-avatar size="36px">
          <img src="https://graph.facebook.com/4/picture?width=300&height=300">
        </v-avatar>
      </v-btn>
      <v-card class="no-padding">
        <v-list two-line>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <v-avatar>
                <img src="https://graph.facebook.com/4/picture?width=300&height=300">
              </v-avatar>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{logged_user.first_name}} {{logged_user.last_name}}</v-list-tile-title>
              <v-list-tile-sub-title>{{logged_user.email}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <v-list>
          <v-list-tile @click="switchMode()">
            <v-list-tile-content>
              <v-list-tile-title>Staff mode</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="logout()">
            <v-list-tile-content>
              <v-list-tile-title>Log out</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-menu>
    <login-dialog ref="login_dialog"/>
  </v-toolbar>
</template>

<script>
  import Vuex from 'vuex'
  import loginDialog from '~/components/login-dialog.vue'
  import Snacks from '~/helpers/Snacks.js'
  import AppApi from '~apijs'
  export default {
    components: {
      loginDialog
    },
    computed: Object.assign(
      {},
      Vuex.mapGetters([
        'logged_user'
      ])
    ),
    props: ['state'],
    methods: {
      open_login_dialog (evt) {
        this.$refs.login_dialog.open();
        evt.stopPropagation();
      },
      logout(){
        AppApi.logout().then(()=>{
          this.$store.commit('SET_LOGGED_USER', null);
          Snacks.show(this.$store, {text: 'Até logo!'})
        });
      }
    }
  }
</script>

<style scoped>

</style>