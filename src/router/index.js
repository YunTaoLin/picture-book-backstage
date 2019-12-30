import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Commodity from '../views/Commodity.vue'
import Order from '../views/Order.vue'
import Member from '../views/Member.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/commodity'
    },
    {
        path: '/commodity',
        name: 'commodity',
        component: Commodity
    },
    {
        path: '/order',
        name: 'order',
        component: Order
    },
    {
        path: '/member',
        name: 'member',
        component: Member
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router