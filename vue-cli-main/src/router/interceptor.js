export function routerBeforeEachFunc(to, from, next) {
  // 这里可以做页面拦截，比如做权限处理
  // ...
  //const token = Cookies.get(userToken)
  //const userName = Cookies.get('userName')

  //if ((!token || !userName) && !whiteList.includes(to.path)) {
  //  return next('/login')
  //}
  //if (to.path === '/') return next('/')
  next()
}

export function routerAfterEachFunc(to) {
  const { title } = to.meta
  document.title = title || ''
}
