<template>
  <div>

    <div
      id="chartContainer"
      style="height: 370px; max-width: 920px; margin: 0px auto"
    ></div>
  </div>
</template>

<script>
// import axios from 'axios'
import { mapState } from 'vuex'


export default {
  name: 'UF',
  components: {},

  data: () => ({
  }),

  created() {
    
    //this.get_Datos()
    // console.log('created')
  },

  computed: {
      ...mapState(['ufs']),
    },

  mounted() {
    this.grafico()
    // this.get_Datos()
    // console.log('mounted')
  },

  methods: {
    grafico() {
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
        for (var i = 0; i < this.ufs.length; i++) {
          dataPoints.push({
            x: new Date(this.ufs[i].fecha),
            y: this.ufs[i].valor
          })
        }
        chart.render()
    }
    // async get_Datos() {
    //   try {
    //     const { data: datos } = await axios.get(
    //       'https://mindicador.cl/api/uf'
    //     )
    //     this.uf = await datos.serie

    //     var dataPoints = []
    //     let chart = new CanvasJS.Chart('chartContainer', {
    //       theme: 'light2',
    //       animationEnabled: false,
    //       title: {
    //         text: 'UF'
    //       },
    //       data: [
    //         {
    //           type: 'spline',
    //           dataPoints: dataPoints
    //         }
    //       ]
    //     })
    //     for (var i = 0; i < this.uf.length; i++) {
    //       dataPoints.push({
    //         x: new Date(this.uf[i].fecha),
    //         y: this.uf[i].valor
    //       })
    //     }
    //     chart.render()
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
  }
}
</script>
