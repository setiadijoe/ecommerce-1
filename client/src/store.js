import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

Vue.use(Vuex)

const state = {
  userId: '',
  name: '',
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
    state.loginStatus = payload.login
    state.isAdmin = payload.admin
    console.log('status sekarang ', state.isAdmin, ' dan ', state.loginStatus)
  },
  buyItems (state, payload) {
    console.log('ini produknya yang dibeli ', payload)
    let idx = state.cartslist.findIndex((itemcart) => { return itemcart._id === payload._id })
    if (idx === -1) {
      let obj = {
        _id: payload._id,
        name: payload.item,
        price: payload.price,
        amount: 1
      }
      state.cartslist.push(obj)
      console.log('ini isi cartnya ya ', state.cartslist)
    } else {
      state.cartslist[idx].amount += 1
      console.log('ini kalo itemnya sama ', state.cartslist)
    }
  },
  addNewItem (state, payload) {
    console.log('ini data payloadnya ', payload)
    state.items.push(payload)
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
  },
  addItems ({commit}, newItem) {
    var config = {
      headers: {
        token: localStorage.getItem('token')
      }
    }
    console.log('==========ITEM YANG BARU============')
    console.log(newItem)
    console.log('====================================')
    console.log('=============ISI HEADERS============')
    console.log(config)
    console.log('====================================')
    http.post('/items', newItem, config)
    .then(({data}) => {
      console.log('==========ISI KEMBALIANNYA==========')
      console.log(data)
      console.log('====================================')
      commit('addNewItem', data.newItem)
    })
    .catch(err => {
      console.log('=======INI ERROR LHO================')
      console.log(err)
      console.log('====================================')
    })
  }
}

const store = new Vuex.Store({
  state, mutations, actions
})

export default store
