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
  openModal: false,
  loginStatus: false,
  isAdmin: false,
  items: [],
  cartslist: [],
  fixedbuy: [],
  hasPaid: []
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
    } else {
      state.cartslist[idx].amount += 1
    }
  },
  minusOneItem (state, payload) {
    console.log('produk yang gak jadi dibeli ', payload)
    console.log(state.cartslist)
    let idx = state.cartslist.findIndex((itemcart) => { return itemcart._id === payload._id })
    console.log('indeksnya ', idx)
    if (idx === -1 || state.cartslist[idx].amount === 0) {
      console.log('lalalallalalla')
      alert(`You haven't bought anything!`)
      if (state.cartslist[idx].amount === 0) {
        state.cartslist.splice(idx, 1)
      }
    } else {
      console.log('ajajajajajajaj')
      state.cartslist[idx].amount --
      console.log('jumlah belanjaan ', state.cartslist[idx].amount)
    }
  },
  addNewItem (state, payload) {
    console.log('ini data payloadnya ', payload)
    state.items.push(payload)
  },
  setBuyingItem (state, payload) {
    console.log('belanjaannya ', payload)
    state.fixedbuy = payload[0]
    console.log('udah pasti beli nih', state.fixedbuy)
  },
  pushPaidProduct (state, payload) {
    state.hasPaid.push(payload)
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
  },
  checkout () {
    var config = {
      headers: {
        token: localStorage.getItem('token')
      }
    }
    console.log('==========INI ITEM YANG DIBELI==========')
    console.log(state.cartslist)
    console.log('====================================')
    console.log('================INI CONFIG==========')
    console.log(config)
    console.log('====================================')
    http.post('/carts', state.cartslist, config)
    .then(({data}) => {
      console.log('=============UDAH MASUK BELANJAANNYA===============')
      console.log(data)
      console.log('====================================')
    })
    .catch(err => {
      console.log('===================ERROR============')
      console.error(err)
      console.log('====================================')
    })
  },
  getAllCarts ({commit}) {
    var config = {
      headers: {
        token: localStorage.getItem('token')
      }
    }
    http.get('/carts', config)
    .then(({data}) => {
      console.log('INI DATA YANG DITERIMA')
      console.log(data)
      commit('setBuyingItem', data)
    })
    .catch(err => {
      console.log('INI ERROR')
      console.error(err)
    })
  },
  paidTheBill ({commit}, payload) {
    var config = {
      headers: {
        token: localStorage.getItem('token')
      }
    }
    http.put(`/carts/${payload._id}`, {}, config)
    .then(({data}) => {
      console.log('=========DATA YANG UDAH DIBELI==========')
      console.log(data)
      console.log('====================================')
      commit('pushPaidProduct', data.updated)
    })
    .catch(err => {
      console.log('=========ERROR LOOOOOG+++===========')
      console.log(err)
      console.log('====================================')
    })
  }
}

const store = new Vuex.Store({
  state, mutations, actions
})

export default store
