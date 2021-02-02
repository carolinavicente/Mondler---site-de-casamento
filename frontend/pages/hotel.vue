<template>
  <v-layout column justify-center align-center>
    <h1> Dicas</h1><br>
    <h3> Separamos algumas sugestões para ajudar os nossos queridos convidados de longe.</h3><br>
    <div class="botoes">
      <v-btn :to="{name: 'hotel'}" color="#c65353" dark >Hotel</v-btn>
      <v-btn :to="{name: 'salao'}" color="#c65353" dark >Salão</v-btn>
    </div><br><br>
    <div class="hotel">
      <h2> New York Marriott Marquis </h2>
      <a class="link" href="https://www.marriott.com/hotels/travel/nycmq-new-york-marriott-marquis/">https://www.marriot.com</a>
      <h4>Address: 1535 Broadway, New York, NY 10036</h4>
      <h4>Phone: +1 212-398-1900</h4><br><br>

      <h2>Arlo Soho Hotel</h2>
      <a class="link" href="https://www.arlohotels.com/arlo-soho/">https://www.arlohotels.com</a>
      <h4>Address: 231 Hudson St, New York, NY 10013</h4>
      <h4>Phone: +1 212-342-7000 </h4><br><br>

      <h2>Radisson Hotel NYC </h2>
      <a class="link" href="https://www.radissonhotels.com/en-us/brand/radisson?facilitatorId=GOOGLEAMERICAS&cid=a:ps+b:ggl+c:amer+d:latam+e:rad+f:en-us+g:cl+i:brand+r:tlb&gclid=CjwKCAiApNSABhAlEiwANuR9YDYjqntorl93NN3rfz9EKC8tnpOO7UQe1Nrdd-akoXVzRAp_hbuNyxoCfccQAvD_BwE">https://radissonhotel.com</a>
      <h4>Address: 25 W 51st Street, New York, NY 10019</h4>
      <h4>Phone: +1 (212) 262-3200</h4>
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
},
h3 {
  color: #720000cb
}
.hotel {
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
h4 {
  color: rgb(49, 47, 47)
}
</style>