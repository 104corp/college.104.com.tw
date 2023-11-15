import { apiHandler } from '@/apis/apiHandler.js'

const apiPath = 'auth/getStatusInfo'
export const formatter = {
  profile: (data) => {
    if (data?.userProfile) {
      return {
        familyName: data.userProfile.familyName || '',
        firstName: data.userProfile.firstName || '',
        avatar: data.userProfile.avatar ? `data:image/jpeg;base64,${ data.userProfile.avatar }` : null
      }
    } else {
      return null
    }
  }
}

export default {
  get: async () => {
    const responseType = 'object|null'

    return await apiHandler(
      {
        method: 'GET',
        apiPath,
        responseType,
        responseFormatter: formatter.profile
      }
    )
  },
  post: () => {},
  put: () => {},
  delete: () => {}
}