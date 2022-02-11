<template>
<div>
  
  <Celular />
  <!-- <div>
      <button @click="muestra">muestra</button>
    </div> -->
</div>
</template>

<script>
// import {  mapState } from 'vuex'

  import Celular from '../components/Celular'

  export default {
    name: 'Home',

    components: {
      Celular,
    },

    // computed: {
    //   ...mapState(['ufs']),
    // },

    methods: {
    //   muestra () {
    // console.log('carrito ', this.ufs)
    // }
    }
  }
</script>
