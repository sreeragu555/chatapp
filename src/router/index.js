import Vue from 'vue'
import VueRouter from 'vue-router'

import Chat from '@/components/Chat.vue'
import Index from '@/components/Index.vue'
import Test from '@/components/Test.vue'


Vue.use(VueRouter)

const routes = [
  {
    path:'/chat',
    name: 'chat',
    component: Chat,
    props:true
  },
  {
    path:'/index',
    name: 'index',
    component: Index,
  },
  {
    path:'/test',
    name: 'test',
    component: Test,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
