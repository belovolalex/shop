import axios from 'axios'
import { API_URL, handlerError } from '../../utils'

export default {
  namespaced: true,
  state: {
    responseLogin: ''
  },
  mutations: {
    HANDLE_LOGIN(state, payload) {
      state.responseLogin = payload
    }
  },
  actions: {
    login({commit}) {
      axios.get(`${API_URL}/auth/login`)
        .then(payload => commit('HANDLE_LOGIN', payload.data))
        .catch(error => handlerError(error))
    }
  }
}