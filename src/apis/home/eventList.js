import { apiHandler } from '@/apis/apiHandler.js'

const apiPath = 'home/eventList'
export const formatter = {
  list: (data) => {
    return data.map(({
      title, content, image, link 
    }) => {
      return {
        title,
        description: content,
        link,
        image
      }
    })
  }
}

export default {
  get: async () => {
    const responseType = [
      {
        title: 'string',
        content: 'string',
        image: 'string',
        link: 'string'
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