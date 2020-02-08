import Vue from 'vue'
import VueRouter from 'vue-router'
import TheHomeView from '@/views/TheHomeView'
import TheCategoryView from '@/views/TheCategoryView'
import TheSingleView from '@/views/TheSingleView'

const Categories = {
    template: `<div>Categories</div>`
}

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            alias: '/home',
            name: 'Home',
            component: TheHomeView
        },
        {
            path: '/categories',
            name: 'Categories',
            component: Categories
        },
        {
            path: '/category/:category',
            name: 'Category',
            component: TheCategoryView
        },
        {
            path: '/single',
            name: 'Single',
            component: TheSingleView
        }
    ]
})