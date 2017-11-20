import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

Vue.use(Vuex)

const state = {
  userId: '',
  loginStatus: false,
  isAdmin: false,
  items: [],
  cartslist: []
}

const mutations = {
  setAllItems (state, payload) {
    console.log('Masuk ke mutations ', payload)
    state.items = payload
  },
  changeLoginStatus (state, payload) {
    console.log('Ubah status login ', payload)
    state.loginStatus = payload
  }
}

const actions = {
  getAllItems ({commit}) {
    http.get('/items')
    .then(response => {
      console.log('=========INI AMBIL DATA=============')
      console.log(response.data)
      console.log('====================================')
      commit('setAllItems', response.data)
    })
    .catch(err => {
      console.log('=========INI TERJADI ERROR==========')
      console.log(err)
      console.log('====================================')
    })
  }
}

const store = new Vuex.Store({
  state, mutations, actions
})

export default store
