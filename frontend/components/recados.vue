<template>
  <div class="test">
    <v-list two-line>
      <template v-for="mensagem in mensagens">
        <v-list-item-content class="espaco">
          <v-list-item-title class="author_name"><u><strong> {{mensagem.author_name}}</strong></u></v-list-item-title>
          <v-list-item-subtitle class="mensagem">{{mensagem.text}}</v-list-item-subtitle><br>
        </v-list-item-content>
      </template>
    </v-list>
  </div>
</template>

<script>

export default {
  props: ['mensagens'],
  data () {
    return {}
  }
}
    
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

.test {
  display: flex;
  justify-content: center;
  align-items: center
}
.author_name {
  display: flex;
  justify-content: center;
  color: #c65353;
  font-family: 'Muli';
  font-size: 17px
}
.mensagem {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px
}
</style>