import axios from 'axios'

const state = {
	notes: null
}

const getters = {
	notes() {
		axios.get('http://localhost/api/notes')
	  	.then(response => {
	  		return response.data
	  	})
	}
}

const actions = {
	initNotes({ commit }, payload) {
		commit('initNotes', payload)
	},
	addNote({ commit }, payload) {
		commit('addNote', payload)
	}
}

const mutations = {
	initNotes(state, payload) {
		axios.get(`http://localhost/api/users/${payload.name}`)
	  	.then(response => {
	  		state.notes = response.data
	  	})
	},
	addNote(state, payload) {
		axios.post(`http://localhost/api/notes/create/${payload.name}`, {
			title: payload.title,
			text: payload.text
		})
	  	.then(response => {
	  		return response;
	  	})
	  	.catch(function (error) {
    		console.log(error);
  		});
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}