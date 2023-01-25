import { createRouter, createWebHashHistory } from 'vue-router'
import StockPrices from '../views/StockPrices.vue'

const routes = [
  {
    path: '/',
    name: 'stock-prices',
    component: StockPrices
  },
  {
    path: '/FxPairs',
    name: 'FxPairs',
    
    component: () => import('../views/FxPairs.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
