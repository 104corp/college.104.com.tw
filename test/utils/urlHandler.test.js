import { addQuery } from '@/utils/urlHandler'

describe('urlHandler - addQuery', () => {
  it('應在有效的URL中添加 query', () => {
    const url = 'https://example.com'
    const queries = {
      key1: 'value1', key2: 'value2' 
    }
    const result = addQuery(url, queries)
    expect(result).toBe('https://example.com/?key1=value1&key2=value2')
  })

  it('應在 query 為空時返回相同的URL', () => {
    const url = 'https://example.com'
    const queries = {}
    const result = addQuery(url, queries)
    expect(result).toBe('https://example.com/')
  })

  it('應在URL無效時返回相同的URL', () => {
    const url = 'invalid-url'
    const queries = {
      key1: 'value1', key2: 'value2' 
    }
    const result = addQuery(url, queries)
    expect(result).toBe('invalid-url')
  })

  it('應處理僅包含查詢字符串但沒有值的URL', () => {
    const url = 'https://example.com?key1='
    const queries = { key2: 'value2' }
    const result = addQuery(url, queries)
    expect(result).toBe('https://example.com/?key1=&key2=value2')
  })

  it('應處理僅包含查詢字符串但沒有鍵的URL', () => {
    const url = 'https://example.com?=value1'
    const queries = { key2: 'value2' }
    const result = addQuery(url, queries)
    expect(result).toBe('https://example.com/?=value1&key2=value2')
  })

  it('應在URL已存在相同 query 時，不重複加入 query', () => {
    const url = 'https://example.com?key1=value1'
    const queries = {
      key1: 'value1', key2: 'value2' 
    }
    const result = addQuery(url, queries)
    expect(result).toBe('https://example.com/?key1=value1&key2=value2')
  })

  it('應在URL已存在相同 key 時，取代該 key 的 value 值', () => {
    const url = 'https://example.com?key1=value1'
    const queries = {
      key1: 'newValue1', key2: 'value2' 
    }
    const result = addQuery(url, queries)
    expect(result).toBe('https://example.com/?key1=newValue1&key2=value2')
  })
})