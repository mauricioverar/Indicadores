<template>
  <div>
    <div
      id="chartContainer"
      style="height: 370px; max-width: 920px; margin: 0px auto"
    ></div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Bitcoin',
  components: {},

  data: () => ({
    bitcoin: [],
    lafecha: []
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
          'https://mindicador.cl/api/bitcoin'
        )
        this.bitcoin = await datos.serie

        var dataPoints = []
        let chart = new CanvasJS.Chart('chartContainer', {
          theme: 'light2',
          animationEnabled: false,
          title: {
            text: 'Bitcoin'
          },
          data: [
            {
              type: 'spline',
              dataPoints: dataPoints
            }
          ]
        })
        for (var i = 0; i < this.bitcoin.length; i++) {
          dataPoints.push({
            x: new Date(this.bitcoin[i].fecha),
            y: this.bitcoin[i].valor
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
