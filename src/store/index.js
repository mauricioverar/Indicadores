// import { get } from 'core-js/core/dict'
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  // mounted() {https://mindicador.cl/api
  //   this.get_Datos()
  // },
  state: {
    ufs: [],
    datos: [],
    dolars: []

  },
  mutations: {
    GET_UFS(state, uf) {
      state.ufs = uf
    },

    GET_DOLAR(state, dolar) {
      state.dolars = dolar
    }
  },
  actions: {
    async get_Datos({ commit }) {
      try {
        const {data: datos} = await axios.get('https://mindicador.cl/api/uf')
        this.uf = await datos.serie
        // console.log('datos uf.serie: ', this.uf)
        commit('GET_UFS', this.uf)
      } catch (error) {
        // console.log(error)
      }
    },

    async get_DatDolar({ commit }) {
      try {
        const {data: datos} = await axios.get('https://mindicador.cl/api/dolar')
        this.dolar = await datos.serie
        // console.log('datos dolar.serie: ', this.dolar)
        commit('GET_DOLAR', this.dolar)
      } catch (error) {
        // console.log(error)
      }
    }
  },
  modules: {
  }
})
