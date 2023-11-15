import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import { errorHandler } from '@/utils/errorHandler'
import BaseImage from '@/components/BaseImage.vue'
import * as Sentry from '@sentry/vue'
import packageConfig from '../package.json'
import {
  useError
} from '@/stores/Error.js'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const head = createHead()

app.use(createPinia())
app.use(router)
app.use(head)

app.component('BaseImage', BaseImage)

const sentryDsn_production = 'https://59e4d737b6ecb7d4c70affa7ea728068@sentry.events.104.com.tw/11'
const sentryDsn_lab = 'https://59e4d737b6ecb7d4c70affa7ea728068@sentry.events.104-dev.com.tw/7'

Sentry.init({
  app,
  dsn: import.meta.env.VITE_NODE_ENV === 'production' ? sentryDsn_production : sentryDsn_lab,
  integrations: [
    new Sentry.BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router)
    })
  ],
  environment: import.meta.env.VITE_NODE_ENV,
  tracesSampleRate: 1.0,
  release: packageConfig.version
})
  
app.config.errorHandler = (error, instance, info) => {
  errorHandler({
    error, errorEnvironment: `vueError: ${ instance.$options.__file }, at hook: ${ info }`
  })
}

const storeError = useError()
storeError.add({
  errors: {
    '503': () => {
      router.push({ name: 'maintenance' })
    }
  },
  defaultError: () => {}
})
  
app.mount('#app')