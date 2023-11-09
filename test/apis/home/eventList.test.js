import { formatter } from '@/apis/home/eventList'
describe('formatter-data', () => {
  it('如果回應資料正確，應該回傳格式化後的物件', () => {
    const data = [
      {
        title: 'title',
        content: 'content',
        image: 'image',
        link: 'link'
      }
    ]

    const result = formatter.list(data)

    expect(result).toEqual([
      {
        title: 'title',
        description: 'content',
        image: 'image',
        link: 'link'
      }
    ])
  })

  it('如果資料為[]，應該回傳 []', () => {
    const result = formatter.list([])

    expect(result).toEqual([])
  })
})