<template>
  <div>
    <div
      id="chartContainer"
      style="height: 370px; max-width: 920px; margin: 0px auto"
    ></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Bitcoin',
  components: {},

  data: () => ({
    bitcoin: []
  }),

  computed: {
      ...mapState(['bitcoins']),
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
            text: 'Bitcoin'
          },
          data: [
            {
              type: 'spline',
              dataPoints: dataPoints
            }
          ]
        })
        for (var i = 0; i < this.bitcoins.length; i++) {
          dataPoints.push({
            x: new Date(this.bitcoins[i].fecha),
            y: this.bitcoins[i].valor
          })
        }
        chart.render()
    }
  }
}
</script>
