<template>
    <v-app>
        <toolbar :state="layout"/>
            <v-card
            height="200"
            width="256"
            class="mx-auto"
            >
            <v-navigation-drawer permanent>
            <v-list-item>
                <v-list-item-content>
                </v-list-item-content>
            </v-list-item>

            <v-list
                dense
                nav
            >
                <v-list-item
                v-for="item in items"
                :key="item.title"
                >
                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list>
            </v-navigation-drawer>
        </v-card>
    </v-app>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Dashboard'},
          { title: 'Photos'},
          { title: 'About'},
        ],
        right: null,
      }
    },
  }
</script>