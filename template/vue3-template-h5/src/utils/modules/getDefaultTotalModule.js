export function getDefaultTotalModule  (modulesContext, type = 'OBJECT') {
  let result =  type === 'OBJECT' ? {} : []
  const totalModules = Object.keys(modulesContext).reduce((modules, path) => {
    modules[path.replace(/(^.*\/)|(\.js$)/g, '')] = modulesContext[path].default
    return modules
  }, {})
  for (const key in totalModules) {
    result = type === 'OBJECT' ? {...result, ...totalModules[key]} : [...result, ...totalModules[key]]
  }

  return result
}
