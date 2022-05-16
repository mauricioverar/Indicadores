<template>
  <div>
    <!-- usar imagen abajo zindex -->

    <div v-if="loder">
      <div class="text-center">
        <!-- <v-icon
      large
      color="green darken-2"
    >
      mdi-currency-usd 
    </v-icon> -->
        <span><b> UF </b></span>
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
      <Tabla :datos="ufs" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Tabla from '@/components/Tabla'

export default {
  name: 'UF',
  components: { Tabla },

  data: () => ({
    loder: true
  }),

  created() {
    //this.loder = true
    //this.get_Datos()
    // console.log('created')
  },

  computed: {
    ...mapState(['ufs'])
  },

  mounted() {
    this.grafico()
    // this.get_Datos()
    // console.log('mounted')
  },

  methods: {
    grafico() {
      const months = [
        'JAN',
        'FEB',
        'MAR',
        'APR',
        'MAY',
        'JUN',
        'JUL',
        'AUG',
        'SEP',
        'OCT',
        'NOV',
        'DEC'
      ]
      //let loder = true
      setTimeout(() => {
        var dataPoints = []
        let chart = new CanvasJS.Chart('chartContainer', {
          theme: 'light2',
          animationEnabled: false,
          title: {
            text: 'UF'
          },
          // axisX: {
          //   labelFormatter: function (e) {
          //     return CanvasJS.formatDate(e.value, 'DD MMM')
          //   },
          //   labelAngle: -20
          // },
          data: [
            {
              type: 'spline',
              dataPoints: dataPoints
            }
          ]
        })
        for (var i = 0; i < this.ufs.length; i++) {
          dataPoints.push({
            x: new Date(this.ufs[i].fecha),
            y: this.ufs[i].valor
          })
          console.log(
            this.ufs[i].fecha,
            dataPoints[i].x.getDate(),
            '-',
            months[dataPoints[i].x.getMonth()],
            '-',
            dataPoints[i].x.getFullYear()
          )
        }
        this.loder = false

        chart.render()
      }, 0)
    }
  }
}
</script>
