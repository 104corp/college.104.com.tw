import { apiHandler } from '@/apis/apiHandler.js'

const apiPath = 'home/storySample'
export const formatter = {
  data: (data) => {
    return data.map(({
      name, job, head, background, title, url 
    }) => {
      return {
        author: {
          name,
          jobTitle: job,
          avatar: head
        },
        title,
        cover: background,
        url
      } 
    })
  }
}

export default {
  get: async () => {
    const responseType = [
      {
        name: 'string',
        job: 'string',
        title: 'string',
        url: 'string',
        head: 'string',
        background: 'string'
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