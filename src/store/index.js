import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        commodity: [],
        order: [],
        user: []
    },
    mutations: {
        getMember(state, array) {
            array.forEach(item => {
                state.user.unshift(item)
            })
        },
        updateMember(state, data) {
            state.user.forEach(item => {
                if (item._id == data.member_id) {
                    item.status = data.status
                }
            })
        },
        getCommodity(state, array) {
            array.forEach(item => {
                state.commodity.unshift(item)
            })
        },
        addCommodity(state, data) {
            state.commodity.unshift(data)
        },
        updateCommodity(state, data) {
            state.commodity.forEach((item, index) => {
                if (item._id == data._id) {
                    Vue.set(state.commodity, index, data)
                    console.log('修改成功')
                }
            })
        },
        getOrder(state, data) {
            state.order = data
        }
    },
    actions: {
        a_getMember(context) {
            axios.get('/backstage/getMember')
                .then(res => {
                    context.commit('getMember', res.data.member)
                })
        },
        a_updateMember(context, data) {
            axios.post('/backstage/updateMember', data)
                .then(() => {
                    console.log('已完成更新')
                    context.commit('updateMember', data)
                })
        },
        a_getCommodity(context) {
            axios.get('/backstage/getCommodity')
                .then(res => {
                    context.commit('getCommodity', res.data.commodity)
                })
        },
        a_addCommodity(context, data) {
            axios.post('/backstage/addCommodity', data)
                .then((res) => {
                    context.commit('addCommodity', res.data.commodity)
                })
        },
        a_updateCommodity(context, data) {
            axios.post('/backstage/updateCommodity', data)
                .then((res) => {
                    context.commit('updateCommodity', res.data.data)
                })
        },
        a_getOrder(context, data) {
            axios.get('/backstage/getOrder', data)
                .then((res) => {
                    context.commit('getOrder', res.data.order)
                })
        },
    },
    modules: {}
})