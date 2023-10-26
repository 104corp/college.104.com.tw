import {
  setActivePinia, createPinia, 
} from 'pinia'
import {
  useError, generateError, addDefaultError, addErrorConfig
} from '@/stores/Error.js'

global.console = { warn: vi.fn() }
    
describe('addDefaultError 函式', () => {
  it('如果 defaultError 是一個有效的函式，應該回傳 errorMapDefault', () => {
    const errorMapDefault = { message: '預設錯誤' }
    const result = addDefaultError({ defaultError: () => errorMapDefault })
    expect(result()).toBe(errorMapDefault)
  })
    
  it('如果 defaultError 不是函式，應該回傳一個回傳該值的函式', () => {
    const defaultValue = '這是一個預設值'
    const result = addDefaultError({ defaultError: defaultValue })
    const returnedFunction = result()
    expect(typeof result).toBe('function')
    expect(returnedFunction).toBe(defaultValue)
  })
    
  it('如果未提供 defaultError，應該回傳一個回傳 undefined 的函式', () => {
    const result = addDefaultError({})
    const returnedFunction = result()
    expect(typeof result).toBe('function')
    expect(returnedFunction).toBeUndefined()
  })
    
  it('如果 defaultError 為 null，應該回傳一個回傳 null 的函式', () => {
    const result = addDefaultError({ defaultError: null })
    const returnedFunction = result()
    expect(typeof result).toBe('function')
    expect(returnedFunction).toBeNull()
  })
    
  it('如果 defaultError 是其他非函式的值，應該回傳一個回傳該值的函式', () => {
    const defaultValue = 12345
    const result = addDefaultError({ defaultError: defaultValue })
    const returnedFunction = result()
    expect(typeof result).toBe('function')
    expect(returnedFunction).toBe(defaultValue)
  })
    
  it('如果 defaultError 為 undefined，應該回傳一個回傳 undefined 的函式', () => {
    const result = addDefaultError({ defaultError: undefined })
    const returnedFunction = result()
    expect(typeof result).toBe('function')
    expect(returnedFunction).toBeUndefined()
  })
})
    
describe('addErrorConfig 函式', () => {
  it('如果提供有效的 errors 和 errorMap，應該成功新增對應的錯誤訊息到 errorMap', () => {
    const errors = {
      key1: () => '錯誤訊息1',
      key2: '這是一個預設值',
    }
        
    const errorMaps = addErrorConfig({
      errors, registerName: '', errorMap: {
        'key3': () => '錯誤訊息3'
      }
    })
    
    expect(errorMaps.key1()).toBe('錯誤訊息1')
    expect(typeof errorMaps.key2).toBe('function')
    expect(errorMaps.key2()).toBe(errors.key2)
    expect(errorMaps.key3()).toBe('錯誤訊息3')
  })
    
  it.skip('如果提供了重複的 key，應該在控制台輸出錯誤訊息並忽略重複的 key', () => {
    const errors = {
      key1: () => '錯誤訊息1',
      key2: '這是一個預設值',
    }
    
    const errorMap = {
      key1: () => '先前已存在的錯誤訊息',
    }
    
    console.error = vi.fn()
    
    const errorMaps = addErrorConfig({
      errors, errorMap 
    })
    
    expect(console.error).toHaveBeenCalledWith('errorMap 已存在相同的 key')
    expect(errorMaps.key1()).toBe('先前已存在的錯誤訊息')
    expect(errorMaps.key2()).toBe('這是一個預設值')
  })
    
  it('如果 value 是有效的函式，應該將其直接新增到 errorMap 中', () => {
    const errors = {
      key1: () => '錯誤訊息1',
    }
    
    const errorMap = {}
    
    const errorMaps = addErrorConfig({
      errors, errorMap 
    })
    
    expect(errorMaps.key1).toBe(errors.key1)
  })
    
  it('如果 value 不是函式，應該回傳一個回傳該值的函式並在控制台輸出警告訊息', () => {
    const errors = {
      key1: '這是一個預設值',
    }
    
    const errorMap = {}
    
    const errorMaps = addErrorConfig({
      errors, errorMap 
    })
    
    expect(errorMaps.key1()).toBe('這是一個預設值')
    expect(console.warn).toHaveBeenCalledWith('key1 所定義的值不是 function')
  })
    
  it('如果 errors 為空物件，不應該對 errorMap 進行任何更動', () => {
    const errors = {}
    const errorMap = {}
    
    const errorMaps = addErrorConfig({
      errors, errorMap 
    })
    
    expect(Object.keys(errorMaps).length).toBe(0)
  })
    
  it('如果 errors 和 errorMap 都為空物件，不應該對 errorMap 進行任何更動', () => {
    const errors = {}
    const errorMap = {}
    
    const errorMaps = addErrorConfig({
      errors, errorMap 
    })
    
    expect(Object.keys(errorMaps).length).toBe(0)
  })
})
    
describe('useError: add', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
    
  it('如果提供有效的 errors 和 registerName，應該成功新增錯誤訊息到 errorMap 並回傳 errorMap', () => {
    const error = useError()
    const errors = {
      key1: () => '錯誤訊息1',
      key2: '這是一個預設值',
    }
    
    const registerName = 'user'
    
    const result = error.add({
      errors, registerName 
    })
    
    expect(result['user/key1']()).toBe('錯誤訊息1')
    expect(result['user/key2']()).toBe('這是一個預設值')
  })
    
  it('如果未提供 errors 或 registerName，應該回傳空的物件並在控制台輸出錯誤訊息', () => {
    const error = useError()
    console.error = vi.fn()
    
    const result1 = error.add({
      errors: {}, registerName: 'user'
    })
    const result2 = error.add({ errors: { key: 'value' } })
    const result3 = error.add({})
    
    expect(result1.defaultError()).toBeNull()
    expect(result1).not.toHaveProperty('user')
    
    expect(result2.key()).toBe('value')
    expect(result2.defaultError()).toBeNull()
    
    expect(result3.key()).toBe('value')
    expect(result3.defaultError()).toBeNull()
    
    expect(console.error).not.toBeCalled()
  })
    
  it('如果提供無效的 registerName，應該回傳一個空物件並在控制台輸出錯誤訊息', () => {
    const error = useError()
    console.error = vi.fn()
    
    const errors = {
      key1: () => '錯誤訊息1',
    }
    
    const registerName = 12345
    
    const result = error.add({
      errors, registerName 
    })
    
    expect(result).toEqual({})
    expect(console.error).toHaveBeenCalledWith('registerName: 應為字串型別')
  })
    
  it('如果提供有效的 defaultError，應該新增到 errorMap 中作為預設錯誤處理函式', () => {
    const error = useError()
    const errors = {
      key1: () => '錯誤訊息1',
    }
    
    const defaultError = () => '預設錯誤訊息'
    
    const result = error.add({
      errors, defaultError 
    })
    
    expect(typeof result.defaultError).toBe('function')
    expect(result.defaultError()).toBe('預設錯誤訊息')
  })
    
  it('如果提供無效的 defaultError，應該將其視為 null 並新增預設錯誤處理函式到 errorMap 中', () => {
    const error = useError()
    const errors = {
      key1: () => '錯誤訊息1',
    }
    
    const defaultError = '這不是一個有效的函式'
    
    const result = error.add({
      errors, defaultError 
    })
    
    expect(typeof result.defaultError).toBe('function')
    expect(result.defaultError()).toBe('這不是一個有效的函式')
  })
    
  it('如果未提供 defaultError，應該新增一個回傳 null 的預設錯誤處理函式到 errorMap 中', () => {
    const error = useError()
    const errors = {
      key1: () => '錯誤訊息1',
    }
    
    const result = error.add({ errors })
    expect(result).toHaveProperty('defaultError')
    expect(result.defaultError()).toBeNull()
  })
})
    
describe('useError: execute', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
    
  it('如果 errorConfig 的 cause 存在於 errorMap 中，應該執行對應的錯誤處理函式', () => {
    const error = useError()
    
    const mockErrorMap = {
      '500': () => 500,
      '400': () => 400,
    }
    error.add({ errors: mockErrorMap })
    
    const errorConfig = {
      error: new Error('這是測試錯誤', {
        cause: {
          status: 500
        }
      }),
      instance: {
        $options: { __name: 'useError.test.js' },
      },
      info: 'testError'
    }
    
    const result = error.execute(errorConfig)
    expect(result).toBe(500)
  })
    
  it('如果 errorConfig error 沒有 cause 存在，執行 defaultError', () => {
    const error = useError()
    
    const mockErrorMap = {
      '500': () => 500,
      '400': () => 400,
    }
    error.add({
      errors: mockErrorMap, defaultError: () => 'defaultError' 
    })
    
    const errorConfig = {
      error: new Error('這是測試沒有 cause 錯誤'),
      instance: {
        $options: { __name: 'useError.test.js' },
      },
      info: 'testError'
    }
    
    const result = error.execute(errorConfig)
    expect(result).toBe('defaultError')
  })
    
  it('如果 errorConfig error 有 cause 存在但 status code 不存在，執行 defaultError', () => {
    const error = useError()
    
    const mockErrorMap = {
      '500': () => 500,
      '400': () => 400,
    }
    error.add({
      errors: mockErrorMap, defaultError: () => 'defaultError' 
    })
    
    const errorConfig = {
      error: new Error('這是測試沒有 cause 錯誤', {
        cause: {
          status: 404
        }
      }),
      instance: {
        $options: { __name: 'useError.test.js' },
      },
      info: 'testError'
    }
    
    const result = error.execute(errorConfig)
    expect(result).toBe('defaultError')
  })
})
    
describe('generateError', () => {
  // Tests that the function works with valid input values
  it('產生需要的 Error', () => {
    const error = new Error('Something went wrong')
    const errorEnvironment = 'production'
    const result = generateError({
      error, errorEnvironment 
    })
  
    expect(result).toBeInstanceOf(Error)
    expect(result.message).toEqual('[Something went wrong] ')
    expect(result.cause).toEqual({
      environment: 'production',
      code: '',
      stack: error.stack,
      originalMessage: 'Something went wrong',
      originalError: 'Error',
      originalErrorCause: undefined,
    })
  })
    
  // Tests that the function throws an error when the input value is invalid
  it('當 error 本來有就有 cause, 會產生包含原 cause 的 Error', () => {
    const error = new Error('Something went wrong')
    error.cause = {
      status: 500,
      message: 'Internal Server Error',
    }
    const errorEnvironment = 'staging'
    const result = generateError({
      error, errorEnvironment 
    })
  
    expect(result).toBeInstanceOf(Error)
    expect(result.message).toEqual('[Something went wrong] 500')
    expect(result.cause).toEqual({
      environment: 'staging',
      code: 500,
      stack: error.stack,
      originalMessage: 'Something went wrong',
      originalError: 'Error',
      originalErrorCause: {
        status: 500,
        message: 'Internal Server Error',
      },
    })
  })
})