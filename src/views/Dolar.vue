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
import axios from 'axios'

export default {
  name: 'Dolar',
  components: {
    // Loading
  },

  data: () => ({
    dolar: [],
    lafecha: [],

    isLoading: true
  }),

  created() {
    this.get_Datos()
    // console.log('created')
  },

  mounted() {
    // this.get_Datos()
    // console.log('mounted')
  },

  methods: {
    async get_Datos() {
      try {
        const { data: datos } = await axios.get(
          'https://mindicador.cl/api/dolar'
        )
        this.dolar = await datos.serie

        this.isLoading=false

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
        for (var i = 0; i < this.dolar.length; i++) {
          dataPoints.push({
            x: new Date(this.dolar[i].fecha),
            y: this.dolar[i].valor
          })
        }
        chart.render()
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
