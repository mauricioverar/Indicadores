<template>
<div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/bitcoin">Bitcoin</router-link> |
      <router-link to="/dolar">Dolar</router-link> |
      <router-link to="/uf">UF</router-link>
      <!-- <div>{{ logout }}</div> -->
       <!-- <span class="mdiLogout">{{logout}}</span>
       <span class="mdi mdi-alert-circle-check-outline"> </span>
       <span class="mdi mdi-alert-circle-check-outline"></span> -->
       <i class="mdi mdi-alert-circle-check-outline" aria-hidden="true"></i>
       

    </div>
    <router-view/>
  </div>
</template>

<script>

import { mapActions } from 'vuex'
import { mdiLogout } from '@mdi/js'


export default {
  name: 'App',
  components: {
  },

  data: () => ({
    logout: mdiLogout,
  }),

  methods: {
    ...mapActions(['get_Datos', 'get_DatDolar'])
  },

  mounted() {
    this.get_Datos()
    this.get_DatDolar()
  }
}
</script>