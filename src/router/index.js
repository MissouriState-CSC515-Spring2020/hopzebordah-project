import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/components/views/HomeView'
import CategoryView from '@/components/views/CategoryView'
import SingleView from '@/components/views/SingleView'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            alias: '/home',
            name: 'Home',
            component: HomeView
        },
        {
            path: '/category',
            name: 'Category',
            component: CategoryView
        },
        {
            path: '/single',
            name: 'Single',
            component: SingleView
        }
    ]
})