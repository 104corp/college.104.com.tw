import { apiHandler } from '@/apis/apiHandler.js'

const apiPath = '{{ $apiPath }}'
export const formatter = {
  data: () => {}
}

export default {
  get: async (payload) => {
    const responseType = {}
      
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