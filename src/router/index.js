import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        alias: '/home',
        name: 'Home',
        component: () => import('@/views/TheHomeView')
    },
    {
        path: '/category/:category',
        name: 'Category',
        props: true,
        component: () => import('@/views/TheCategoryView')
    },
    {
        path: '/video/:id',
        name: 'Single',
        component: () => import('@/views/TheSingleView')
    },
    {
        path: '*',
        name: '404 Not Found',
        component: () => import('@/views/The404View')
    }
]

export default new VueRouter({
    mode: 'history',
    routes: routes
})