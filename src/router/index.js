import Vue from 'vue'
import VueRouter from 'vue-router'
import TheHomeView from '@/views/TheHomeView'
import TheCategoryView from '@/views/TheCategoryView'
import TheSingleView from '@/views/TheSingleView'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        alias: '/home',
        name: 'Home',
        component: TheHomeView,
        meta: {
            title: 'image vuer home'
        }
    },
    {
        path: '/category/:category',
        name: 'Category',
        component: TheCategoryView,
        meta: {
            title: 'image vuer category'
        }
    },
    {
        path: '/single',
        name: 'Single',
        component: TheSingleView,
        meta: {
            title: 'image vuer single'
        }
    }
]

export default new VueRouter({
    mode: 'history',
    routes: routes
})