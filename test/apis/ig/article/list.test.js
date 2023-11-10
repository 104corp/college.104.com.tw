import { formatter } from '@/apis/ig/article/list'
describe('formatter-channel', () => {
  it('如果回應資料正確，應該回傳格式化後的物件', () => {
    const data = {
      igHref: 'igHref',
      igName: 'igName',
      igDesc: 'igDesc',
      igPic: 'igPic',
      list: [
        {
          mediaUrl: 'mediaUrl',
          permalink: 'permalink',
          caption: 'caption'
        }
      ]
    }

    const result = formatter.channel(data)

    expect(result).toEqual({
      name: 'igName',
      description: 'igDesc',
      link: 'igHref',
      image: 'igPic',
      posts: [ {
        content: 'caption',
        image: 'mediaUrl',
        link: 'permalink'
      } ]
    })
  })
})