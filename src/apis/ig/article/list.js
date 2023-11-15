import { apiHandler } from '@/apis/apiHandler.js'

const apiPath = 'ig/article/list'
export const formatter = {
  channel: ({
    igHref, igName, igDesc, igPic, list 
  }) => {
    return {
      name: igName,
      description: igDesc,
      link: igHref,
      image: igPic,
      posts: list.map(({
        mediaUrl, permalink, caption 
      }) => {
        return {
          content: caption,
          image: mediaUrl,
          link: permalink
        }
      })
    }
  }
}

export default {
  get: async (param) => {
    const responseType = {
      igHref: 'string',
      igName: 'string',
      igDesc: 'string',
      igPic: 'string',
      list: [
        {
          mediaUrl: 'string',
          permalink: 'string',
          caption: 'string'
        }
      ]
    }
      
    return await apiHandler(
      {
        method: 'GET',
        apiPath: `${ apiPath }?type=${ param }`,
        responseType,
        responseFormatter: formatter.channel
      }
    )
  },
  post: () => {},
  put: () => {},
  delete: () => {}
}