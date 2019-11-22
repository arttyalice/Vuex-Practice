import api from '../../api'


const state = {
	users: [],
	userInfo: {}
}

const getters = {
    getUsers (state) {
        return state.users
	},
	getUserInfo (state) {
        return state.userInfo
    }
}

const mutations = {
    changeUsers (state, { list }) {
        state.users = list
	},
	changeUserInfo (state, { info }) {
        state.userInfo = info
    }
}

const actions = {
    async fetchUsers ({ commit }) {
		const { items } = await api.user.FetchList()
        commit('changeUsers', { list: items })
	},
	async fetchUserInfo ({ commit }, uid) {
		const { item } = await api.user.FetchInfo(uid)
        commit('changeUserInfo', { info: item })
    }
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}