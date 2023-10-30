/**
 * vue composable: addQuery
 * url 格式轉為 URL object，並透過 url.searchParams 添加 queries
 * url 輸入值若無法轉為 URL object，則回傳原值。
 * @param {string} url
 * @param {object} queries
 * @returns {string} 
 */
export const addQuery = (url, queries) => {
  try {
    const urlObj = new URL(url)
    const searchParams = new URLSearchParams(urlObj.search)
    for (const [ key, value ] of Object.entries(queries)) {
      searchParams.set(key, value)
    }
    urlObj.search = searchParams.toString()
    return urlObj.toString()
  } catch (error) {
    return url
  }
}