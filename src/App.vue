<template>
<div>
  
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-btn to="/" text>
          <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn to="/uf" text>
          <span>UF</span>
        </v-btn>

        <v-btn to="/dolar" text>
          <span>Dolar</span>
        </v-btn>
        
        <v-btn to="/bitcoin" text>
          <span>Bitcoin</span>
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <!-- <v-btn to="/" text>
        <v-icon>mdi-logout</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
  <div>
      <button @click="muestra">muestra</button>
    </div>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'App',
  // props: ["uf"],

  data: () => ({
  }),

  created() {
    this.get_Datos()
    this.get_DatDolar()
    this.get_DatBitcoin()
  },

  computed: {
      ...mapState(['ufs', 'dolars', 'bitcoins']),
    },

  
   methods: {
    // ...mapState(['ufs']), // definido como props
    ...mapActions(['get_Datos', 'get_DatDolar', 'get_DatBitcoin']),

    muestra () {
    console.log('carrito ', this.dolars)
    }

  },

  mounted() {
    // this.get_Datos()

    // console.log('datos uf.serie: ', this.ufs)
  },

  updated() {
    // console.log('datos uf.serie: ', this.ufs)
  }

  /*
  mounted() {
    this.get_Datos()
    this.get_DatDolar()
  }
  */
}
</script>
