import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router'
import routers from './routes/index'
import { routerAfterEachFunc, routerBeforeEachFunc } from './interceptor'
import { ROUTER_DEFAULT_CONFIG } from './defaultConfig'
const routes = [...routers]

const { base, mode, linkActiveClass, linkExactActiveClass } =
  ROUTER_DEFAULT_CONFIG
const router = createRouter({
  history:
    mode === 'hash' ? createWebHashHistory(base) : createWebHistory(base),
  linkActiveClass,
  linkExactActiveClass,
  routes
})

router.beforeEach((to, from, next) => {
  // ...
  // 返回 false 以取消导航
  routerBeforeEachFunc(to, from, next)
  return false
})

router.afterEach((to) => {
  routerAfterEachFunc(to)
})
export default router
