import { defineStore } from 'pinia'
import { ref } from 'vue'
import { checkType } from '@/utils/typeChecker.js'
import * as Sentry from '@sentry/vue'

/**
 * @function logError 執行 log error
 * @param {any} error
 */
export const logError = (error) => {
  try {
    Sentry.captureException(error, scope => {
      scope.setContext('errorCause', error.cause)
    })
  } catch (e) {
    console.error('Error logging to Sentry:', e)
  }
}

/**
 * @function generateError 產生錯誤
 * @param {object} error 接收到的錯誤
 * @param {String | Object} errorEnvironment 捕捉到的錯誤環境
 * @returns {error} 封裝後的錯誤
 */
export const generateError = ({
  error, errorEnvironment
}) => {
  const cause = {
    environment: errorEnvironment,
    code: error?.cause?.status ? error.cause.status : '',
    stack: error.stack,
    originalMessage: error?.message,
    originalError: error?.name,
    originalErrorCause: error?.cause
  }
  return new Error(`[${ cause.originalMessage }] ${ cause.code }`, { cause })
}

/**
 * @function addErrorConfig 新增錯誤
 * @param {object} errors 想要新增的 errorMap
 * @param {string} registerName 註冊的名稱
 * @param {object} errorMap 當前的 errorMap
 * @returns {object} 產生的 errorMap
 */
export const addErrorConfig = ({
  errors, registerName, errorMap 
}) => {
  const extendErrorMap = { ...errorMap }

  Object.entries(errors).map(([ key, value ]) => {
    const errorKey = registerName ? `${ registerName }/${ key }` : key
    if (extendErrorMap[errorKey]) {
      return extendErrorMap
    }

    if (typeof value === 'function') {
      extendErrorMap[errorKey] = value
    } else {
      console.warn(`${ key } 所定義的值不是 function`)
      extendErrorMap[errorKey] = () => value
    }
  })

  return extendErrorMap
}

/**
 * @function addDefaultError 新增預設錯誤處理
 * @param {function} defaultError 預設錯誤處理
 * @param {function} currentDefaultError 當前的預設錯誤處理
 * @returns {function} 產生的預設錯誤處理
 */
export const addDefaultError = ({
  defaultError, currentDefaultError
}) => {
  if (!defaultError && currentDefaultError) {
    return currentDefaultError
  }

  if (typeof defaultError === 'function') {
    return defaultError
  } else {
    console.warn('defaultError 所定義的值不是 function')
    return () => defaultError
  }
}

export const useError = defineStore('Error', () => {
  const errorMap = ref({})

  /**
   * @function defaultError 預設錯誤處理
   * @param {any} error 接收到的錯誤
   * @returns {function} 預設錯誤處理
   */
  const defaultError = (error) => {
    return errorMap.value.defaultError ? errorMap.value.defaultError(error) : () => {}
  }
  /**
   * @function add 新增錯誤
   * @param {object} errors 想要新增的 errorMap
   * @param {string} registerName 註冊的名稱
   * @param {function} defaultError 預設錯誤處理
   * @returns {object} 產生的 errorMap
   */
  const add = ({
    errors = {}, registerName = '', defaultError = null
  }) => {
    if (!checkType('object', errors)) {
      console.error('errors: 應為物件型別')
      return errorMap.value
    }
    if (!checkType('string', registerName)) {
      console.error('registerName: 應為字串型別')
      return errorMap.value
    }

    errorMap.value = addErrorConfig({
      errors, registerName: registerName, errorMap: errorMap.value 
    })
    
    errorMap.value.defaultError = addDefaultError({
      defaultError, currentDefaultError: errorMap.value.defaultError
    })
    return errorMap.value
  }
 
  /**
   * 執行錯誤處理
   * @param {any} error 接收到的錯誤
   * @returns {any} 執行結果
   */
  const execute = (errorConfig) => {
    const error = generateError(errorConfig)
    if (import.meta.env.VITE_IS_LOCAL) {
      console.error(errorConfig.error)
    } else {
      logError(error)
    }
   
    return errorMap.value[`${ error.cause.code }`] ? errorMap.value[`${ error.cause.code }`](error) : defaultError(error)
  }
  
  return {
    errorMap,
    add,
    execute
  }
})