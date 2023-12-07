import { apiHandler } from '@/apis/apiHandler.js'

const apiPath = 'home/keywords'
export const formatter = {
  list: (data) => {
    return data.map(({
      type, keywords, link 
    }) => {
      return {
        name: keywords,
        url: link,
        type
      }
    })
  }
}

export default {
  get: async () => {
    const responseType = [
      {
        type: 'string',
        keywords: 'string',
        link: 'string|null'
      }
    ]
      
    return await apiHandler(
      {
        method: 'GET',
        apiPath,
        responseType,
        responseFormatter: formatter.list
      }
    )
  },
  post: () => {},
  put: () => {},
  delete: () => {}
}