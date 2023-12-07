import { apiHandler } from '@/apis/apiHandler.js'

const apiPath = 'home/blogs'
export const formatter = {
  list: (data) => {
    return data.map(({
      title, content, link, image, pin
    }) => {
      return {
        title,
        content,
        link,
        image,
        isPinned: pin
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
        link: 'string',
        pin: 'boolean'
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