import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        commodity: [{
            _id: '123',
            img: 'https://tdaily.news/mom/wp-content/uploads/sites/2/1457/135911b5bf4df27-600x381.jpeg',
            title: '兒童繪本',
            ori_price: '350',
            sale_price: '300',
            info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi similique sapiente animi culpa! Molestias facere blanditiis fugit ut rerum, consequuntur, facilis odio quam dicta atque libero quibusdam reiciendis assumenda nam.',
            like: [0, 1, 2, 3],
            sale: 45,
            last_time: '最後更新時間'
        }, {
            _id: '456',
            img: 'https://img.ruten.com.tw/s2/8/cf/a0/21847035473824_517.png',
            title: '青少年繪本',
            ori_price: '350',
            sale_price: '290',
            info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi similique sapiente animi culpa! Molestias facere blanditiis fugit ut rerum, consequuntur, facilis odio quam dicta atque libero quibusdam reiciendis assumenda nam.',
            like: [0, 1, 2, 3],
            sale: 45,
            last_time: '最後更新時間'
        }],
        order: [{
            _id: 'emoje41er51h5rtf',
            user: '404200173',
            tel: '0929850330',
            address: '台南市渡頭里三塊厝82號',
            create_time: '2019/12/22',
            content: [
                { id: '123', number: 3 },
                { id: '456', number: 8 },
                { id: '456', number: 12 },
                { id: '456', number: 4 }
            ],
            freight: 60, //運費
            status: 0 //處理中
        }],
        user: [{
            _id: '404200173',
            firstname: '耘滔',
            lastname: '林',
            order: ['emoje41er51h5rtf'],
        }]
    },
    mutations: {},
    actions: {},
    modules: {}
})