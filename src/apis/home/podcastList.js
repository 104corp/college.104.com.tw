import { apiHandler } from '@/apis/apiHandler.js'
import { blogUrl } from '@/common/domainConfig.js'
const apiPath = 'home/podcastList'
export const formatter = {
  channel: (list) => {
    return {
      name: '青春通識課',
      description:
        '大學生出社會前的先修課🎧\n✅訪談大學生探索自我的故事\n✅開箱百工職人工作秘辛\n✅討論如何在大學養成職場必備軟硬實力\n陪你一起找方向！',
      image: new URL('../../assets/img/Index/104youth-cover.png', import.meta.url).href,
      link: `${ blogUrl }/category/podcast/104youth/`,
      episodes: list.map(({
        title, content, image, link, date 
      }) => {
        return {
          title,
          content,
          link,
          image,
          releaseDate: date
        }
      })
    }
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
        date: 'number'
      }
    ]
      
    return await apiHandler(
      {
        method: 'GET',
        apiPath,
        responseType,
        responseFormatter: formatter.channel
      }
    )
  },
  post: () => {},
  put: () => {},
  delete: () => {}
}