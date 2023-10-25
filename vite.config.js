import {
  fileURLToPath, URL 
} from 'url'
  
import {
  defineConfig, loadEnv 
} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import fs from 'fs'
import unocss from 'unocss/vite'

export default defineConfig(({
  command, mode 
}) => {
  process.env = {
    ...process.env, ...loadEnv(mode, process.cwd()) 
  }
  process.env.VITE_IS_LOCAL = command === 'serve' && mode === 'development'

  return {
    build: {
      target: [ 'esnext' ]
    },
    test: {
      include: [ 'vitest/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}' ],
      globals: true
    },
    plugins: [ 
      vue(),
      unocss(),
      AutoImport({
        resolvers: [ ElementPlusResolver() ],
      }),
      Components({
        resolvers: [ ElementPlusResolver() ],
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: process.env.VITE_IS_LOCAL ? {
      port: 443,
      host: '0.0.0.0',
      https: {
        key: fs.readFileSync('./.devcontainer/cert/wildcard.104-dev.com.tw-key.pem'),
        cert: fs.readFileSync('./.devcontainer/cert/wildcard.104-dev.com.tw.pem'),
      }
    } : null
  }
})