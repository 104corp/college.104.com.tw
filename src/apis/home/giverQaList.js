import { apiHandler } from '@/apis/apiHandler.js'

const apiPath = 'home/giverQaList'
export const formatter = {
  data: (data) => {
    return data.map(({
      question, viewCount, answerCount, answerHead, link 
    }) => {
      return {
        question,
        viewsCount: viewCount,
        answerCount,
        answerAvatars: answerHead,
        link
      }
    })
  }
}

export default {
  get: async () => {
    const responseType = [
      {
        question: 'string',
        viewCount: 'number',
        answerCount: 'number',
        answerHead: [
          'string'
        ],
        link: 'string'
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