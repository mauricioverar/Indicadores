<template>
  <div>
    <!-- usar imagen abajo zindex -->
    
    <div v-if="loder">
      <div class="text-center">
        <v-icon
      large
      color="green darken-2"
    >
      mdi-currency-btc 
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
      <Tabla :datos="bitcoins" />
    </div>
    <!-- <div>
      <h3>data</h3>
      <v-row>
        <v-col v-for="(item, clave) in bitcoins" :key="clave">
          <p>{{ item.fecha }}</p>
          <p>{{ item.valor }}</p>
        </v-col>
      </v-row>
    </div> -->
    <!-- <div>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th  v-for="(item, clave) in bitcoins" :key="clave">{{ item.fecha }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td  v-for="(item, clave) in bitcoins" :key="clave">{{ item.valor }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Tabla from '@/components/Tabla'

export default {
  name: 'Bitcoin',
  components: { Tabla },

  data: () => ({
    loder: true
  }),

  computed: {
    ...mapState(['bitcoins'])
  },

  mounted() {
    this.grafico()
  },

  methods: {
    grafico() {
      //let loder = true
      setTimeout(() => {
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
      this.loder = false

        chart.render()
      }, 0)
    }
  }
}
</script>
