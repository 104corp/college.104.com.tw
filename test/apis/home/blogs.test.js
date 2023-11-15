import { formatter } from '@/apis/home/blogs'
describe('formatter-list', () => {
  it('如果回應資料正確，應該回傳格式化後的物件', () => {
    const data = [
      {
        title: 'title',
        content: 'content',
        image: 'image',
        link: 'link',
        pin: true
      }
    ]

    const result = formatter.list(data)

    expect(result).toEqual([
      {
        title: 'title',
        content: 'content',
        link: 'link',
        image: 'image',
        isPinned: true
      }
    ])
  })

  it('如果資料為[]，應該回傳 []', () => {
    const result = formatter.list([])

    expect(result).toEqual([])
  })
})