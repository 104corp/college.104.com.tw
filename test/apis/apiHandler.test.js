import { apiHandler } from '@/apis/apiHandler'
import * as useApi from '@/utils/useApi'
import { ref } from 'vue'

const spyUseApi = vi.spyOn(useApi, 'default').mockReturnValue({
  json: () => {
    return {
      data: ref({ key: 'value' }),
      error: ref(null)
    }
  }
})
describe('apiHandler', () => {
  it('當 API request和response均有效,執行參數及回傳值正確', async () => {
    const config = {
      method: 'GET',
      apiPath: '/api/data',
      responseType: 'object',
      requestType: 'object',
      responseFormatter: (data) => ({ formattedData: data }),
      requestFormatter: (data) => ({ requestData: data }),
      requestData: { key: 'value' }
    }
    const result = await apiHandler(config)

    expect(spyUseApi).toHaveBeenLastCalledWith('/api/data', { 
      body: '{"requestData":{"key":"value"}}',
      method: 'GET'
    })
    expect(result).toEqual({ formattedData: { key: 'value' } })
  })

  it('當 API 沒有request資料,執行參數及回傳值正確', async () => {
    const config = {
      method: 'GET',
      apiPath: '/api/data',
      responseType: 'object',
      responseFormatter: (data) => ({ formattedData: data })
    }

    const result = await apiHandler(config)

    expect(spyUseApi).toHaveBeenLastCalledWith('/api/data', { 
      body: null,
      method: 'GET'
    })
    expect(result).toEqual({ formattedData: { key: 'value' } })
  })

  it('當 API request型別錯誤時，拋出錯誤', async () => {
    const config = {
      method: 'GET',
      apiPath: '/api/data',
      requestType: 'object',
      requestData: 'invalidData'
    }
    
    await expect(apiHandler(config)).rejects.toThrow('API 請求格式不符')
  })

  it('當 API response型別錯誤時，拋出錯誤', async () => {
    const config = {
      method: 'GET',
      apiPath: '/api/data',
      responseType: 'string'
    }
    
    await expect(apiHandler(config)).rejects.toThrow('API 回傳格式不符')
  })
})