import {createWebHistory,createRouter} from 'vue-router'
const Home = ()=> import ('./pages/Home.vue')
const My = ()=> import ('./pages/My.vue')
const Order = ()=> import ('./pages/Order.vue')

const routes = [
    {
    path:'/',
    redirect:'/home'
    },
    {
        path:'/home',name:'home',component: Home
    },
    {
        path:'/my',name:'my',component: My
    },{
        path:'/order',name:'order',component:Order
    }]
// eslint-disable-next-line no-debugger
// debugger
const routerHistory = createWebHistory()
const router = createRouter({
	history:routerHistory,
  routes
})

export default router;