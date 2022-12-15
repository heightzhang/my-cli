// import { fileURLToPath, URL } from 'node:url'

// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import vueJsx from '@vitejs/plugin-vue-jsx'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue(), vueJsx()],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   }
// })



import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import { resolve } from 'path'
import babel from 'vite-plugin-babel'
import fse from 'fs-extra'
import { createHtmlPlugin } from 'vite-plugin-html'


const { API } = require('./PROXY_API')

export default ({ mode, command }) => {
  return defineConfig({
    plugins: [
      vue(), 
      babel(), 
      eslint(),
      setMetaVersion(),
      {
        writeBundle() {
          if (command === 'build') copyStaticToDist()
        }
      }
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    server: {
      proxy: {
        '/app': {
          target: API[mode],
          changeOrigin: true
        },
      }
    },
    build: {
      chunkSizeWarningLimit: 1200,
      rollupOptions: {
          output:{
              manualChunks(id) {
                // 依赖分包
                if (id.includes('node_modules')) {
                  const arr = id.toString().split('node_modules/')[1].split('/')
                  switch(arr[0]) {
                    case '@vue':
                    case 'element-plus':
                      return '_' + arr[0]
                    default :
                      return '__vendor'
                  }
                }
            }
          }
      }
    }
  })
  
}

function copyStaticToDist() {
  try {
    if(!resolve(__dirname, './static')) return
    fse.copySync(resolve(__dirname, `./static`), resolve(__dirname, './dist/static'))
  } catch (error) {
    console.error('copyStaticError', error)
  }  
}

function setMetaVersion () {
  return createHtmlPlugin({
    minify: true,
    inject: {
      data: {
        version: require('./package.json').version
      }
    }
  })
}