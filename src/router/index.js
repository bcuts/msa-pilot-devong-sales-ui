import Vue from 'vue'
import Router from 'vue-router'
import PurchaseList from '@/components/PurchaseList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PurchaseList',
      component: PurchaseList
    }
  ]
})
