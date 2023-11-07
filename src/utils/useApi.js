import {
  computed, ref 
} from 'vue'
import { createFetch } from '@vueuse/core'
import { beCollegeUrl } from '@/common/domainConfig'
/**
   * 用來管理自定義的 loading 狀態.
   * @returns {object} 回傳包含 isLoading, add, remove, and clear functions.
   */
const useLoading = () => {
  const loadingCues = ref(new Set())
  
  /**
     * ref 回傳 Loading 狀態.
     * @type {boolean}
     */
  const isLoading = computed(() => loadingCues.value.size > 0)
  
  /**
     * @function add - 加入 uuid 到 loadingCues.
     * @param {string} uuid - 唯一識別碼.
     */
  const add = (uuid) => {
    if (uuid && !loadingCues.value.has(uuid)) loadingCues.value.add(uuid)
  }
  
  /**
     * @function remove - 從 loadingCues 移除 uuid.
     * @param {string} uuid - 唯一識別碼.
     */
  const remove = (uuid) => {
    if (uuid && loadingCues.value.has(uuid)) loadingCues.value.delete(uuid)
  }
  
  /**
     * @function clear - 清除 loadingCues.
     */
  const clear = () => {
    loadingCues.value.clear()
  }
  
  return {
    isLoading,
    add,
    remove,
    clear,
  }
}
  
const apiLoading = useLoading()
  
/**
   * @type {boolean} - 是否正在發送 API 請求.
   */
const apiFetching = apiLoading.isLoading
  
/**
   * @function addApiLoading - 加入 API loading.
   * @param {object} options - 選項.
   * @param {boolean} options.needLoading - 是否需要 loading.
   * @param {string} options.url - API url.
   * @param {string} options.hash - API hash.
   * @returns {string | boolean} 回傳 url + hash.
   */
const addApiLoading = ({
  needLoading, url, hash 
}) => {
  if (!url && !hash) return false
  if (needLoading) {
    apiLoading.add(`${ url }${ hash }`)
    return `${ url }${ hash }`
  }
  return false
}
  
/**
   * @function removeApiLoading - 移除 API loading.
   * @param {object} options - 選項.
   * @param {boolean} options.needLoading - 是否需要 loading.
   * @param {string} options.url - API url.
   * @param {string} options.hash - API hash.
   * @param {number} options.interval - 延遲時間.
   * @returns {string | boolean} 回傳 url + hash.
   */
const removeApiLoading = ({
  needLoading, url, hash, interval 
}) => {
  if (!url && !hash) return false
  if (needLoading) {
    setTimeout(() => {
      apiLoading.remove(`${ url }${ hash }`)
    }, interval)
    return `${ url }${ hash }`
  }
  return false
}
  
/**
 * @function addOnHeaders - 加入 headers.
 * @param {object} options - 選項.
 * @param {object} options.header - headers.
 * @param {string} options.token - token.
 * @returns {object} 回傳 headers.
 */
const addOnHeaders = ({
  header, token 
}) => {
  const headers = {
    ...header,
    'Content-Type': 'application/json'
  }
  if (token) {
    headers['Authorization'] = `Bearer ${ token }`
  }

  return headers
}
  
const defaultOptions = {
  needLoading: true,
  delay: 500,
}
/**
   * @function checkNeedLoading - 檢查是否需要 loading.
   * @param {boolean} needLoading - 是否需要 loading.
   * @returns {boolean} 回傳是否需要 loading.
   * @default defaultOptions.needLoading
   */
const checkNeedLoading = (needLoading) => {
  return typeof needLoading === 'boolean'
    ? needLoading
    : defaultOptions.needLoading
}
  
/**
   * @function checkDelay - 檢查延遲時間.
   * @param {number} delay - 延遲時間.
   * @returns {number} 回傳延遲時間.
   * @default defaultOptions.delay
   */
const checkDelay = (delay) => {
  return typeof delay === 'number' && delay >= 0 ? delay : defaultOptions.delay
}
  
/**
   * @function createOptions - 建立 fetch options.
   * @param {object} options - 選項.
   * @param {boolean} options.needLoading - 是否需要 loading.
   * @param {number} options.delay - 延遲時間.
   * @returns {object} 回傳 fetch options.
   */
const createOptions = (
  {
    needLoading, delay 
  } = {
    needLoading: defaultOptions.needLoading,
    delay: defaultOptions.delay,
  }
) => {
  const loadingOptions = {
    needLoading: checkNeedLoading(needLoading),
    interval: checkDelay(delay),
    hash: new Date().getTime(),
  }
  const options = {
    async beforeFetch ({
      url, options 
    }) {
      addApiLoading({
        ...loadingOptions,
        url,
      })
  
      options.headers = addOnHeaders({
        header: options.headers
      })
      return {
        url,
        options,
      }
    },
    async afterFetch (ctx) {
      removeApiLoading({
        ...loadingOptions,
        url: ctx.response.url,
      })
      return ctx
    },
    onFetchError (ctx) {
      apiLoading.clear()
  
      ctx.error = new Error(`${ ctx.data?.message || 'api error' }`, {
        cause: ctx.data
      })
  
      return ctx
    },
  }
  
  return options
}
  
const useApi = createFetch({
  baseUrl: beCollegeUrl,
  combination: 'overwrite',
  options: createOptions({
    needLoading: false
  }),
  fetchOptions: {
    credentials: 'include',
  }
})
  
export {
  useApi as default,
  useLoading,
  apiFetching,
  addApiLoading,
  removeApiLoading,
  addOnHeaders,
  defaultOptions,
  checkNeedLoading,
  checkDelay,
  createOptions,
}