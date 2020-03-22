import Vue from 'vue'
import VueRouter from 'vue-router'
import TheHomeView from '@/views/TheHomeView'
import TheCategoryView from '@/views/TheCategoryView'
import TheSingleView from '@/views/TheSingleView'
import The404View from '@/views/The404View'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        alias: '/home',
        name: 'Home',
        component: TheHomeView
    },
    {
        path: '/category/:category',
        name: 'Category',
        props: true,
        component: TheCategoryView
    },
    {
        path: '/single',
        name: 'Single',
        component: TheSingleView
    },
    {
        path: '*',
        name: '404 Not Found',
        component: The404View
    }
]

export default new VueRouter({
    mode: 'history',
    routes: routes
})