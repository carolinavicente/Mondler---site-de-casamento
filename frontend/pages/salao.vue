<template>
  <v-layout column justify-center align-center>
    <h1> Dicas</h1><br>
    <h3> Separamos algumas sugestões para ajudar os nossos queridos convidados de longe.</h3><br>
    <div class="botoes">
      <v-btn :to="{name: 'hotel'}" color="#c65353" dark >Hotel</v-btn>
      <v-btn :to="{name: 'salao'}" color="#c65353" dark >Salão</v-btn>
    </div><br><br>
    <div class="salao">
      <h2> Alibi NYC Salon </h2>
      <a class="link" href="https://alibinycsalon.com/">https://alibinycsalon.com/</a>
      <h4>Address: 355 W Broadway, New York, NY 10013</h4>
      <h4>Phone: +1 917-796-6996</h4><br><br>

      <h2> Hair Throne Salon </h2>
      <a class="link" href="https://www.hairthronesalon.com/">https://www.hairthronesalon.com/</a>
      <h4>Address: 60 Orchard St, New York, NY 10002</h4>
      <h4>Phone: +1 212-220-3688</h4><br><br>

      <h2> Lovella Salon </h2>
      <a class="link" href="https://lovellanyc.com/">https://lovellanyc.com/</a>
      <h4>Address: 1296 2nd Ave, New York, NY 10065</h4>
      <h4>Phone: +1 212-570-4441</h4><br><br>
    </div>
  </v-layout>
</template>

<script>
export default {

}
</script>

<style scoped>
h1 {
  color: #c65353cb
}
h3 {
  color: #720000cb
}
.salao {
  display: flex;
  flex-direction: column;
  align-items: center
},
.link {
  font-size: 16px
},
h2 {
  color:  #ac4444cb
}
</style>