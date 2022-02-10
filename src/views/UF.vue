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
  name: 'UF',
  components: {},

  data: () => ({
    uf: [],
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
          'https://mindicador.cl/api/uf'
        )
        this.uf = await datos.serie

        var dataPoints = []
        let chart = new CanvasJS.Chart('chartContainer', {
          theme: 'light2',
          animationEnabled: false,
          title: {
            text: 'UF'
          },
          data: [
            {
              type: 'spline',
              dataPoints: dataPoints
            }
          ]
        })
        for (var i = 0; i < this.uf.length; i++) {
          dataPoints.push({
            x: new Date(this.uf[i].fecha),
            y: this.uf[i].valor
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
