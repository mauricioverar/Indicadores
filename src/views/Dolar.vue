<template>
  <div>
    <!-- usar imagen abajo zindex -->
    <div v-if="loder">
      <div class="text-center">
      <!-- <img src="@/assets/dolar.png" alt="dolar"> -->
      <v-icon
      large
      color="green darken-2"
    >
      mdi-currency-usd 
    </v-icon>

        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </div>
    </div>

    <div
      id="chartContainer"
      style="height: 370px; max-width: 920px; margin: 0px auto"
    ></div>
    <div>
      <Tabla :datos="dolars" />
    </div>
  </div>
</template>

<script>
// import Loading from 'vue-loading-overlay'
// import 'vue-loading-overlay/dist/vue-loading.css'
// import axios from 'axios'
import { mapState } from 'vuex'
import Tabla from '@/components/Tabla'

export default {
  name: 'Dolar',
  components: {
    Tabla
  },

  data: () => ({
    loder: true
  }),

  created() {
    //this.loder = true
  },

  computed: {
    ...mapState(['dolars'])
  },

  mounted() {
    this.grafico()
  },

  methods: {
    grafico() {
      let loder = true
      setTimeout(() => {
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
        this.loder = false

        chart.render()
      }, 1000)
    }
  }
}
</script>
