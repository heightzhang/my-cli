import { getDefaultTotalModule } from "@/utils"

export default (() => {
  const result = getDefaultTotalModule(import.meta.globEager('./modules/*.js'), 'ARRAY')
  return result
})()

