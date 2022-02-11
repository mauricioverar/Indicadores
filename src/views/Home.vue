<template>
<div>
  
  <hello-world />
  <!-- <div>
      <button @click="muestra">muestra</button>
    </div> -->
</div>
</template>

<script>
// import {  mapState } from 'vuex'

  import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'Home',

    components: {
      HelloWorld,
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
