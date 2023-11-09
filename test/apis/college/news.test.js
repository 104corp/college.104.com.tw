import { formatter } from '@/apis/college/news.js'
describe('formatter-data', () => {
  it('如果回應資料正確，應該回傳格式化後的物件', () => {
    const data = [
      {
        type: 'type',
        title: 'title',
        link: 'link',
        owner: 'owner'
      }
    ]

    const result = formatter.data(data)

    expect(result).toEqual([ {
      type: 'type',
      title: 'title',
      url: 'link'
    } ])
  })

  it('如果資料為[]，應該回傳 []', () => {
    const result = formatter.data([])

    expect(result).toEqual([])
  })
})