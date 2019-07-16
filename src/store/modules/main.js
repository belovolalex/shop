import axios from 'axios'
import { API_URL, handlerError } from '../../utils'

export default {
  namespaced: true,
  state: {
    navigation: []
  },
  mutations: {
    SET_NAVIGATION(state, payload) {
      console.log('payload', payload)
      state.navigation = payload
    }
  },
  actions: {
    fetchNavigation({commit}) {
      axios.get(`${API_URL}/navigation`)
        .then(payload => commit('SET_NAVIGATION', payload.data))
        .catch(error => handlerError(error))
    }
  }
}