import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ufs: [],
    bitcoins: [],
    dolars: []

  },
  mutations: {
    GET_UFS(state, uf) {
      state.ufs = uf
    },

    GET_DOLAR(state, dolar) {
      state.dolars = dolar
    },

    GET_BITCOIN(state, bitcoin) {
      state.bitcoins = bitcoin
    }
  },
  actions: {
    async get_Datos({ commit }) {
      try {
        const {data: datos} = await axios.get('https://mindicador.cl/api/uf')
        this.uf = await datos.serie
        console.log('datos uf.serie: ', this.uf)
        commit('GET_UFS', this.uf)
      } catch (error) {
        // console.log(error)
      }
    },

    async get_DatDolar({ commit }) {
      try {
        const {data: datos} = await axios.get('https://mindicador.cl/api/dolar')
        this.dolar = await datos.serie
        console.log('datos dolar.serie: ', this.dolar)
        commit('GET_DOLAR', this.dolar)
      } catch (error) {
        // console.log(error)
      }
    },
    async get_DatBitcoin({ commit }) {
      try {
        const {data: datos} = await axios.get('https://mindicador.cl/api/bitcoin')
        this.bitcoin = await datos.serie
        console.log('datos bitcoin.serie: ', this.bitcoin)
        commit('GET_BITCOIN', this.bitcoin)
      } catch (error) {
        // console.log(error)
      }
    }
  },
  modules: {
  },

})
