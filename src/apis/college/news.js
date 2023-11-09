import { apiHandler } from '@/apis/apiHandler.js'

const apiPath = 'college/news'
export const formatter = {
  data: (data) => {
    return data.map(({
      type, title, link 
    }) => {
      return {
        type,
        title,
        url: link
      }
    })
  }
}

export default {
  get: async () => {
    const responseType = [
      {
        type: 'string',
        title: 'string',
        link: 'string',
        owner: 'string'
      }
    ]
      
    return await apiHandler(
      {
        method: 'GET',
        apiPath,
        responseType,
        responseFormatter: formatter.data
      }
    )
  },
  post: () => {},
  put: () => {},
  delete: () => {}
}