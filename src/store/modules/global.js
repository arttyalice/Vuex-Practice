const state = {
	isLoading: false
}

const getters = {
    isLoading (state) {
        return state.isLoading
    }
}

const mutations = {
    changeLoading (state, { status }) {
        state.isLoading = status
    }
}

const actions = {
    changeLoading ({ commit, state }, status) {
        commit('changeLoading', { status })
    }
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}