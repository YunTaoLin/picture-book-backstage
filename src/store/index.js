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
                }
            })
        },
        getOrder(state, data) {
            state.order = data
        },
        updateOrder(state, data) {
          state.order.forEach((item) => {
              if (item._id == data.order_id) {
                item.status = data.status
              }
          })
        },
        deleteMember(state, deleteID){
          console.log('有啟動')
          var newList = []
          state.user.forEach(item=>{
            if(item._id != deleteID){
              newList.push(item)
            }
          })
          console.log(newList)
          state.user = newList
        },
        deleteOrder(state, deleteID){
          console.log('有啟動')
          var newList = []
          state.order.forEach(item=>{
            if(item._id != deleteID){
              newList.push(item)
            }
          })
          console.log(newList)
          state.order = newList
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
                  console.log(res)
                    context.commit('getOrder', res.data.order)
                })
        },
        a_updateOrder(context, data) {
          console.log(data)
          axios.post('/backstage/updateOrder', data)
              .then((res) => {
                  console.log(res)
                  context.commit('updateOrder', data)
              })
        },
        a_deleteMember(context,data){
          axios.post('/backstage/deleteMember',data)
                .then((res) => {
                  if(res.data.error_code == 0){
                    alert('刪除完成！')
                    context.commit('deleteMember', data.deleteID)
                  }else{
                    alert('刪除失敗，請稍後再試！')
                  }
                })
        },
        a_deleteOrder(context,data){
          axios.post('/backstage/deleteOrder',data)
                .then((res) => {
                  console.log(res)
                  if(res.data.error_code == 0){
                    alert('刪除完成！')
                    context.commit('deleteOrder', data.deleteID)
                  }else{
                    alert('刪除失敗，請稍後再試！')
                  }
                })
        }

    },
    modules: {}
})