import { formatter } from '@/apis/home/podcastList'
import { expect } from 'vitest'
describe('formatter-channel', () => {
  it('如果回應資料正確，回傳物件應該包含頻道資料及格式化後的episodes', () => {
    const data = [
      {
        title: 'title',
        content: 'content',
        image: 'image',
        link: 'link',
        date: 111
      }
    ]

    const result = formatter.channel(data)

    expect(result).to.include.keys('name', 'description', 'image', 'link', 'episodes')
    expect(result.episodes).toEqual([ {
      title: 'title',
      content: 'content',
      image: 'image',
      link: 'link',
      releaseDate: 111
    } ]
    )
  })
})