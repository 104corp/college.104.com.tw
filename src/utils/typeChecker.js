const typeHandler = {
  string: value => typeof value === 'string',
  number: value => typeof value === 'number',
  boolean: value => value === true || value === false,
  array: value => Array.isArray(value),
  object: value => typeof value === 'object' && value === Object(value),
  null: value => value === null,
}
    
/**
 * 確認對象是否符合指定型別
 * @param {string} typeString 型別
 * @param {any} target 對象
 * @returns {boolean}
 */
export const checkType = (typeString, target) => {
  // 確認包含檢查的對象及型別為字串
  if (!typeHandler.string(typeString) || target === undefined) throw new Error('Attribute Error')
  // 分割型別字串並逐一檢查
  const types = typeString.split('|')
  for (let type of types) {
    if (!typeHandler[type]) throw new Error('Type not Exited')
    if (typeHandler[type](target)) return true
  }
  return false
}
    
/**
 * 確認對象陣列內容是否符合陣列與內容型別結構
 * @param {array} typeTarget 陣列與內容型別
 * @param {array} target 對象陣列
 * @param {boolean} acceptExtend 是否允許物件擁有額外屬性
 * @returns {boolean}
 */
export const checkArray = (typeTarget, target, acceptExtend) => {
  // 確認檢查的對象與型別皆為陣列
  if (!checkType('array', typeTarget) || !checkType('array', target)) throw new Error('Attribute Error')
  // 若陣列內型別未指定，則直接通過
  if (!typeTarget.length) return true
  const type = typeTarget[0]
  // 若指定陣列內型，逐一確認有不符合則跳出
  return !target.some((targetElement) => {
    return !checkDataType(type, targetElement, acceptExtend)
  })
}
    
/**
 * 確認對象物件是否符合型別結構
 * @param {object} structure 物件型別結構
 * @param {object} target 對象物件
 * @param {boolean} acceptExtend 是否允許物件擁有額外屬性
 * @returns {boolean}
 */
export const checkObject = (structure, target, acceptExtend) => {
  // 確認檢查的對象與型別皆為物件
  if (!checkType('object', structure) || !checkType('object', target)) throw new Error('Attribute Error')
  // 嚴格比對物件 key 個數相同
  const structureKeys = Object.keys(structure)
  const targetKeys = Object.keys(target)
  if (!acceptExtend && structureKeys.length !== targetKeys.length) {
    return false
  }
  // 依照 key 指定型別逐一確認，有不符合則跳出
  return structureKeys.every((key) => {
    if (!(key in target)) return false
    return checkDataType(structure[key], target[key], acceptExtend)
  })
}
    
/**
 * 符合是確認對象型別
 * @param {string} type 型別
 * @param {any} target 對象
 * @param {boolean} acceptExtend 是否允許物件擁有額外屬性
 * @returns {boolean}
 */
export const checkDataType = (type, target, acceptExtend) => {
  let result = true
  try {
    if (checkType('array', type)) {
      result = checkArray(type, target, acceptExtend)
    } else if (checkType('object', type)) {
      result = checkObject(type, target, acceptExtend)
    } else {
      result = checkType(type, target)
    }
  } catch (err) {
    return false
  }
  return result
}