import { apiHandler } from '@/apis/apiHandler.js'

const apiPath = 'home/resumeSample'
export const formatter = {
  data: (data) => {
    return data.map(({
      name, job, head, background, instruction, tags, url 
    }) => {
      return {
        name,
        jobTitle: job,
        avatar: head,
        coverImage: background,
        bio: instruction,
        hashTags: tags,
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
        instruction: 'string',
        tags: [
          'string'
        ],
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