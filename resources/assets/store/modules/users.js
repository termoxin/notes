import axios from 'axios'

const state = {
	user: null,
	notes: []
}

const actions = {
	initUser({ commit }, payload) {
		commit('initUser', payload)
	}
}

const mutations = {
	initUser(state, payload) {
		axios.get(`http://localhost/api/users/${payload.name}`)
		.then(response => {
			state.user = payload.name
			state.notes = response.data
		})
	}
}

export default {
	state,
	actions,
	mutations
}