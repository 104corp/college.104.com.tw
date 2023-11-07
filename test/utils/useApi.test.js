import {
  addApiLoading, removeApiLoading, addOnHeaders, checkDelay, checkNeedLoading, defaultOptions
} from '@/utils/useApi.js'
describe('addApiLoading', () => {
  it('如果 needLoading 為 true, 則回傳 url+hash', () => {
    const url = 'https://example.com/api'
    const hash = '123456'
    const needLoading = true
    const result = addApiLoading({
      url, hash, needLoading 
    })
    expect(result).toBe(`${ url }${ hash }`)
  })
    
  it('如果需要加載為 false, return false', () => {
    const result = addApiLoading({
      needLoading: false, url: 'https://example.com', hash: '123' 
    })
    expect(result).toBe(false)
  })
    
  it('url & hash 為 undefined return false', () => {
    const result = addApiLoading({ needLoading: true })
    expect(result).toBe(false)
  })
})
    
describe('removeApiLoading', () => {
  it('如果 needLoading 為 false, 則測試返回 false', () => {
    const result = removeApiLoading({ needLoading: false })
    expect(result).toBe(false)
  })
    
  it('如果 needLoading 為 true, 則 return url+hash', () => {
    const result = removeApiLoading({
      needLoading: true,
      url: 'https://example.com',
      hash: '12345',
      interval: 500
    })
    expect(result).toBe('https://example.com12345')
  })
    
  it('如果未提供 url 和 hash, removeApiLoading return false', () => {
    const result = removeApiLoading({ needLoading: true })
    expect(result).toBe(false)
  })
})
    
describe('addOnHeaders', () => {
  it('Content-Type 是否設置為 application/json', () => {
    const headers = addOnHeaders({
      header: {}, token: 'test_token' 
    })
    expect(headers['Content-Type']).toBe('application/json')
  })
    
  it('測試 return 帶有 token 的 header', () => {
    const headers = addOnHeaders({
      header: {}, token: 'myToken' 
    })
    expect(headers).toEqual({
      'Content-Type': 'application/json', 'Authorization': 'Bearer myToken' 
    })
  })
    
  it('返回正確的 header', () => {
    const input = {
      header: {
        'Content-Type': 'text/plain'
      },
      token: 'myToken'
    }
    const expectedOutput = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer myToken'
    }
    const actualOutput = addOnHeaders(input)
    expect(actualOutput).toEqual(expectedOutput)
  })
    
  it('沒有輸入 header ', () => {
    const input = {}
    const expectedOutput = { 'Content-Type': 'application/json' }
    const actualOutput = addOnHeaders(input)
    expect(actualOutput).toEqual(expectedOutput)
  })
    
  it('無 token 的 header', () => {
    const headers = addOnHeaders({ header: {} })
    expect(headers).not.toHaveProperty('Authorization')
  })
    
  it('header 輸入為空, 會給預設值', () => {
    const headers = addOnHeaders({})
    expect(headers).toHaveProperty('Content-Type', 'application/json')
    expect(headers).toEqual({ 'Content-Type': 'application/json' })
  })
})
  
describe('checkNeedLoading', () => {
  it('如果 needLoading 為 boolean, 則 return needLoading', () => {
    const result = checkNeedLoading(true)
    expect(result).toBe(true)
  })
      
  it('如果 needLoading 不是 boolean, 則 return defaultOptions.needLoading', () => {
    const result = checkNeedLoading('true')
    expect(result).toBe(defaultOptions.needLoading)
  })
  
  it('如果 needLoading 為 undefined, 則 return defaultOptions.needLoading', () => {
    const result = checkNeedLoading(undefined)
    expect(result).toBe(defaultOptions.needLoading)
  })
})
  
describe('checkDelay', () => {
  it('如果 delay 為 number, 則 return delay', () => {
    const result = checkDelay(1000)
    expect(result).toBe(1000)
  })
          
  it('如果 delay 不是 number, 則 return default.delay', () => {
    const result = checkDelay('600')
    expect(result).toBe(defaultOptions.delay)
  })
      
  it('如果 delay 為 undefined, 則 return default.delay', () => {
    const result = checkDelay(undefined)
    expect(result).toBe(defaultOptions.delay)
  })
})