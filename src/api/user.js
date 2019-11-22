export default (api) => {
    return {
        async FetchList () {
            const res = await api.get('user/get/list')
            return res.data
        },
        async FetchInfo (uid) {
            if (!uid) {
                uid = 1
            }
            const res = await api.get(`user/get/info/${uid}`)
            return res.data
        }
    }
}