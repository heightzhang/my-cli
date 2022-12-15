const router = [
  {
    path: '/',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (HomeView.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/canvas',
    name: 'camvas',
    // route level code-splitting
    // this generates a separate chunk (Canvas.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/canvas.vue')
  }
]

export default router
