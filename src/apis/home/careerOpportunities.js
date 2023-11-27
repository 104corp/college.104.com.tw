import { apiHandler } from '@/apis/apiHandler.js'

const apiPath = 'home/careerOpportunities'
export const formatter = {
  list: (data) => {
    return data.flat().map(({
      url, picUrl 
    }) => {
      return {
        image: picUrl,
        link: url
      }
    })
  }
}

export default {
  get: async () => {
    const responseType = [ [
      {
        url: 'string',
        picUrl: 'string'
      }
    ] ]
      
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