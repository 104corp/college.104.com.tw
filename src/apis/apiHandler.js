import useApi from '@/utils/useApi'
import { checkDataType } from '@/utils/typeChecker.js'

const validateData = (type, data, errorMessage) => {
  if (!checkDataType(type, data, true)) {
    throw new Error(errorMessage)
  }
}

/**
 * 處理呼叫 API 的基礎函數，負責發出請求與驗證。
 * @param {Object} config - API config。
 * @param {string} config.method - HTTP method（例如 'GET'、'POST'）。
 * @param {string} config.apiPath - API 路徑。
 * @param {any} [config.responseType] - 預期的response資料型別。
 * @param {any} [config.requestType] - 預期的request資料型別。
 * @param {Function} [config.responseFormatter] - response資料的格式化函數。
 * @param {Function} [config.requestFormatter] - request資料的格式化函數。
 * @param {*} [config.requestData] - 要發給server的body資料。
 * @returns {Promise<*>} 格式整理過的response。
 * @throws {Error} 如果格式錯誤會拋出錯誤。
 */

export const apiHandler = async ({
  method = 'GET',
  apiPath,
  responseType,
  requestType,
  responseFormatter = (data) => data,
  requestFormatter = (data) => data,
  requestData = null
}) => {
  if (requestData && requestType) {
    validateData(requestType, requestData, 'API 請求格式不符')
  }

  const body = requestData ? JSON.stringify(requestFormatter(requestData)) : null

  const {
    data, error 
  } = await useApi(apiPath, {
    method, body 
  }).json()

  if (error.value) throw error.value

  if (responseType && data.value) validateData(responseType, data.value, 'API 回傳格式不符')

  return responseFormatter(data.value)
}