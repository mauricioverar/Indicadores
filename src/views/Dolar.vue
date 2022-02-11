<template>
  <div>
    <!-- <loading v-model:active="isLoading"
                 :can-cancel="true"
                 :on-cancel="onCancel"
                 :is-full-page="fullPage"/> -->
    <!-- <loading
           :active.sync="isLoading"
           :can-cancel="false"
           :is-full-page=true
       /> -->
    <div
      id="chartContainer"
      style="height: 370px; max-width: 920px; margin: 0px auto"
    ></div>
  </div>
</template>

<script>
// import Loading from 'vue-loading-overlay'
// import 'vue-loading-overlay/dist/vue-loading.css'
// import axios from 'axios'
import { mapState } from 'vuex'


export default {
  name: 'Dolar',
  components: {
    // Loading
  },

  data: () => ({

    // isLoading: true
  }),

  created() {
  },

  computed: {
      ...mapState(['dolars']),
    },

  mounted() {
    this.grafico()
  },

  methods: {
    grafico() {
      var dataPoints = []
        let chart = new CanvasJS.Chart('chartContainer', {
          theme: 'light2',
          animationEnabled: false,
          title: {
            text: 'Dolar'
          },
          data: [
            {
              type: 'spline',
              dataPoints: dataPoints
            }
          ]
        })
        for (var i = 0; i < this.dolars.length; i++) {
          dataPoints.push({
            x: new Date(this.dolars[i].fecha),
            y: this.dolars[i].valor
          })
        }
        chart.render()
    }
  }
}
</script>
