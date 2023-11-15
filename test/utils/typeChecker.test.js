import {
  checkType, checkArray, checkObject 
} from '@/utils/typeChecker.js'

describe('CheckType', () => {
  it('類型參數未傳回傳錯誤', () => {
    expect(() => checkType()).toThrowError('Attribute Error')
  })
  it('類型參數錯誤回傳錯誤', () => {
    expect(() => checkType({})).toThrowError('Attribute Error')
  })
  it('對象參數未傳回傳錯誤', () => {
    expect(() => checkType('',)).toThrowError('Attribute Error')
  })
  it('類型參數不存在回傳錯誤', () => {
    expect(() => checkType('some type', '')).toThrowError('Type not Exited')
  })
  it('檢查字串為字串型別', () => {
    expect(checkType('string', 'test')).toBe(true)
  })
  it('檢查 0 為數字型別', () => {
    expect(checkType('number', 0)).toBe(true)
  })
  it('檢查數字為數字型別', () => {
    expect(checkType('number', 123)).toBe(true)
  })
  it('檢查 true 為布林型別', () => {
    expect(checkType('boolean', true)).toBe(true)
  })
  it('檢查 false 為布林型別', () => {
    expect(checkType('boolean', false)).toBe(true)
  })
  it('檢查物件為物件型別', () => {
    expect(checkType('object', {})).toBe(true)
  })
  it('檢查陣列為陣列型別', () => {
    expect(checkType('array', [])).toBe(true)
  })
  it('檢查空值為空', () => {
    expect(checkType('null', null)).toBe(true)
  })
  it('檢查空值通過字串可為空', () => {
    expect(checkType('string|null', null)).toBe(true)
  })
  it('檢查空值通過數字可為空', () => {
    expect(checkType('number|null', null)).toBe(true)
  })
  it('檢查空值通過布林可為空', () => {
    expect(checkType('boolean|null', null)).toBe(true)
  })
  it('檢查空值通過物件可為空', () => {
    expect(checkType('object|null', null)).toBe(true)
  })
  it('檢查空值通過陣列可為空', () => {
    expect(checkType('array|null', null)).toBe(true)
  })
})
describe('CheckArray', () => {
  it('類型參數未傳回傳錯誤', () => {
    expect(() => checkArray()).toThrowError('Attribute Error')
  })
  it('類型參數錯誤回傳錯誤', () => {
    expect(() => checkArray({})).toThrowError('Attribute Error')
  })
  it('對象參數未傳回傳錯誤', () => {
    expect(() => checkArray([],)).toThrowError('Attribute Error')
  })
  it('對象參數錯誤回傳錯誤', () => {
    expect(() => checkArray([], {})).toThrowError('Attribute Error')
  })
  it('檢查陣列內為單純字串型別', () => {
    expect(checkArray([ 'string' ], [ 'test', '123' ])).toBe(true)
  })
  it('檢查陣列內為單純字串型別，部分資料不符合', () => {
    expect(checkArray([ 'string' ], [ 'test', 1, '123' ])).toBe(false)
  })
  it('檢查陣列內為單純數字型別', () => {
    expect(checkArray([ 'number' ], [ 1, 2 ])).toBe(true)
  })
  it('檢查陣列內為單純數字型別，部分資料不符合', () => {
    expect(checkArray([ 'number' ], [ 1, 'test', 2 ])).toBe(false)
  })
  it('檢查陣列內為單純布林型別', () => {
    expect(checkArray([ 'boolean' ], [ true, false ])).toBe(true)
  })
  it('檢查陣列內為單純布林型別，部分資料不符合', () => {
    expect(checkArray([ 'boolean' ], [ true, 'test', false ])).toBe(false)
  })
})
describe('CheckObject', () => {
  it('結構未傳回傳錯誤', () => {
    expect(() => checkObject()).toThrowError('Attribute Error')
  })
  it('結構參數錯誤回傳錯誤', () => {
    expect(() => checkObject('')).toThrowError('Attribute Error')
  })
  it('對象參數未傳回傳錯誤', () => {
    expect(() => checkObject({})).toThrowError('Attribute Error')
  })
  it('對象參數錯誤回傳錯誤', () => {
    expect(() => checkObject({}, '')).toThrowError('Attribute Error')
  })
  it('單層資料符合架構', () => {
    expect(checkObject({
      string: 'string',
      number: 'number',
      boolean: 'boolean',
      object: 'object',
      array: 'array',
      null: 'null'
    }, {
      string: 'string',
      number: 123,
      boolean: true,
      object: {},
      array: [],
      null: null
    })).toBe(true)
  })
  it('單層資料符合架構但有額外 key 不同', () => {
    expect(checkObject({
      string: 'string',
      number: 'number',
      boolean: 'boolean',
      object: 'object',
      array: 'array',
      null: 'null'
    }, {
      string: 'string',
      number: 123,
      boolean: true,
      object: {},
      array: [],
      null: null,
      other: '123'
    })).toBe(false)
  })
  it('單層資料符合架構但有額外 key 不同，開啟相似比對回傳 true', () => {
    expect(checkObject({
      string: 'string',
      number: 'number',
      boolean: 'boolean',
      object: 'object',
      array: 'array',
      null: 'null'
    }, {
      string: 'string',
      number: 123,
      boolean: true,
      object: {},
      array: [],
      null: null,
      other: '123'
    }, true)).toBe(true)
  })

  it('物件符合巢狀架構', () => {
    expect(checkObject({
      object: {
        string: 'string',
        number: 'number',
        boolean: 'boolean',
        object: {
          string: 'string',
          number: 'number',
          boolean: 'boolean',
        }
      }
    }, {
      object: {
        string: 'string',
        number: 123,
        boolean: true,
        object: {
          string: 'string',
          number: 123,
          boolean: true
        }
      }
    })).toBe(true)
  })
  it('物件符合巢狀架構但有額外 key 不同', () => {
    expect(checkObject({
      object: {
        string: 'string',
        number: 'number',
        boolean: 'boolean',
        object: {
          string: 'string',
          number: 'number',
          boolean: 'boolean',
        }
      }
    }, {
      object: {
        string: 'string',
        number: 123,
        boolean: true,
        object: {
          string: 'string',
          number: 123,
          boolean: true,
        },
        other: '123'
      }
    })).toBe(false)
  })
  it('物件符合巢狀架構但有額外 key 不同，開啟相似比對', () => {
    expect(checkObject({
      object: {
        string: 'string',
        number: 'number',
        boolean: 'boolean',
        object: {
          string: 'string',
          number: 'number',
          boolean: 'boolean',
        }
      }
    }, {
      object: {
        string: 'string',
        number: 123,
        boolean: true,
        object: {
          string: 'string',
          number: 123,
          boolean: true,
        },
        other: '123'
      }
    }, true)).toBe(true)
  })

  it('陣列內容符合單純資料類型', () => {
    expect(checkObject({
      array: [ 'string' ]
    }, {
      array: [ 'string', 'string', 'string' ]
    })).toBe(true)
  })

  it('陣列內容部分資料不符合單純資料類型', () => {
    expect(checkObject({
      array: [ 'string' ]
    }, {
      array: [ 'string', 123, 'string' ]
    })).toBe(false)
  })

  it('陣列內容符合物件資料類型', () => {
    expect(checkObject({
      array: [ {
        string: 'string',
        number: 'number',
        boolean: 'boolean',
      } ]
    }, {
      array: [ {
        string: 'string1',
        number: 1,
        boolean: true
      }, {
        string: 'string2',
        number: 2,
        boolean: true
      }, {
        string: 'string3',
        number: 3,
        boolean: true
      } ]
    })).toBe(true)
  })

  it('陣列內容部分符合物件資料類型但有額外 key 不同', () => {
    expect(checkObject({
      array: [ {
        string: 'string',
        number: 'number',
        boolean: 'boolean',
      } ]
    }, {
      array: [ {
        string: 'string1',
        number: 1,
        boolean: true
      }, {
        string: 'string2',
        number: 2,
        boolean: true,
        other: '123'
      }, {
        string: 'string3',
        number: 3,
        boolean: true
      } ]
    })).toBe(false)
  })

  it('陣列內容部分符合物件資料類型但有額外 key 不同，開啟相似比對', () => {
    expect(checkObject({
      array: [ {
        string: 'string',
        number: 'number',
        boolean: 'boolean',
      } ]
    }, {
      array: [ {
        string: 'string1',
        number: 1,
        boolean: true
      }, {
        string: 'string2',
        number: 2,
        boolean: true,
        other: '123'

      }, {
        string: 'string3',
        number: 3,
        boolean: true
      } ]
    }, true)).toBe(true)
  })
})